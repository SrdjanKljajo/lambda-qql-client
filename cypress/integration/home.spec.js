/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  }) 
  it('should have home title', () => {
    cy.url().should('include', '/')
    cy.contains('Basic Home')
  }) 
})
