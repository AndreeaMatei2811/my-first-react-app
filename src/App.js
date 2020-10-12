import React from 'react';

function Hello (){
  return <h1> say hello!</h1>
}

function Greeting ({age, name}){
  const message = age
  ? `you are ${age}`
   : `I do not know how old are you`
  return <div>
  < Hello/>
  <p>this is your name: {name}!</p>
  <p>and this is your age: {message}</p>
  </div>
}



function App() {
  return (
      <div> 
      < Greeting name= "david"  age={30}/>
      < Greeting name="andreea"/>
      < Greeting name= "mika"  age={4}/>
      </div>
  )
}

export default App;
