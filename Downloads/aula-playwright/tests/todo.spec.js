
const { test, expect } = require('@playwright/test');

const SITE = 'https://demo.playwright.dev/todomvc/';

async function criarTarefa(page, texto) {
  const campo = page.getByPlaceholder('What needs to be done?');
  await campo.fill(texto);
  await campo.press('Enter');
}

test('1 - cria uma tarefa e atualiza o contador', async ({ page }) => {
  await page.goto(SITE);

  await criarTarefa(page, 'estudar');

  await expect(page.getByTestId('todo-title')).toHaveText('estudar');
  await expect(page.getByTestId('todo-count')).toHaveText('1 item left');
});

test('2 - edita uma tarefa', async ({ page }) => {
  await page.goto(SITE);

  await criarTarefa(page, 'estudar');

  await page.getByTestId('todo-title').dblclick();

  const campoEdicao = page.getByRole('textbox').last();
  await campoEdicao.fill('estudar Playwright');
  await campoEdicao.press('Enter');

  await expect(page.getByTestId('todo-title')).toHaveText('estudar Playwright');
});

test('3 - conclui uma tarefa e atualiza o contador', async ({ page }) => {
  await page.goto(SITE);

  await criarTarefa(page, 'estudar');

  const checkbox = page.getByRole('checkbox', { name: 'Toggle Todo' });

  await checkbox.check();

  await expect(checkbox).toBeChecked();
  await expect(page.getByTestId('todo-count')).toHaveText('0 items left');
});

test('4 - apaga uma tarefa', async ({ page }) => {
  await page.goto(SITE);

  await criarTarefa(page, 'estudar');

  const tarefa = page.getByTestId('todo-title');
  await tarefa.hover();

  await page.locator('.destroy').click();

  await expect(page.getByTestId('todo-title')).toHaveCount(0);
});

test('5 - o filtro Active mostra somente tarefas não concluídas', async ({ page }) => {
  await page.goto(SITE);

  await criarTarefa(page, 'estudar');
  await criarTarefa(page, 'fazer exercícios');

  const checkbox = page.getByRole('checkbox', { name: 'Toggle Todo' });

  await checkbox.first().check();

  await page.getByRole('link', { name: 'Active' }).click();

  await expect(page.getByTestId('todo-title')).toHaveCount(1);
  await expect(page.getByTestId('todo-title')).toHaveText('fazer exercícios');
});
