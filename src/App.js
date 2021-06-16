
import './App.css';
import Quizbox from './Quizbox';
import Quizpage from './Quizpage';
import {Switch,Route} from "react-router-dom";
import Resultpage from './Resultpage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/mainpage" exact>
        <Quizbox/>
        </Route>
        <Route path = "/quizpage" exact>
          <Quizpage/>
        </Route>
        <Route path ="/resultpage" exact>
          <Resultpage/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
