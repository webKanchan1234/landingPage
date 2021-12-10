
import './App.css';
import Navbar from "./component/Navbar/Navbar.js"
import Header from "./component/Header/Header.js"
import Plan from "./component/Plan/Plan.js"
import Footer from "./component/Footer/Footer.js"
import HappyCustomer from "./component/HappyCustomer/HappyCustomer.js"

function App() {
  return (
    <div >
      <Navbar />
      <Header/>
      <Plan/>
      <HappyCustomer />
      <Footer/>
    </div>
  );
}

export default App;
