import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './views/LandingPage/LandingPage';
import HomePage from './views/HomePage/HomePage';
import DetailPage from './views/detailPage/DetailPage';
import FormPage from './views/FormPage/FormPage';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/detail/:id" component={DetailPage}/>
        <Route path="/createVideogame" component={FormPage}/>
      </Switch>
    </div>
  );
}

export default App;
