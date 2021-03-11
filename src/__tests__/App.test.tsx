import "regenerator-runtime/runtime";

import { render, screen } from "@testing-library/react";

import App from "../components/App";
import { I18nextProvider } from "react-i18next";
import React from "react";
import i18n from "../i18n";

describe("App", () => {
  test("checks if disclaimer is on the page", async () => {
    const { getByText } = await render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );

    const disclaimer = await getByText(
      /Please know that we utilize Google Analytics/g
    );

    expect(disclaimer).toBeInTheDocument();
  });
});
