/* eslint-disable no-undef */
/// <reference types="cypress" />

import faker from 'faker'

describe('The Register Page', () => {

    const username = faker.name.firstName()
    const password = faker.internet.password()
    const email = faker.internet.email().toLowerCase()

  before(() => {
    cy.visit('/register')
    cy.get('[data-test=form-button').as('submit')
  })

  it('should register user', () => {
    cy.get('[data-test=username]').type(username)
    cy.get('[data-test=email]').type(email)
    cy.get('[data-test=password]').type(password)
    cy.get('@submit').click()
  })  

  it('should register success', () => {
    cy.visit('/users')
    cy.url().should('include', '/users')
  }) 

  it('should delete user', () => {
    cy.get('[data-test=user-card]').as('allUsers')
    cy.get('@allUsers').last().find('Button').click() 
  })    
})
