import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import Card from "./Card/Card";
import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <div className="main">
      <Card />
      <Tooltip id="tooltip" />
      <Toaster position="top-center" reverseOrder={false} toastOptions={{}} />
    </div>
  );
}

export default App;
