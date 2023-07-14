/// <reference types="Cypress" />

describe('App Component', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it('adds text into state and toggle visibility', () => {
        cy.get('input').type('Cypress test in React')
        cy.get('button').click()
        cy.get('p').should('have.text', 'Cypress test in React')
    })
})