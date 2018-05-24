new Vue({
  el:'#app',
  data:{
    counter: 0,
    title: 3
  },
  methods: {
    increase: function () {
      this.counter++;
      this.title = this.title + this.counter;
      return this.title;
    }
  }
});