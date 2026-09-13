import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import './App.css';
import type { Technology } from "./types/technology";
import { useEffect, useState } from "react";


function App() {

const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("/data/technologies.json");
        const data = await response.json();
        setTechnologies(data);
        console.log("Fetched technologies:", data);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div >
      
      <Navbar></Navbar>
      <Hero></Hero>
      <TechnologySection technologies={technologies}></TechnologySection>
      <Footer></Footer>
    </div>
  );
}

export default App;