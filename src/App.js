import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import Todolist from '../src/components/Todolist';
import Page1 from '../src/components/Page1';
import Page2 from '../src/components/Page2';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/"><Todolist /></Route>
        <Route exact path="/page1"><Page1 /></Route>
        <Route exact path="/page2"><Page2 /></Route>
      </Switch>
    </>
  );
}

export default App;
