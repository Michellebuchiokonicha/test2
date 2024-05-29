import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Nav } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
