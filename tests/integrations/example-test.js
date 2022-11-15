const { write, goto, press, click, checkBox, toLeftOf, link, text, into, evaluate } = require("taiko");
const BasePage = require("../pages/base-page");
const BaseActions = require("../actions/base-actions");

step("Open todo application", async () => {
  await goto("todo.taiko.dev");
});

step("Add task <item>", async (item) => {
  await write(item, into(BasePage.newTodoInput));
  await press("Enter");
});

step("View <type> tasks", async (type) => {
  await click(link(type));
});

step("Complete tasks <table>", async (table) => {
  for (const row of table.rows) {
    await click(checkBox(toLeftOf(row.cells[0])));
  }
});

step("Clear all tasks", async () => {
  await evaluate(() => localStorage.clear());
});

step("Must not have <table>", async (table) => {
  for (const row of table.rows) {
    BaseActions.assertOk(!(await text(row.cells[0]).exists(0, 0)));
  }
});

step("Must display <message>", async (message) => {
  BaseActions.assertOk(await text(message).exists(0, 0));
});

step("Add tasks <table>", async (table) => {
  for (const row of table.rows) {
    await write(row.cells[0]);
    await press("Enter");
  }
});

step("Must have <table>", async (table) => {
  for (const row of table.rows) {
    BaseActions.assertOk(await text(row.cells[0]).exists());
  }
});
