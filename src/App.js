import HomeComponent from "./Component/HomeComponent/HomeComponent";
import UploadComponent from "./Component/UploadComponent/UploadComponent";
import {BrowserRouter as Router , Routes,Route,Link, BrowserRouter} from 'react-router-dom'
import './App.css'
function App() {
  return (
    <BrowserRouter >
    <ul className="nav-container ">
      <li ><Link to='/' className="nav-item">Home</Link></li>
      <li><Link to='/upload' className="nav-item">Upload</Link></li>
      <li><Link to='/login' className="nav-item">Login</Link></li>
      <li><Link to='/register' className="nav-item">Register</Link></li>
    </ul>
      <Routes>
        <Route exact path="/" element={<HomeComponent/>}></Route>
        <Route path="/upload" element={<UploadComponent/>}></Route>
      </Routes>
      {/* <UploadComponent/> */}
    </BrowserRouter>
  );
}

export default App;
