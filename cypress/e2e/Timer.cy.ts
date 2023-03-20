context("Timer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should change counter value when click on default minutes buttons", () => {
    const min15 = cy.getByTestId("timer-select-minutes-15");
    const min25 = cy.getByTestId("timer-select-minutes-25");
    const min50 = cy.getByTestId("timer-select-minutes-50");

    min15.trigger("click");
    let counter = cy.getByTestId("timer-counter");
    counter.should("contain.text", "15:00");

    min25.trigger("click");
    counter = cy.getByTestId("timer-counter");
    counter.should("contain.text", "25:00");

    min50.trigger("click");
    counter = cy.getByTestId("timer-counter");
    counter.should("contain.text", "50:00");
  });

  it("should type a custom minutes counter", () => {
    const otherMin = cy.getByTestId("timer-select-minutes-other");

    otherMin.type("33");
    const counter = cy.getByTestId("timer-counter");
    counter.should("contain.text", "33:00");
  });

  it("should click on start and done button and have the correct waiting time", () => {
    const timer = cy.getByTestId("digital-timer");
    const startButton = timer.getByTestId("timer-start");

    startButton.trigger("click");
    cy.wait(3000); // 3s

    const doneButton = timer.getByTestId("timer-done");
    doneButton.trigger("click");

    const timerTable = timer.getByTestId("timer--local-table");
    timerTable.get("td").should("contain.text", "3s");
  });
});
