const assert = require("assert");

class BaseActions {
  assertOk(condition) {
    assert.ok(condition);
  }
}

module.exports = new BaseActions();
