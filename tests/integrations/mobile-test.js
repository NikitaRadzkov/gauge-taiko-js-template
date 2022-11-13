/* globals step */
const { write, press, text, into, textBox, setViewPort } = require("taiko");
const assert = require("assert");

step("Open todo application with mobile direction <width> and <height>", async (width, height) => {
  await setViewPort({ width: Number(width), height: Number(height) });
});

step("Add mobile task <item>", async (item) => {
  await write(item, into(textBox("What needs to be done?")));
  await press("Enter");
});

step("Must mobile display <message>", async (message) => {
  assert.ok(await text(message).exists(0, 0));
});
