import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";
import UncontrolledNoRef from "./components/UncontrolledNoRef";

function App() {
  return (
    <div className="wrapper">
      <Controlled />
      <Uncontrolled />
      <UncontrolledNoRef />
    </div>
  );
}

export default App;
