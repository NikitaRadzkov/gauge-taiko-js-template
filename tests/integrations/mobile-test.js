/* globals step */
const { write, press, text, into, textBox, setViewPort, goto } = require("taiko");
const baseActions = require("../actions/base-actions");

step("Open mobile todo application", async () => {
  await goto("todo.taiko.dev");
});

step("Open todo application with mobile direction <width> and <height>", async (width, height) => {
  await setViewPort({ width: Number(width), height: Number(height) });
});

step("Add mobile task <item>", async (item) => {
  await write(item, into(textBox("What needs to be done?")));
  await press("Enter");
});

step("Must mobile display <message>", async (message) => {
  baseActions.assertOk(await text(message).exists(0, 0));
});
