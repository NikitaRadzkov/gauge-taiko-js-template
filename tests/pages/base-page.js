const { $ } = require("taiko");

class BasePage {
  get newTodoInput() {
    $(".new-todo");
  }

  getTodoByIndex(index = 1) {
    $(`//*[@class='todo-list']/li[${index}]`);
  }
}

module.exports = new BasePage();
