
import { BrowserRouter } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer'
import RoutesDom from "./routesDom"
import './scss/App.scss'

function App() {
  
  
  return (
    <BrowserRouter>
      <NavBar/>
      <RoutesDom/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
