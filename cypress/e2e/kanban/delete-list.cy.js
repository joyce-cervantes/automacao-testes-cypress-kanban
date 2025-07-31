import kanbanPage from '../../pages/kanbanPage';

describe('Excluir lista', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
  });

  it('Deve excluir uma lista e remover todas as tarefas internas', () => {
    const listName = 'To Do';

    kanbanPage.getColumnByTitle(listName).within(() => {
      cy.get('button[aria-label="Excluir lista"]').click();
    });

    cy.contains('h1', listName).should('not.exist');
  });
});