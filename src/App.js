import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import ScrollRoute from "./ScrollRoute";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollRoute />
      <Navbar />
      <Switch>
        <Route path="/Ngotest/" exact component={Home} />
        <Route path="/Ngotest/aboutus" exact component={AboutUs} />
        <Route path="/Ngotest/service" exact component={Service} />
        <Route path="/Ngotest/contact" exact component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
