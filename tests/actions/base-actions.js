const assert = require("assert");

class BaseActions {
  assertOk(condition) {
    assert.ok(condition);
  }

  // async clearAllTask() {
  //   await evaluate(() => localStorage.clear());
  // }
}

module.exports = new BaseActions();
