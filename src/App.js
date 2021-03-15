import FetchData from "./components/cryptoAPI";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/UI/header";

function App() {
  return (
    <Router>
      <Header />
      <FetchData />
    </Router>
  );
}

export default App;
