/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('The Login Page', () => {

    const password = '123456'
    const email = 'srdjan@gmail.com'

  before(() => {
    cy.visit('/login')
    cy.get('[data-test=form-button').as('submit')
  })

  it('should login user', () => {
    cy.get('[data-test=email]').type(email)
    cy.get('[data-test=password]').type(password)
    cy.get('@submit').click()
  })     

  it('should login success', () => {
    cy.visit('/user')
    cy.url().should('include', '/user')
  })    
})
