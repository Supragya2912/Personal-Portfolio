
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import  Projects  from './components/Projects/Projects';
import Photos from './components/Photos/Photos';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Qualification from './components/Qualification/Qualification';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Qualification/>
      <Photos/>
      <Contact/>
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;
