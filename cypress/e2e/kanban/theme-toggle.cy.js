import kanbanPage from '../../pages/kanbanPage';

describe('Alternar entre Light e Dark Mode', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
  });

  it('Deve alternar entre os temas e manter preferência após reload', () => {
    kanbanPage.getThemeToggleButton().click();
    cy.get('body').should('have.class', 'dark');

    cy.reload();

    cy.get('body').should('have.class', 'dark');
  });
});