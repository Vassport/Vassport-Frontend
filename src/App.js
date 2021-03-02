import './App.css';
import { Switch, Route } from 'react-router-dom';
import Detail from './components/vaccination-detail/detail.component';

function App() {
  return (
    <>
      <div className="App">Vassport</div>
      <Switch>
        <Route path="/vaccination-detail">
          <Detail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
