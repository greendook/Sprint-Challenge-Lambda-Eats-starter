describe('Testing our volunteer form', function() {
  // visits local host 3000
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
  });
  it('Add test to inputs and submit form', function() {
    // grabs our input, types xavier, and checks if the value xavier is in it
    cy.get('input[name="name"]')
      .type('Xavier')
      .should('have.value', 'Xavier');
    cy.get('[type="checkbox"]')
      .check()
      .should('be.checked');
    cy.get('button').click();
  });
});
