import "./App.css";
import { Button, logger } from "@my-monorepo/core";

function App() {
  logger("Testing Logger");
  const onClick = () => logger("On click Logger");
  return (
    <>
      <Button onClick={onClick}>Test Dashboard button with Core</Button>
      <h1>Welcome to Dashboard App</h1>;
    </>
  );
}

export default App;
