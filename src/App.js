import "./default.scss"
import Header from "./components/Header";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
      <HomePage/>
      </div>
     
    </div>
  );
}

export default App;
