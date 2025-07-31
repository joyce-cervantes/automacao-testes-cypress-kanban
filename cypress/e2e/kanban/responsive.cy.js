describe('Responsividade em diferentes resoluções', () => {
  const viewports = [
    [360, 640],
    [768, 1024],
    [1440, 900],
  ];

  viewports.forEach(([width, height]) => {
    it(`Deve renderizar corretamente em ${width}x${height}`, () => {
      cy.viewport(width, height);
      cy.visit('https://kanban-dusky-five.vercel.app/');
      cy.get('h1').should('exist');
    });
  });
});