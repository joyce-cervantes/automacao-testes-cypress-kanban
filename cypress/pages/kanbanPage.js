class KanbanPage {
  /**
   * Retorna a coluna com base no título
   * @param {string} title - Título da coluna (ex: "To Do")
   */
  getColumnByTitle(title) {
    return cy.contains('h1', title).parent();
  }

  /**
   * Retorna o botão de adicionar uma nova lista
   */
  getAddListButton() {
    return cy.contains('Adicionar outra lista');
  }

  /**
   * Retorna o botão de alternância de tema (Light/Dark)
   */
  getThemeToggleButton() {
    return cy.get('button[aria-label*="Modo"]');
  }

  /**
   * Adiciona uma tarefa a uma coluna específica
   * @param {string} listTitle - Nome da lista (ex: "To Do")
   * @param {string} taskName - Nome da tarefa a ser adicionada
   */
  addTaskToList(listTitle, taskName) {
    this.getColumnByTitle(listTitle).within(() => {
      cy.contains('+ Adicionar Tarefa').click();
      cy.get('input').type(`${taskName}{enter}`);
    });
  }

  /**
   * Edita uma tarefa existente
   * @param {string} currentName - Nome atual da tarefa
   * @param {string} newName - Novo nome da tarefa
   */
  editTaskName(currentName, newName) {
    cy.contains('.task-card', currentName).dblclick();
    cy.get('input').clear().type(`${newName}{enter}`);
  }

  /**
   * Exclui uma lista com base no título
   * @param {string} title - Título da lista a ser excluída
   */
  deleteListByTitle(title) {
    this.getColumnByTitle(title).within(() => {
      cy.get('button[aria-label="Excluir lista"]').click();
    });
  }

  /**
   * Move uma tarefa de uma lista para outra usando drag and drop
   * @param {string} taskName - Nome da tarefa a mover
   * @param {string} targetListTitle - Nome da lista de destino
   */
  moveTaskToList(taskName, targetListTitle) {
    cy.contains('.task-card', taskName).trigger('mousedown', { which: 1 });

    this.getColumnByTitle(targetListTitle)
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
  }

  /**
   * Verifica se a tarefa está visível em uma lista
   * @param {string} taskName - Nome da tarefa
   * @param {string} listTitle - Nome da lista
   */
  verifyTaskInList(taskName, listTitle) {
    this.getColumnByTitle(listTitle).within(() => {
      cy.contains('.task-card', taskName).should('be.visible');
    });
  }
}

export default new KanbanPage();
