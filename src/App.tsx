import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Creature } from "./pages/Creature";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/creature/:id" component={Creature} />
      </Switch>
    </Router>
  );
}

export default App;
