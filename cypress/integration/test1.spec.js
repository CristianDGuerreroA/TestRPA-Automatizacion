/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('http://www.darka.com.co/copia/magnus-2.3.4/')
    })
  
    it('displays two todo items by default', () => {
      /* ==== Generated with Cypress Studio ==== */
      cy.get(':nth-child(1) > .productinfo-wrapper > .head > .thumb > :nth-child(1) > img').click();
      cy.get('#tdb3').click();
      cy.get('#cssmenu > #menu-button').click();
      cy.get('.basket-icon > a').click();
      cy.get('#tdb2').click();
      cy.get('form > [type="text"]').clear();
      cy.get('form > [type="text"]').type('chicoserio23@gmail.com');
      cy.get('.login > .content').click();
      cy.get('[type="password"]').clear();
      cy.get('[type="password"]').type('1824575624ws');
      cy.get('#tdb1').click();
      cy.get('#tdb3').click();
      cy.get('#tdb3').click();
      /* ==== End Cypress Studio ==== */
    })
  
  })
  