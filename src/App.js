import "./App.css";
import FetchData from "./components/cryptoAPI";
import DarkModeToggle from "./components/darkmode/DarkModeToggle";

function App() {
  return (
    <div>
      <DarkModeToggle />
      <FetchData />
    </div>
  );
}

export default App;
