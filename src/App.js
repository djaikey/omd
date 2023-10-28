
import './Styles/App.css';

import Nav from './Components/Nav'
import Card from './Components/Card';
import Anim from './Components/Anim';
import Section from './Components/Section'
import Form from './Components/Form';





function App() {

  return (
    <div className="App">
     <header>
        <Nav />
        <section>
        <Card />
          <Anim />
        </section>
    </header>
      <Section/>
      <Form/>
       
      
      
    </div>
  );
}

export default App;
