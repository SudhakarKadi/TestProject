import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I will be in VDP Page", () => {
    cy.visit(Cypress.env('url'));

});