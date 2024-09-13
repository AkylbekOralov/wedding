import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import "./Style/style.css";

function App() {
  return (
    <div className="App">
      <Section1></Section1>
      <div className="backround">
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

export default App;
