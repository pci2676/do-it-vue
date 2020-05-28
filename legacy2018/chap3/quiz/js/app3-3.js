Vue.component('sibling-component', {
  props: ['propsSibling'],
  template: '<p>Child\'s Sibling Component get {{propsSibling}}</p>'
});

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{propsdata}}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js! passed from Parent Component!',
    toSibling: 'Hello Sibling Component! passed from Parent Component!'
  }
});
