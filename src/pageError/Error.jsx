import { Header } from "../components/Header";
import errorImage from "../assets/images/error.png";
import "./error.css";

export function Error() {
  return (
    <>
      <Header />
      <div className="image-container">
        <img src={errorImage} alt="" className="image" />
      </div>
    </>
  );
}
