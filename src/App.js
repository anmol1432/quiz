import NAVBAR from "./components/navbar";
import AllQuetsion from "./page/home/index";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {

  return (
    <>
      <div className="App">
        <NAVBAR />
        <Switch>
          <Route exact path="/" render={() => <AllQuetsion />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
