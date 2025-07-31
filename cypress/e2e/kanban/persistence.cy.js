import kanbanPage from '../../pages/kanbanPage';

describe('Persistência após reload', () => {
  beforeEach(() => {
    cy.visit('https://kanban-dusky-five.vercel.app/');
    kanbanPage.addTaskToList('To Do', 'Persistência');
    kanbanPage.getThemeToggleButton().click();
  });

  it('Deve manter dados e tema após F5', () => {
    cy.reload();
    cy.contains('.task-card', 'Persistência').should('be.visible');
    cy.get('body').should('have.class', 'dark');
  });
});