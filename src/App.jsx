import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/Footer/Footer"
import Experience from "./Components/Experience/Experience"

function App() {


  return (
    <div className="bg-[#171d32] h-auto overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Footer />
    </div>
  )
}

export default App
