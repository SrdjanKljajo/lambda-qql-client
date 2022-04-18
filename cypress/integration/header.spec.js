/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('The Header', () => {

    before(() => {
      cy.visit('/')
    })
  
    it('should contain header title', () => {
      cy.title().should('contain', 'React QQL')
    }) 

    it('should have home button', () => {
      cy.get('[data-test=home]').click()
      cy.location('pathname').should('include', '/')
    }) 

    it('should have register button', () => {
      cy.get('[data-test=register]').click()
      cy.url().should('include', '/register')
    }) 

    it('should have login button', () => {
      cy.get('[data-test=login]').click()
      cy.url().should('include', '/login')
    }) 

    it('should have users button', () => {
      cy.get('[data-test=users]').click()
      cy.url().should('include', '/users')
    }) 

    it('should have user button', () => {
      cy.get('[data-test=user]').click()
      cy.url().should('include', '/user')
    }) 

    it('should have articles button', () => {
      cy.get('[data-test=articles]').click()
      cy.url().should('include', '/articles')
    }) 
  })