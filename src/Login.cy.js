import Login from "./Login";


describe('login.cy.ts', () => {
    it('should render Login Component', () => {
      cy.mount(<Login />);
      
      cy.get('#inputEmail').type('test@example.com');
      cy.get('#inputPassword').type('changeMe');
      cy.get('button').click();
  
      cy.contains('div', 'successfully logged in').should('be.visible');
    });
  });