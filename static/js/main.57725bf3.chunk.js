(this.webpackJsonpsmartbrain=this.webpackJsonpsmartbrain||[]).push([[0],{244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(36),i=a.n(s),o=(a(74),a(12)),l=a(13),c=a(15),m=a(14),u=a(66),d=a.n(u),h=function(e){var t=e.onRouteChange,a=e.isSignedIn,n=e.onSignOut;return a?r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){n(),t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),r.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},g=function(e){var t=e.errorState;return t?1===t?r.a.createElement("div",{className:"lh-copy mt1"},r.a.createElement("p",{href:"#0",className:"f6 dark-red db err-msg"},"No field should be left empty")):2===t?r.a.createElement("div",{className:"lh-copy mt1"},r.a.createElement("p",{href:"#0",className:"f6 dark-red db err-msg"},"Email address and password do not match")):3===t?r.a.createElement("div",{className:"lh-copy mt1"},r.a.createElement("p",{href:"#0",className:"f6 dark-red db err-msg"},"Error logging in. Try again")):4===t?r.a.createElement("div",{className:"lh-copy mt1"},r.a.createElement("p",{href:"#0",className:"f6 dark-red db err-msg"},"Error registering. Try again")):void 0:null},p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){if(!n.state.signInEmail||!n.state.signInPassword)return n.setState({errorState:1});fetch("https://pure-plains-68415.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(n.props.loadUser(e),n.props.onRouteChange("home")):n.setState({errorState:2})})).catch((function(e){return n.setState({errorState:3})}))},n.state={signInEmail:"",signInPassword:"",errorState:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),r.a.createElement(g,{errorState:this.state.errorState}),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return e("register")},href:"#0",className:"f6 link dim black db pointer"},"Register")))))}}]),a}(r.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({registerName:e.target.value})},n.onEmailChange=function(e){n.setState({registerEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({registerPassword:e.target.value})},n.onSubmitRegister=function(){if(!n.state.registerEmail||!n.state.registerName||!n.state.registerPassword)return n.setState({errorState:1});fetch("https://pure-plains-68415.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.registerEmail,name:n.state.registerName,password:n.state.registerPassword})}).catch().then((function(e){return e.json()})).then((function(e){"Unable to register"!==e?(n.props.loadUser(e),n.props.onRouteChange("home")):n.setState({errorState:4})}))},n.state={registerName:"",registerEmail:"",registerPassword:"",errorState:0},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-2 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),r.a.createElement(g,{errorState:this.state.errorState}),r.a.createElement("div",{className:""},r.a.createElement("input",{onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))}}]),a}(r.a.Component),f=(a(244),function(e){var t=e.imageUrl,a=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("img",{id:"inputimage",src:t,alt:"Sub",width:"500ox",height:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),v=a(67),E=a.n(v),w=a(68),S=a.n(w),N=(a(245),function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(E.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa4"},r.a.createElement("img",{style:{paddingTop:"5px"},src:S.a,alt:"logo"})," ")))}),C=(a(246),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures. Give it a try"),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form pa4 br3 shadow-5 center"},r.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),y=function(e){var t=e.name,a=e.entries;return r.a.createElement("div",null,r.a.createElement("div",{className:"white f3"},"".concat(t,", your current entry count ...")),r.a.createElement("div",{className:"white f1"},a))},k=(a(247),{particles:{number:{value:90,density:{enable:!0,value_area:700}}}}),x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),r=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*r,rightCol:n-t.right_col*n,bottomRow:r-t.bottom_row*r}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("https://pure-plains-68415.herokuapp.com/detect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:e.state.input})}).catch().then((function(e){return e.json()})).then((function(t){t&&fetch("https://pure-plains-68415.herokuapp.com/image",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"home"===t?e.setState({isSignedIn:!0}):e.setState({isSignedIn:!1}),e.setState({route:t})},e.onSignOut=function(){e.setState({isSignedIn:!1,input:"",imageUrl:"",box:{}}),e.setState(Object.assign(e.state.user,{id:"",name:"",email:"",entries:0,joined:""}))},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,{className:"particles",params:k}),r.a.createElement(h,{onRouteChange:this.onRouteChange,isSignedIn:this.state.isSignedIn,onSignOut:this.onSignOut}),"home"===this.state.route?r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(y,{name:this.state.user.name,entries:this.state.user.entries}),r.a.createElement(C,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(f,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?r.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement(b,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(248);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t){e.exports="data:image/png;base64,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"},69:function(e,t,a){e.exports=a(249)},74:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.57725bf3.chunk.js.map