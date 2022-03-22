import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './views/Nav/Nav';
import Main from './views/Main/Main';
import Films from './views/Films/Films';
import Books from './views/Books/Books';
import Characters from './views/Characters/Characters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/characters">
              <Characters />
            </Route>
            <Route path="/films">
              <Films />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
