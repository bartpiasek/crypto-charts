import "./App.css";
import FetchData from "./components/cryptoAPI";
import Header from "./components/header";

function App() {
  return (
    <div>
      <Header />
      <FetchData />
    </div>
  );
}

export default App;
