
import './App.css';
import Auth from './Components/Auth';
import {Router,Routes,Route} from "react-router-dom"
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Auth/>
      {/* <Router>
        <Routes>
          <Route Component={<Login/>} path={"/register"}/>
          <Route Component={<Register/>} path='/login'/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
