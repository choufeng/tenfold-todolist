export default class Todo {
  list = [];
  add(item) {
    this.list.push(item);
  }
  remove(index) {
    this.list.splice(index, 1);
  }
  done(index) {
    this.list[index].done = !this.list[index].done;
  }
}
