import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
import Counter from './components/Counter';
import Condition from './components/Condition';
import './components/myStyle.css';
import Test from './components/Test';
import style from './components/Style.module.css';
import CompA from './components/CompA';

function App() {
  // let success = true;
  // let successs = {
  //   color: 'green',
  //   fontSize: '40px',
  // };
  return (
    <div className="App">
      {/* <h2 className={success ? 'success' : ''}>Hello User</h2> */}
      {/* <h2 style={successs}>Hello world</h2> */}
      {/* <Test></Test> */}
      {/* <h2 className={style.primary}>Hello brother</h2> */}
      <CompA></CompA>
    </div>
  );
}

export default App;
