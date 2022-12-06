import Page from "./components/Page";

function App() {
  return (
    <div>
      <h1 className="Logo">notion</h1>
      <p className="Intro">
        Helloo{" "}
        <span role="img" aria-label="greetings" className="Emoji">
          👋
        </span>{" "}
        You can add content below. Type <span className="Code">/</span> to see
        available elements.
      </p>
      <Page />
    </div>
  );
}

export default App;
