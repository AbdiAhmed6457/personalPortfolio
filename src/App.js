import './App.css';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
