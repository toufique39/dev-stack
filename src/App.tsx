import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import './App.css';



function App() {
  return (
    <div >
      <h1>Dev Stack Builder</h1>
      <Navbar></Navbar>
      <Hero></Hero>
      <TechnologySection></TechnologySection>
      <Footer></Footer>
    </div>
  );
}

export default App;