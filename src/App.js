import React from 'react';
import Particles from 'react-particles-js';
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input: '', // mutated by ImageLinkForm with onInputChange
      imageUrl: '', // mutated by ImageLinkForm with onButtonSubmit
      box:{}, // facebox mutated by ImageLinkForm with onButtonSubmit, received by FaceRecognitionBox
      route: 'signin', // route mutated with onRouteChange
      isSignedIn: false, // signin status mutated with onRouteChange
      
      user : {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState(
      {
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }
      }
    )
  }

  calculateFaceLocation = (data) => {
    // Description: Extracts facebox vertices from Clarifai GET and returns exact pixel locations as a box object
    
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    // Description: Receives box object, and updates box state
    this.setState({box: box});
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('https://pure-plains-68415.herokuapp.com/detect',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          imageUrl: this.state.input
        })
      }
    )
    .catch()
    .then(response => response.json())
    .then(response => {
      if(response){
          fetch(
            'https://pure-plains-68415.herokuapp.com/image',
            {
              method: 'PUT',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  id: this.state.user.id,
              })
            }
          )
            .then(response => response.json())
            .then(
              count => {
                this.setState(Object.assign(this.state.user, {entries: count}));
              }
            )
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'home'){
      this.setState({isSignedIn: true})
    }
    else{
      this.setState({isSignedIn: false})
    }
    this.setState({route: route});
  }

  onSignOut = () => {
    this.setState({
      isSignedIn: false,
      input: '',
      imageUrl: '',
      box:{}
    })

    this.setState(Object.assign(this.state.user, {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }))
  }
  
  render(){
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} 
        />
        
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} onSignOut={this.onSignOut} />
        {this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
          : (
            this.state.route ==='signin'
            ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          )
          
          
        }
        
      </div>
    );
  }
  
}

export default App;
