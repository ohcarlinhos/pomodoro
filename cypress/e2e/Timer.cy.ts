/// <reference types="cypress" />

context("Timer", () => {
  it("should visit home", () => {
    cy.visit("/");
    const timer = cy.get("[data-testid='digital-timer']");
    const startButton = timer.get("[data-testid='timer-start']");

    startButton.trigger("click");
    cy.wait(3000);

    const doneButton = timer.get("[data-testid='timer-done']");
    doneButton.trigger("click");

    const timerTable = timer.get("[data-testid='timer--local-table']");
    timerTable.get("td").should("contain.text", "3s");
  });
});
