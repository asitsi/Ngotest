import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import ScrollRoute from "./ScrollRoute";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollRoute />
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/service" exact component={Service} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
