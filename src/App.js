import Navbar from "./Navbar/Navbar.js"
import Intro from "./Intro/Intro.js";
import Registration from "./Login/registration.js"
import SignUp from "./Login/signup.js";
import OTP from "./Login/OTP.js";
import Live1 from "./Live1/Live1.js";
import Category from "./Category/Category.js";
import Footer from "./footer/footer.js"
import Createauction from "./Createauction/createauction.js"
import Liveauction from "./LiveAuction/liveauction.js"
import { BrowserRouter,Routes, Route } from "react-router-dom";
//import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Registration/>}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      <Routes>
        <Route path="/OTP" element={<OTP/>}></Route>
      </Routes>
      <Routes>
        <Route path="/LiveAuction" element={<Liveauction/>}></Route>
      </Routes>
      <Routes>
      <Route path="/" element={<Intro/>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Live1/>}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Category/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Auctioncreate" element={<Createauction/>}></Route>
      </Routes>


      <Routes>
      <Route path="/Home" element={<Intro/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Home" element={<Live1/>}></Route>
      </Routes>
      <Routes>
        <Route path="/Home" element={<Category/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
