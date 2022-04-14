/* eslint-disable no-undef */
/// <reference types="cypress" />

import { CLIENT_LOCAL } from "../../constants/urls"

describe('The Home Page', () => {
  before(() => {
    cy.visit(CLIENT_LOCAL)
  })

  it('Site title', () => {
    cy.get('[data-test=title]')
    cy.contains('Greating')
  }) 

  it('Site greating', () => {
    cy.get('[data-test=greating]')
    cy.contains('Hello world!')
  }) 

  it('Site number', () => {
    cy.get('[data-test=number]')
    cy.contains('23')
  })      
})
