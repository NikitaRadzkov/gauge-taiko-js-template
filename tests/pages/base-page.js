const { $ } = require("taiko");

class BasePage {
  get newTodoInput() {
    return $(".new-todo");
  }

  getTodoByIndex(index = 1) {
    return $(`//*[@class='todo-list']/li[${index}]`);
  }
}

module.exports = new BasePage();
