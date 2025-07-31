import kanbanPage from '../../pages/kanbanPage';

describe('Editar título da tarefa', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
    kanbanPage.addTaskToList('To Do', 'Tarefa Original');
  });

  it('Deve permitir renomear uma tarefa existente', () => {
    const updatedName = 'Tarefa Editada';

    kanbanPage.getColumnByTitle('To Do').within(() => {
      cy.contains('.task-card', 'Tarefa Original').dblclick();
      cy.get('input').clear().type(`${updatedName}{enter}`);
      cy.contains('.task-card', updatedName).should('be.visible');
    });
  });
});