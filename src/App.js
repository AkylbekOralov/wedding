import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";

import insta from "./decor/instagram.svg";
import whatsapp from "./decor/whatsapp.svg";
import "./Style/style.css";

function App() {
  return (
    <div className="App">
      <Section1></Section1>
      <div className="backround">
        <Section2 />
        <Section3 />
      </div>

      <div className="backround-2">
        <Section4 />
      </div>
      <Section5 />

      <div class="footer">
        <div class="icons">
          <a href="https://www.instagram.com/oralovvv_?igsh=NGJkZTF2NWh4dTZl&utm_source=qr">
            <img src={insta} />
          </a>
          <a href="https://wa.me/77089708091">
            <img src={whatsapp} />
          </a>
        </div>
        <p>Шақыруды жасаған @oralovvv_</p>
      </div>
    </div>
  );
}

export default App;
