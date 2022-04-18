/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('The Articles Page', () => {
    beforeEach(() => {
      cy.visit('/articles')
      cy.get('[data-test=article-card]').as('allArticles')
    }) 
  
    it('should have articles', () => {
      cy.url().should('include', '/articles')
      cy.get('@allArticles').last().should('contain', 'Delete')
    }) 

    it('should first article have book', () => {
      cy.get('@allArticles').last().should('contain', 'book')
    }) 
  })