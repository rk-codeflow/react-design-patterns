import "./App.css";
import Toggle from "./components/pattern/Toggle";
// import Toggle from "./components/messy/Toggle";

function App() {
  return (
    <main className="app-shell">
      <Toggle
        render={({ isOpen, toggle }) => (
          <section className="toggle-card" aria-labelledby="toggle-title">
            <p className="eyebrow">Render props pattern</p>
            <h1 id="toggle-title">Reusable Toggle</h1>
            <p className="intro">
              The Toggle component owns the state. This card controls how the UI
              is rendered.
            </p>

            <button
              className="toggle-button"
              onClick={toggle}
              aria-expanded={isOpen}
            >
              {isOpen ? "Hide" : "Show me"} the full content
            </button>

            <div className={`content-panel ${isOpen ? "is-open" : ""}`}>
              {isOpen ? (
                <p>I am the full content rendered from the parent component.</p>
              ) : (
                <p>Click the button to reveal the render prop content.</p>
              )}
            </div>
          </section>
        )}
      />
    </main>
  );
}

export default App;
