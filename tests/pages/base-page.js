const { $ } = require("taiko");

class BasePage {
  get newTodoInput() {
    $(".new-todo");
  }

  get todoCount() {
    $(".todo-count");
  }

  get allButton() {
    $("//*[@class='selected']");
  }

  get activeButton() {
    $(".//*[contains(text(), 'Completed')]");
  }

  getTodoByIndex(index = 1) {
    $(`//*[@class='todo-list']/li[${index}]`);
  }
}

module.exports = new BasePage();
