import './App.css';
import { Switch, Route } from 'react-router-dom';
import VaccinationList from './components/vaccination-list/vaccination-list';
import NavbarBottom from './components/common-components/navbar';

function App() {
  return (
    <>
      <div className="App">
        Vassport
        <Switch>
          <Route path="/vaccination-list">
            <VaccinationList />
          </Route>
        </Switch>
      </div>
      <NavbarBottom />
    </>
  );
}

export default App;
