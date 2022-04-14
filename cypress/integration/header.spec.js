/* eslint-disable no-undef */
/// <reference types="cypress" />

import { CLIENT_LOCAL } from "../../constants/urls"

describe('The Header', () => {

    before(() => {
      cy.visit(CLIENT_LOCAL)
    })
  
    it('Home button', () => {
      cy.get('[data-test=home]').click()
      cy.contains('Home')
      cy.url().should('include', CLIENT_LOCAL)
    }) 

    it('Users button', () => {
      cy.get('[data-test=users]').click()
      cy.contains('Users')
      cy.url().should('include', CLIENT_LOCAL + '/users')
    }) 

    it('Articles button', () => {
      cy.get('[data-test=articles]').click()
      cy.contains('Articles')
      cy.url().should('include', CLIENT_LOCAL + '/articles')
    }) 
  })