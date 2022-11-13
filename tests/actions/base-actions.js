const { evaluate } = require("taiko");

class BaseActions {
  async clearAllTask() {
    await evaluate(() => localStorage.clear());
  }
}

module.exports = new BaseActions();
