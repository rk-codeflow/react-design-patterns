import "./App.css";
import Toggle from "./components/pattern/Toggle";
// import Toggle from "./components/messy/Toggle";

function App() {
  return (
    <>
      {/* <Toggle /> */}

      <Toggle
        render={({ isOpen, toggle }) => (
          <div>
            <button onClick={toggle} aria-expanded={isOpen}>
              {isOpen ? "Hide" : "Show me"} the full content
            </button>
            {isOpen && <p>I am the full content</p>}
          </div>
        )}
      />
    </>
  );
}

export default App;
