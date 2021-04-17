import "./App.css"
import { Route, Link, Switch, HashRouter} from "react-router-dom";
import Home from "./pages/home";
import Recipe from "./pages/recipes";

function App() {
    return (
        <div>
            <HashRouter>
              <nav className="navbar">
                <Link to="/">Recipes</Link>
                <Link to="/recipe/1">Perfection Salad</Link>
                <Link to="/recipe/2">Hamburger Pie</Link>
                <Link to="/recipe/3">Cherry Pineapple Bologna</Link>
              </nav>

              <Switch>
                <Route path="/recipe/:recipeId" component={Recipe}></Route>
                <Route path="/" component={Home}></Route>
              </Switch>
            </HashRouter>
        </div>)


}

export default App;
