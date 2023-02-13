
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import  Projects  from './components/Projects/Projects';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Photos/>
    </main>
    </>
  );
}

export default App;
