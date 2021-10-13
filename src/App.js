import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";


function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeOrder">
          <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path="*">
            <h1>404</h1>
          </Route>
        </Switch>
      </Router>
    
    
    </div>
  );
}

export default App;
