import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TechnologySection from "./components/TechnologySection";
import './App.css';
import type { Technology } from "./types/technology";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

const [stack, setStack] = useState<Technology[]>([]);

const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);



  const handleAddToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id
  );
  if (alreadyAdded) {
  toast.warning(`${technology.name} is already in your stack.`);
  return;
}

  setStack((currentStack) => [
    ...currentStack,
    technology,
  ]);

toast.success(`${technology.name} added to your stack.`);
};

const handleRemoveFromStack = (id: string) => {
  const removedTechnology = stack.find(
    (item) => item.id === id
  );

  setStack((currentStack) =>
    currentStack.filter((item) => item.id !== id)
  );

  if (removedTechnology) {
    toast.success(
      `${removedTechnology.name} removed from your stack.`
    );
  }
};

const handleRemoveAll = () => {
  if (stack.length === 0) {
    return;
  }

  setStack([]);

  toast.success("All technologies removed from your stack.");
};

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
    return <div><center><h1>Loading...</h1></center></div>;
  }

  return (
    <div >
    
      <Navbar></Navbar>
      <Hero></Hero>
     <TechnologySection
  technologies={technologies}
  stack={stack}
  onAddToStack={handleAddToStack}
  onRemoveFromStack={handleRemoveFromStack}
  onRemoveAll={handleRemoveAll}
/>
      <Footer></Footer>
        <ToastContainer />
    </div>
  );
}

export default App;