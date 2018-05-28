new Vue({
  el:'#app',
  data: {
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function () {
      console.log('computed');
      return this.counter > 5 ? 'Greater':'Smaller';
    }
  },
  watch: {
    counter: function (value) {
      var va = this;
      setTimeout(function () {
        va.counter = 0;
      },2000)
    }
  },
  methods: {
    result: function () {
      console.log('method');
      return this.counter > 5 ? 'Greater':'Smaller';
    }
  }
});