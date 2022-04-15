/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/users')
    cy.get('[data-test=user-card]').as('allUsers')
  }) 

  it('should have users', () => {
    cy.url().should('include', '/users')
    cy.get('@allUsers').should('not.contain.text', 'Articles')
    cy.get('@allUsers').last().should('contain', 'Delete')
  }) 
})