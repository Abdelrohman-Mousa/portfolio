import './App.scss';
import { Navbar, About, Home, Project, Skills, Contact, Services } from './Components';

function App() {
  return (
    <div className='pop'>
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Project />
      <Skills />
      <Contact />
    </>
    </div>
  )
}

export default App
