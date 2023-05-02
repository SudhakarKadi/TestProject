import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I am on empty home page", () => {
    cy.visit(Cypress.env('url'));

});