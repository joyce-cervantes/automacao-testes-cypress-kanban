import kanbanPage from '../../pages/kanbanPage';

describe('Criar nova lista', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
  });

  it('Deve criar uma nova lista com nome personalizado', () => {
    const listName = 'Backlog';

    kanbanPage.getAddListButton().click();
    cy.get('input').last().type(`${listName}{enter}`);
    cy.contains('h1', listName).should('be.visible');
  });
});