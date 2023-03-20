/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByTestId(id: string): Cypress.Chainable;
  }
}
