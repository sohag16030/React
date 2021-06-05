import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/*   <Hello name="Suny" age="21">
        This is children props
      </Hello>
      <Hello name="Rakib" age="31" />
      <Hello name="Robi" age="22" /> */}

      <Welcome name="John" age="23"></Welcome>
    </div>
  );
}

export default App;
