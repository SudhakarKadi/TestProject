import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I will be in SRP Page", () => {
    cy.visit(Cypress.env('url'));

});