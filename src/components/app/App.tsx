import { useGameContext } from "context/GameContext";
import React, { FC } from "react";

const App: FC = () => {
  const { state } = useGameContext();

  return <div>{JSON.stringify(state)}</div>;
};

export default App;
