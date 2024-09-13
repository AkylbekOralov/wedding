import breakh from "../decor/break-heart.svg";
import "../Style/fourth.css";
import { useState } from "react";

export default function Section4() {
  return (
    <div className="section4">
      <div className="center">
        <img className="break" src={breakh} />

        <div class="header-2">
          Тойға қатысуыңызды <br />
          22.08.2024 дейін растауды <br />
          сұраймыз!
        </div>
      </div>
      <Form />
    </div>
  );
}

function Form() {
  const [name, setName] = useState("");
  const [coming, setComing] = useState(null);
  const [num, setNum] = useState(1);

  return (
    <div className="form">
      <div className="textt name">Аты-жөңініз:</div>
      <br />
      <input
        class="name-input"
        type="textt"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className="textt ques">Тойға келесіз бе?</div>

      <div className="opt">
        <input
          class="option"
          type="radio"
          name="coming"
          onClick={() => setComing(true)}
        />
        <label className="textt" for="option1">
          иә, келемін
        </label>
      </div>

      <input
        class="option"
        type="radio"
        name="coming"
        onClick={() => setComing(false)}
      />
      <label className="textt" for="option2">
        өкінішке орай, келе алмаймын
      </label>

      <div className="textt que">Қанша адам келесіздер?</div>

      <div class="counter">
        <button onClick={() => (num > 1 ? setNum(num - 1) : null)}>-</button>
        <div className="textt">{num}</div>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>
      <br />

      <button class="textt submit">Жіберу</button>
    </div>
  );
}
