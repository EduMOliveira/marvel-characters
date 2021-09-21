import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Creature } from "./pages/Creature";
import { Search } from "./pages/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/creature/:id" component={Creature} />
        <Route path="/search/:slug" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
