import Autocomplete from "./Autocomplete"
import countries from '../src/data/countries.json'
describe('Test the autocomplte functionality',()=>{
    beforeEach(()=>{
        cy.mount(<Autocomplete countries={countries}/>)
    })
    it('check everything is working',()=>{
        // cy.get('#autocomplete').type("a");
        cy.get('[data-cy="heading"]').contains("Search your country");
        cy.get('input[type="text"]').should('have.value','');
        cy.get('[data-cy="suggestion-list"]').should('not.exist');
    })
    it('check the filter is working',()=>{
        cy.get('input[type="text"]').type('no');
        cy.get('[data-cy="suggestion-list"]').should('be.visible').as('suggestList')
        cy.get('@suggestList').should('have.length',1);
    })
    it('check the selections are working',()=>{
        cy.get('input[type="text"]').as('inputText');
        cy.get('@inputText').type('no').type(Cypress._.repeat('{downArrow}{downArrow}',1));
        cy.get('[data-cy="suggestion-list"] li:nth-child(3)').should('have.class','active');
        cy.get('@inputText').type(Cypress._.repeat('{upArrow}',1));
        cy.get('[data-cy="suggestion-list"] li:nth-child(2)').should('have.class','active');
        cy.get('[data-cy="suggestion-list"] li:nth-child(2)').click();
        cy.get('input[type="text"]').should('have.length',1);
        cy.get('[data-cy="suggestion-list"]').should('not.exist');
    })
})