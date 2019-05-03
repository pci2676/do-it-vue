Vue.component("todo-footer", {
  template: "<p>This is another global child component</p>"
});

var localCmp = {
  template: '<p>This is another local child component</p>'
};

new Vue({
  el: "#app",
  data: {
    message: "This is a parent component"
  },
  components: {
    'todo-list': localCmp
  }
});
