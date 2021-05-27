import "./App.css";
import GlobalStyle from "./styles/global";
import Menu from "./components/Menu";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Menu />
      </header>
    </div>
  );
}

export default App;
