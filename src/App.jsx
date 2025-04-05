import './assets/css/App.scss'
import Navbar from './components/Header'
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import ABout from "./components/sections/About";

function App() {
  return (
    <div className="inner-wrapper">
      <Navbar />
      <Hero />
      <Projects />
      <ABout />
    </div>
  )
}

export default App
