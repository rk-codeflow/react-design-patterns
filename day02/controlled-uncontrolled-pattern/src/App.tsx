import "./App.css";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";

function App() {
  return (
    <div className="wrapper">
      <Controlled />
      <Uncontrolled />
    </div>
  );
}

export default App;
