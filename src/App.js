import backr from "./Assets/backr.jpg";
import "./Style/first.css";

function App() {
  return (
    <div className="App">
      <section class="section1">
        <img src={backr} />

        <div class="header-wrapper">
          <h1>Мадина</h1>
          <h2>Қыз Ұзату</h2>
        </div>

        {/* <div class="audio-player">
            <audio id="audio" src="files/Ainalayin.m4a"></audio>
            <button type="button" id="play-pause">
              Әуенді Қосу
            </button>
          </div>
        </div>

        <div class="timer">
          <div class="nums" id="timer">
            32:21:49:45
          </div>
          <div class="timer-text">
            <div class="days">дней</div>
            <div class="hours">часов</div>
            <div class="minutes">минут</div>
            <div class="seconds">секунд</div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

export default App;
