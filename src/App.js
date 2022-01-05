import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Routes, Switch} from 'react-router-dom'
import ListCropComponent from './components/ListCropComponent';
import CreateCrop from './components/CreateCrop';
import UpdateCrop from './components/UpdateCrop';
import ListFarmerComponent from './components/ListFarmerComponent'
import UpdateFarmer from './components/UpdateFarmer'
import CreateFarmer from './components/CreateFarmer';
import CreateDealer from './components/CreateDealer'
import Home from './components/Home';
import Header from './components/Header';
import DealerLogin from './components/DealerLogin';
import FarmerLogin from './components/FarmerLogin'
import Footer from './components/Footer';
import Register from './components/Register';
import Register1 from './components/Register1';
import Google from './components/Google';
import Categories from './components/Categories';
import Checkout from './components/Checkout';
import About from './components/About';
import ListDealerComponent from './components/ListDealerComponent'
import Farmerdb from './components/Farmerdb';
import Dealerdb from './components/Dealerdb';
// import BuyCrop from './components/BuyCrop'
// import Profile from'./components/Profile';



function App() {
  return (
    <div>
      
    <Router>
      <Header />
     
      <div className="container">
      <Routes>
        <Route path= "/" exact element={<Home/>}></Route>
        <Route path="/crops" exact element= {<ListCropComponent/>}></Route>
        <Route path="/dealers" exact element= {<ListDealerComponent/>}></Route>
        <Route path="/add-crop" exact element= {<CreateCrop />}></Route>
        <Route path="/updatecrop/:cropid" exact element={<UpdateCrop />}></Route>
        <Route path="/farmers" exact element={<ListFarmerComponent />}></Route>
        <Route path="/add-farmer" exact element={<CreateFarmer />}></Route>
        <Route path="/updatefarmer/:id" exact element={<UpdateFarmer />}></Route>
        <Route path="/login" exact element={<DealerLogin />}></Route>
        <Route path="/login1" exact element={<FarmerLogin />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/register1" exact element={<Register1 />}></Route>
        <Route path="/checkout" exact element={<Google/>}></Route>
        <Route path="/catageories" exact element={<Categories/>}></Route>
        <Route path="/checkout" exact element={<Checkout/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/add-dealer" exact element={<CreateDealer />}></Route>
        <Route path="/farmer-dash" exact element={<Farmerdb/>}></Route>
        <Route path="/dealer-dash" exact element={<Dealerdb/>}></Route>
        {/* <Route path="/buy" exact element={<BuyCrop/>}></Route> */}
      
        
      </Routes>
     
  
    </div>
     <Footer/>
    

   
    </Router>
    </div>
  );
}
export default App;
