
import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import  Projects  from './components/Projects/Projects';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
    </>
  );
}

export default App;
