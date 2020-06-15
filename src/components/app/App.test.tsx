import { render } from "@testing-library/react";
import { GameProvider } from "context/GameContext";
import React from "react";
import App from "./App";

test("renders without crashing", () => {
  Element.prototype.scrollIntoView = jest.fn();

  render(
    <GameProvider>
      <App />
    </GameProvider>
  );
});
