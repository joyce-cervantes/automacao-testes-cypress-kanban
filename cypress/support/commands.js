Cypress.Commands.add('adicionarTarefa', (lista, nomeTarefa) => {
  cy.contains('h1', lista).parent().within(() => {
    cy.contains('+ Adicionar Tarefa').click();
    cy.get('input').type(`${nomeTarefa}{enter}`);
  });
});

Cypress.Commands.add('editarTarefa', (nomeAtual, novoNome) => {
  cy.contains('.task-card', nomeAtual).dblclick();
  cy.get('input').clear().type(`${novoNome}{enter}`);
});

Cypress.Commands.add('excluirLista', (tituloLista) => {
  cy.contains('h1', tituloLista).parent().within(() => {
    cy.get('button[aria-label="Excluir lista"]').click();
  });
});

Cypress.Commands.add('moverTarefa', (nomeTarefa, destino) => {
  cy.contains('.task-card', nomeTarefa).trigger('mousedown', { which: 1 });
  cy.contains('h1', destino).parent()
    .trigger('mousemove')
    .trigger('mouseup', { force: true });
});