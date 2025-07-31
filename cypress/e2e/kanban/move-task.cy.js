import kanbanPage from '../../pages/kanbanPage';

describe('Mover tarefa entre listas', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
    kanbanPage.addTaskToList('To Do', 'Mover esta tarefa');
  });

  it('Deve mover a tarefa da lista To Do para Doing', () => {
    const taskName = 'Mover esta tarefa';

    cy.contains('.task-card', taskName)
      .trigger('mousedown', { which: 1 });

    cy.contains('h1', 'Doing')
      .parent()
      .trigger('mousemove')
      .trigger('mouseup', { force: true });

    cy.contains('h1', 'Doing')
      .parent()
      .within(() => {
        cy.contains('.task-card', taskName).should('be.visible');
      });
  });
});