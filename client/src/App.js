import "./App.css";
import { Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Crud from "./components/index";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Crud} />
      </Switch>
    </div>
  );
}

export default App;