import React from "react";

import { NDSProvider, Select } from "@nulogy/components";

describe("Select", () => {
  it("selects the first item when opened", () => {
    const options = [
      { value: "v1", label: "V One" },
      { value: "v2", label: "V Two" },
      { value: "v3", label: "V Three" }
    ];

    cy.mount(
      <NDSProvider>
        <Select options={options} />
      </NDSProvider>
    );

    cy.get("[aria-label='open menu']").click();

    cy.get("[aria-selected='true']").should("have.text", "V One");
  });

  it("selects an option on click", () => {
    const options = [
      { value: "v1", label: "V One" },
      { value: "v2", label: "V Two" },
      { value: "v3", label: "V Three" }
    ];

    cy.mount(
      <NDSProvider>
        <Select options={options} />
      </NDSProvider>
    );

    cy.get("div#app").should("not.contain", "V Two");

    cy.get("[aria-label='open menu']").click();
    cy.get("div#app").should("contain", "V Two");

    cy.get('[role="option"]')
      .contains("V Two")
      .click();

    cy.get("input").should("have.value", "V Two");

    // ensure the dropdown is closed
    cy.get("div#app").should("not.contain", "V One");
  });

  it("closes the dropdown when clicking outside", () => {
    const options = [
      { value: "v1", label: "V One" },
      { value: "v2", label: "V Two" },
      { value: "v3", label: "V Three" }
    ];

    const styles = { width: "500px", height: "500px" };

    cy.mount(
      <NDSProvider>
        <div className="outer-container" style={styles}>
          <Select options={options} />
        </div>
      </NDSProvider>
    );

    cy.get("[aria-label='open menu']").click();
    cy.get("div#app").should("contain", "V Three");

    cy.get("div.outer-container").click("bottomRight");
    cy.get("div#app").should("not.contain", "V Three");
  });

  it("opens the dropdown when the select label is clicked", () => {
    const options = [{ value: "v1", label: "can you see me" }];

    cy.mount(
      <NDSProvider>
        <Select labelText="click me" options={options} />
      </NDSProvider>
    );

    cy.get("div")
      .contains("click me")
      .click("topLeft");

    cy.get("div#app").should("contain", "can you see me");
  });

  it("selects options using the keyboard", () => {
    const options = [
      { value: "value 1", label: "label 1" },
      { value: "value 2", label: "label 2" }
    ];

    cy.mount(
      <NDSProvider>
        <Select options={options} />
      </NDSProvider>
    );

    // focus the select box
    cy.get("[aria-label='open menu'] > input").focus();

    cy.focused()
      .type(" ")
      .type("{downarrow}")
      .type("{enter}");

    cy.get("div#app").should("not.contain", "label 1");
    cy.get("input").should("have.value", "label 2");
  });
});
