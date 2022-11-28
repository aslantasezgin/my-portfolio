import './App.css';
import Header from "./components/Header/Header.component.jsx"
import Slider from "./components/Slider/Slider.component.jsx"
import About from "./components/About/About.component.jsx"
import Skills from './components/Skills/Skills.component';
import Portfolio from './components/Portfolio/Portfolio.component';
import Footer from './components/Footer/Footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
