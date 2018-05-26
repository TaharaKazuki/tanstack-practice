new Vue({
  el:'#app',
  data:{
    counter: 0,
    title: 3,
    x: 0,
    y: 0,
    value:''
  },
  methods: {
    increase: function (step, event) {
      this.counter += step;

      this.title = this.title + this.counter;
      return this.title;
    },
    updateCoordinates:function(e) {
      console.log(e);
      this.x = e.clientX;
      this.y = e.clientY;
    },
    alertMe: function () {
      alert('アラート');
    }
  }
});