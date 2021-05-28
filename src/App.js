import "./App.css";
import GlobalStyle from "./styles/global";
import Menu from "./components/Menu";
import Routes from "./routes";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Menu />
        <Routes />
      </header>
    </div>
  );
}

export default App;
