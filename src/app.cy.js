/// <reference types="Cypress" />

import App from "./App"

describe('App Component', () => {
    beforeEach(()=>{
        cy.mount(<App />)
    })
    it('adds text into state and toggle visibility', () => {
        cy.get('input').type('Cypress test in React')
        cy.get('button').click()
        cy.get('p').should('have.text', 'Cypress test in React')
    })
})