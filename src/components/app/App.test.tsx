import { render } from "@testing-library/react";
import { GameProvider } from "context/GameContext";
import React from "react";
import App from "./App";

test("renders learn react link", () => {
  Element.prototype.scrollIntoView = jest.fn();
  const { getByText } = render(
    <GameProvider>
      <App />
    </GameProvider>
  );
  const linkElement = getByText(/game/iu);
  expect(linkElement).toBeInTheDocument();
});
