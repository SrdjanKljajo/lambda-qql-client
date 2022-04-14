/* eslint-disable no-undef */
/// <reference types="cypress" />
describe('The Home Page', () => {
  before(() => {
    cy.visit('http://localhost:3003')
  })

  it('Site title', () => {
    cy.get('[data-cy=title]')
    cy.contains('Greating')
  }) 

  it('Site greating', () => {
    cy.get('[data-cy=greating]')
    cy.contains('Hello world!')
  }) 

  it('Site number', () => {
    cy.get('[data-cy=number]')
    cy.contains('23')
  })      
})
