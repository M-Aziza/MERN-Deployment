
import './App.css';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Details from './views/Details';
import Main from './views/Main';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>

        <Route exact path='/'>
        <Main/>
        </Route>

        <Route path='/addnew'>
        <Form/>
        </Route> 

        <Route exact path='/pet/:id'>
        <Update/>
        </Route>

        <Route path="/view/:id">
          <Details />
        </Route>
        
    </Switch>

    </BrowserRouter>
    </div>
  );
}

export default App;
