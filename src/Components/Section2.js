import breakh from "../decor/break-heart.svg";
import flowers from "../decor/flowers.svg";
import image2 from "../Assets/image2.jpg";
import break2 from "../decor/break2.svg";
import "../Style/second.css";

export default function Section2() {
  return (
    <div className="section2">
      <img className="break" src={breakh} />
      <img className="image" src={image2} />

      <div className="text">
        <p>
          Құрметті
          <br /> ағайын-туыс, бауырлар, <br /> құда-жекжат, <br /> нағашы-жиен,
          бөлелер,
          <br /> құрбы-құрдас,
          <br /> дос-жарандар,
          <br /> ұжымдастар,
          <br /> көршілер!
        </p>
      </div>

      <img className="flowers" src={flowers} />

      <div className="text">
        <p>
          Сіз(дер)ді аяулы
          <br /> қызымыз
          <br />
          <span>Мадинаның</span>
          <br /> ұзатуына арналған
          <br /> салтанатты ақ
          <br /> дастарханымыздың
          <br /> қадірменді қонағы болуға
          <br /> шақырамыз!
        </p>
      </div>

      <img className="break" src={break2} />
    </div>
  );
}
