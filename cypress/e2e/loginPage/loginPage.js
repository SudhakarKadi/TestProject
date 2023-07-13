import { Given } from "cypress-cucumber-preprocessor/steps";
import data from '../../fixtures/example.json'

Given("I am on empty home page", () => {
    cy.visit(Cypress.env('url'));
    //console.log(data);
    //cy.log("Checking the data in JSON File",data);
    cy.log("Name of the JOSON file",data.name);
    cy.log("Body of the JOSON file",data.body);
    cy.log("EMAIL of the JOSON file",data.email);
   
});