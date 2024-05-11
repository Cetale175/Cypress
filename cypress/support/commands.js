// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  if (email) cy.get("#mail").type(email);
  if (password) cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addNewBook", (title, author) => {
  cy.contains("Add new").click();
  if (title) cy.get("#title").type(title);
  if (author) cy.get("#authors").type(author);
  cy.get("#favorite").check();
  cy.contains("Submit").click();
});
