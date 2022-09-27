import "./scss/App.scss";
import Header from "./components/header.js";
import Filter from "./components/filter.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Filter />
    </div>
  );
};

export default App;
