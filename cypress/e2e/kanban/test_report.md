# Resultados dos Testes Automatizados com Cypress

Este relatório contém os resultados da execução dos testes end-to-end desenvolvidos com Cypress. A análise inclui não apenas os resultados, mas também observações relevantes como QA, sugestões de melhorias e posicionamento sobre os bugs encontrados.

---

## Resultado Geral

Foram executados **8 arquivos de teste**, com um total de **10 testes automatizados**:

| Especificação            | Testes | Passaram ✅ | Falharam ❌ |
|--------------------------|--------|-------------|-------------|
| `add-task.cy.js`         | 1      | 0           | 1           |
| `create-list.cy.js`      | 1      | 1           | 0           |
| `delete-list.cy.js`      | 1      | 0           | 1           |
| `edit-task.cy.js`        | 1      | 0           | 1           |
| `move-task.cy.js`        | 1      | 0           | 1           |
| `persistence.cy.js`      | 1      | 0           | 1           |
| `responsive.cy.js`       | 3      | 3           | 0           |
| `theme-toggle.cy.js`     | 1      | 0           | 1           |
| **Total**                | 10     | 4 ✅         | 6 ❌         |

As screenshots de cada falha foram geradas automaticamente e podem ser consultadas na pasta `cypress/screenshots/`.

---

## Análise Crítica dos Testes com Falha

Abaixo está a análise dos principais pontos que causaram falhas:

### ❌ `add-task.cy.js`
- **Erro:** Elemento '+ Adicionar Tarefa' não foi encontrado dentro do header.
- **Causa provável:** seletor frágil ou o botão foi movido para outro container no DOM.
- **Solução sugerida:** utilizar `cy.contains('+ Adicionar Tarefa').should('exist')` fora de `within()`, ou buscar por `data-testid`.

---

### ❌ `delete-list.cy.js`
- **Erro:** Botão de lixeira não encontrado.
- **Causa provável:** lista usada no teste pode não estar sendo criada corretamente antes do clique.
- **Solução sugerida:** reforçar o fluxo de setup com verificação da criação da lista antes de buscar o botão.

---

### ❌ `edit-task`, `move-task`, `persistence`
- **Erro:** Todos falharam no `beforeEach`, com erro semelhante de não encontrar '+ Adicionar Tarefa'.
- **Causa provável:** a página não estava totalmente carregada antes do início dos testes.
- **Solução sugerida:** aplicar validação de carregamento com `.should('exist')` ou `cy.wait()` com timeout adequado no setup.

---

### ❌ `theme-toggle.cy.js`
- **Erro:** Botão de alternância de tema com `aria-label*="Modo"` não foi encontrado.
- **Causa provável:** uso de seletor dinâmico frágil.
- **Solução sugerida:** implementar `data-testid` para garantir estabilidade na identificação do elemento.

---

## Posicionamento sobre Bugs Encontrados

Durante os testes manuais e automatizados, alguns comportamentos foram identificados como potenciais **bugs** ou **problemas de usabilidade**:

- Botões importantes como “+ Adicionar Tarefa” não são facilmente localizáveis por seletores simples, ausência de `id`, `name` ou `data-testid`.
- Falta de feedback visual em algumas ações, como criação de lista ou alternância de tema.
- Persistência de dados falhou em alguns fluxos, o que impacta a confiança na experiência do usuário ao recarregar a página.
- A ausência de mensagens de erro ou estados vazios para listas pode prejudicar a acessibilidade e a testabilidade.

Esses pontos **foram documentados com evidências** e, em um cenário real, seriam reportados ao time de desenvolvimento com prioridade e clareza.

---

## Sugestões de Melhoria

Como parte do meu papel como QA, sugiro as seguintes melhorias para aumentar a robustez da aplicação e da automação:

1. **Adicionar atributos `data-testid`** nos elementos interativos principais, como botões de ação, inputs e toggles, para garantir estabilidade nos testes.

2. **Criar um estado inicial conhecido (mock)** para os testes, garantindo que listas, tarefas e temas tenham dados esperados ao carregar.

3. **Adicionar mensagens de feedback visual e validações de campo** para melhorar a usabilidade e prevenir ações silenciosas.

4. **Separar lógica de renderização por tema e persistência de dados**, para facilitar testes isolados.

5. **Padronizar uso de `aria-label` e semântica acessível**, beneficiando tanto acessibilidade quanto automação.

---

## Conclusão

O processo de QA vai além de simplesmente testar, ele envolve investigar, interpretar, validar hipóteses e contribuir para a melhoria contínua do produto. Os testes automatizados desenvolvidos aqui são exemplos de como um QA Júnior pode aplicar uma visão crítica, metodológica e colaborativa, mesmo em projetos simples.

> *“O importante não é vencer todos os dias, mas lutar sempre.”
— Rocky Balboa, em Rocky III”*
