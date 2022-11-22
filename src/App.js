import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
