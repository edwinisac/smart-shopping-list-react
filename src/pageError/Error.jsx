import { Header } from "../components/Header";
import errorImage from "../assets/images/error.png";
import "./error.css";
import { Helmet } from "react-helmet";

export function Error() {
  return (
    <>
      <Helmet>
    <title>Error</title>
    </Helmet>
      <Header />
      <div className="image-container">
        <img src={errorImage} alt="" className="image" />
      </div>
    </>
  );
}
