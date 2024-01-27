import { render } from "preact";

import "~/theme/global.css";
import "~/theme/variables.css";
import TouchPiano from "./TouchPiano";

const App = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <TouchPiano />
    </div>
  );
};

const root = document.getElementById("app");

if (root) render(<App />, root);
