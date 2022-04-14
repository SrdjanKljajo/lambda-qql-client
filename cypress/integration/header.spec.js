/* eslint-disable no-undef */
/// <reference types="cypress" />
describe('The Header', () => {
    before(() => {
      cy.visit('http://localhost:3003')
    })
  
    it('Home button', () => {
      cy.get('[data-cy=home]').click()
      cy.contains('Home')
      cy.url().should('include', 'http://localhost:3003')
    }) 

    it('Users button', () => {
      cy.get('[data-cy=users]').click()
      cy.contains('Users')
      cy.url().should('include', 'http://localhost:3003/users')
    }) 
  })