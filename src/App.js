import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

// Clarifai API authentication information
const app = new Clarifai.App({
  apiKey: 'ffae0e82726a4f91855cf68633e4b26f'
 });

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

  componentDidMount(){
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(console.log)
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
    console.log(this.state.box);
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
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
  
  render(){
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions} 
        />
        
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
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
