import image3 from "../Assets/image3.jpg";
import image4 from "../Assets/image4.jpg";
import table from "../Assets/Table.svg";
import breakh from "../decor/break-heart.svg";
import break3 from "../decor/break3.svg";
import twoGis from "../decor/twoGis.png";
import "../Style/third.css";

export default function Section3() {
  return (
    <div className="section3">
      <h2>Той Салтанаты:</h2>
      <div class="imgs">
        <img src={image3} />
        <img src={image4} />
      </div>

      <div class="date">сағат 13:00</div>

      <img src={table} />

      <div class="date m">22 қараша 2024</div>

      <img src={break3} />
      <img className="break" src={breakh} />

      <div className="address">
        <div className="box">
          <div class="header">Мекен-жайымыз:</div>

          <div class="text">
            Қарағанды қаласы,
            <br />
            Инкарбаева к-сі, 2б
            <br />
            “Arista”
            <br />
            мейрамханасының <br />
            француз залы
          </div>

          <div class="foot">
            Сізге жетуге ыңғайлы болу <br />
            үшін төмендегі 2гис <br />
            картаны қолданыңыз
          </div>
        </div>

        <a href="https://2gis.kz/karaganda/geo/70000001025415292">
          <img src={twoGis} />
        </a>
      </div>
    </div>
  );
}
