import "./styles.css";
import { useState } from "react";

export default function App() {
  const [things, setThings] = useState(["things1", "things2"]);
  const onClickHandle = () => {
    const newThingArray = `things ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingArray]);
  };
  const thingsElement = things.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div className="App">
      <button onClick={onClickHandle}>AddItem</button>
      {thingsElement}
    </div>
  );
}
