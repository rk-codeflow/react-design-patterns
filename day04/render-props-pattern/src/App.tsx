import "./App.css";
import Toggle from "./components/pattern/Toggle";
// import Toggle from "./components/messy/Toggle";

function App() {
  return (
    <main className="app-shell">
      <div className="examples-layout">
        <Toggle
          render={({ isOpen, toggle }) => (
            <section className="toggle-card" aria-labelledby="toggle-title">
              <p className="eyebrow">Render props pattern</p>
              <h1 id="toggle-title">Reusable Toggle</h1>
              <p className="intro">
                The Toggle component owns the state. This card controls how the
                UI is rendered.
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
                  <p>
                    I am the full content rendered from the parent component.
                  </p>
                ) : (
                  <p>Click the button to reveal the render prop content.</p>
                )}
              </div>
            </section>
          )}
        />
        <Toggle
          render={({ isOpen, toggle }) => (
            <section className="status-widget" aria-labelledby="status-title">
              <div className="status-header">
                <div>
                  <p className="status-kicker">Same Toggle, new UI</p>
                  <h2 id="status-title">Notification mode</h2>
                </div>

                <button
                  className={`switch-control ${isOpen ? "is-active" : ""}`}
                  onClick={toggle}
                  type="button"
                  role="switch"
                  aria-checked={isOpen}
                  aria-label="Toggle notification mode"
                >
                  <span className="switch-thumb" />
                </button>
              </div>

              <div className="status-meter" aria-hidden="true">
                <span className={isOpen ? "is-active" : ""} />
                <span className={isOpen ? "is-active" : ""} />
                <span className={isOpen ? "is-active" : ""} />
              </div>

              <p className="status-copy">
                {isOpen
                  ? "Alerts are active. The parent decided this should look like a settings switch."
                  : "Alerts are paused. The reusable Toggle did not need to change."}
              </p>
            </section>
          )}
        />
      </div>
    </main>
  );
}

export default App;
