import { useState } from "react";
import Pricing from "./pages/Pricing";
import Dashboard from "./pages/Dashboard";
// My first GitHub push

function App() {
  const [plan, setPlan] = useState("");

  return (
    <div>
      <Pricing onSubscribe={setPlan} />
      <Dashboard plan={plan} />
    </div>
  );
}

export default App;






















