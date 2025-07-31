import kanbanPage from '../../pages/kanbanPage';

describe('Adicionar nova tarefa', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
  });

  it('Deve adicionar uma nova tarefa na lista "To Do"', () => {
    const taskName = 'Criar automação Cypress';

    kanbanPage.getColumnByTitle('To Do').within(() => {
      cy.contains('+ Adicionar Tarefa').click();
      cy.get('input').type(`${taskName}{enter}`);
      cy.contains('.task-card', taskName).should('be.visible');
    });
  });
});