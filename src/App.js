
import './App.css';
import HelloWorld from './Tutorial/1-HelloWorld';
import GetGreeting from './Tutorial/2-IntroducingJSX'
import Clock from './Tutorial/5-State';
import Phone from './Tutorial/ProjectState'
import { useState } from 'react';
import ClickHeading from './Tutorial/6-HandlingEvents';
import ClickCounter from './Tutorial/6-ClickCounter'
import NameForm from './Tutorial/9-Form'
function App() {
  const [numClicks, setNumClicks] = useState(0)
  const clickHandler = (e) => setNumClicks(numClicks + 1)
  return (
    <div className="App">
      <header className="App-header">
        <div className="HelloWorld"> 
        <h1>Hello World! 1-lesson</h1>
           <HelloWorld/>
        </div>
        <div className="GetGreeting">
          <h1> Introducing JSX 2-lesson </h1>
          <GetGreeting user="Xondamir" mail="xondamirxudayorov@gmail.com"/>
        </div>
        <div  className="Clock">
          <h1>State   5-lesson</h1>
          <Clock myProp="test"/>
        </div>
        <div className="Phone" >
          <h1>Ijodiy Ish </h1>
          <Phone/>
        </div>
         <div className="Handling-Events">
           <h1>Handling Events 6-lesson</h1>
            <ClickHeading numClicks={numClicks}/>
            <ClickCounter numClicks={numClicks} onClick = {clickHandler}/>
         </div>
         <div className="NameForm">
           <h1>Form 9-lesson</h1>
           <NameForm/>
         </div>
      </header>
    </div> 
  );
}

export default App;
