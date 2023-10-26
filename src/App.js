
import './Styles/App.css';

import Nav from './Components/Nav'
import Card from './Components/Card';
import Section from './Components/Section'
import Form from './Components/Form';





function App() {

  return (
    <div className="App">
     <header>
      <Nav />
      <Card />
    </header>
      <Section/>
      <Form/>
       
      
      
    </div>
  );
}

export default App;
