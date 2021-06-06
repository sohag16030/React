import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import Counter from "./components/Counter";
import CarOne from "./components/CarOne";
import CarTwo from "./components/CarTwo";
import { ClickOne } from "./components/ClickOne";
import  ClickTwo  from "./components/ClickTwo";
import BindEvent from "./components/BindEvent";
import Parent from "./components/Parent";
import { Student } from "./components/Student";

function App() {
  return (
    <div className="App">
      {/*   <Hello name="Suny" age="21">
        This is children props
      </Hello>
      <Hello name="Rakib" age="31" />
      <Hello name="Robi" age="22" /> */}

      {/*     <Welcome name="John" age="23"></Welcome> */}
      <div>
        {/*   <Subscribe></Subscribe> */}
       {/*  <Counter></Counter> */}
      {/* <CarOne brand="Allion" colour="Black"></CarOne>
      <CarTwo brand="Premio" colour="Black"></CarTwo> */}

     {/*  <ClickOne></ClickOne> */}
     {/*  <ClickTwo></ClickTwo> */}
    {/*  <BindEvent></BindEvent> */}
  {/*   <Parent></Parent> */}
  <Student></Student>
      </div>
    </div>
  );
}

export default App;
