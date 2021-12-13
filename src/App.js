import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord="react" />
        </main>
        <footer className="text-center">
          <a
            href="https://github.com/lindsaymward/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/lindsaymward21/"
            target="_blank"
            rel="noreferrer"
          >
            Lindsay Ward
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
