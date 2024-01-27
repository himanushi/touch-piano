import { render } from "preact";

import "~/theme/global.css";
import "~/theme/variables.css";
import TouchPiano from "./TouchPiano";

const App = () => {
  return (
    <div>
      <TouchPiano />
    </div>
  );
};

const root = document.getElementById("app");

if (root) render(<App />, root);
