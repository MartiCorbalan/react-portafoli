
/* import './App.css'; */
import './css/Style.css';

import Navbar from './componentes/Navbar';
import Main from './componentes/Main';
import Skills from './componentes/Skills';
import Qualificacions from './componentes/Qualificacions';
import Laboral from './componentes/Laboral';
import Form from './componentes/Form';
import Footer from './componentes/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Skills/>
      <Qualificacions/>
      <Laboral/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
