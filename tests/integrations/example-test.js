/* globals step */
const { write, press, click, checkBox, toLeftOf, link, text, into } = require("taiko");
const assert = require("assert");
const baseActions = require("../actions/base-actions");
const basePage = require("../pages/base-page");

step("Add task <item>", async (item) => {
  await write(item, into(basePage.newTodoInput));
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
  baseActions.clearAllTask();
});

step("Must not have <table>", async (table) => {
  for (const row of table.rows) {
    assert.ok(!(await text(row.cells[0]).exists(0, 0)));
  }
});

step("Must display <message>", async (message) => {
  assert.ok(await text(message).exists(0, 0));
});

step("Add tasks <table>", async (table) => {
  for (const row of table.rows) {
    await write(row.cells[0]);
    await press("Enter");
  }
});

step("Must have <table>", async (table) => {
  for (const row of table.rows) {
    assert.ok(await text(row.cells[0]).exists());
  }
});
