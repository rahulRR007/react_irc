import './App.css';
import { Route,Routes,BrowserRouter} from 'react-router-dom';
import Loginpage from './components/Loginpage/Loginpage';
import Registerpage from './components/reg/Registerpage.jsx';


function App() {
  return (
    
    
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Loginpage/>}></Route>
          <Route exact path="/register" element={<Registerpage/>}></Route>
        </Routes>
        </BrowserRouter>

      </div>
    
  );
};

export default App;
