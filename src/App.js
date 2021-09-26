import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import System from "./Pages/1System";
import Bluetooth from "./Pages/2Bluetooth";
import Network from "./Pages/3Network";
import Personalisation from "./Pages/4Personalisation";
import Apps from "./Pages/5Apps";
import Accounts from "./Pages/6Accounts";
import Time from "./Pages/7Time";
import Gaming from "./Pages/8Gaming";
import Accessibility from "./Pages/9Accessibility";
import Privacy from "./Pages/10Privacy";
import Update from "./Pages/11Update";

function App() {
  return (
    <BrowserRouter>
      <dark-mode-toggle permanent></dark-mode-toggle>
      <Header />
      <Route path="/" component={System} exact />
      <Route path="/system" component={System} />
      <Route path="/bluetooth" component={Bluetooth} />
      <Route path="/network" component={Network} />
      <Route path="/personalisation" component={Personalisation} />
      <Route path="/apps" component={Apps} />
      <Route path="/Accounts" component={Accounts} />
      <Route path="/Time" component={Time} />
      <Route path="/Gaming" component={Gaming} />
      <Route path="/Accessibility" component={Accessibility} />
      <Route path="/Privacy" component={Privacy} />
      <Route path="/Update" component={Update} />

      <div className="hamburger">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
          <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
        </svg>
      </div>
    </BrowserRouter>
  );
}

export default App;
