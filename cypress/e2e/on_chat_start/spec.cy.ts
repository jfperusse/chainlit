describe('on_chat_start', () => {
  it('should correctly run on_chat_start', () => {
    const messages = cy.get('.step');
    messages.should('have.length', 1);

    messages.eq(0).should('contain.text', 'Hello!');
  });
});
