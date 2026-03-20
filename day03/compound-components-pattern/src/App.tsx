import "./App.css";
import Tab from "./components/messy/Tab";
import Card from "./components/pattern/Card";
// import Card from "./components/messy/Card";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
      {/* <Card
        imageSrc="https://images.unsplash.com/photo-1761839258513-099c3121d72d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Ventana"
        subtitle="Web Application UI Kit"
        status="Live now"
        upvote={10}
        comments={20}
        reviews={6}
        primaryAction={<button>Live Now</button>}
      /> */}

      <Card>
        <Card.Header>
          <h5>Ventana</h5>
          <p>Web Application UI Kit</p>
        </Card.Header>

        <Card.Body>
          <Card.Image>
            <img
              src="https://images.unsplash.com/photo-1761839258513-099c3121d72d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="unsplash image"
            />
          </Card.Image>

          <span>Unsplash image</span>
        </Card.Body>

        <Card.Footer>
          <button>Live update</button>
          <button disabled style={{ marginTop: "5px" }}>
            Close
          </button>
        </Card.Footer>
      </Card>

      <Tab />
    </div>
  );
}

export default App;
