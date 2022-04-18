/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('The Add Article Page', () => {
    before(() => {
      cy.visit('/create-article')
      cy.get('[data-test=form-button').as('submit')
    }) 
  
    it('should create article', () => {
      cy.url().should('include', '/create-article')
      cy.get('[data-test=title]').type('Title example')
      cy.get('[data-test=body]').type('Article body example') 
      cy.get('@submit').click()  
    }) 

    it('should new article exist in articles, and delete it if exist', () => {
      cy.get('[data-test=article-card]').as('allArticles')
      cy.visit('./articles')
      cy.get('@allArticles').last().should('contain', 'Title example')
      cy.get('@allArticles').last().find('Button').click() 
    }) 
  })