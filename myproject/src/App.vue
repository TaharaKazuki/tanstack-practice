<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends" />
  </div>
</template>

<script>
  import Navbar from './NavBar';
  import AllFriends from './AllFriends';
  import OnlineFriends from './OnlineFriends';


  export default {
    name: 'app',
    components: {
      Navbar,
      AllFriends,
      OnlineFriends
    },
    data () {
      return {
        title: 'Welcome to  Vue.js',
        friends: [
          { name: 'Mario', online: true },
          { name: 'Tom', online: false },
          { name: 'Bob', online: true },
          { name: 'Joy', online: false },
        ]
      }
    },
    methods: {
      deleteFriend(payload){
        console.log(payload);
        this.friends = this.friends.filter(friend => {
          return friend.name !== payload.name
        });
      }
    }
  }
</script>

<style lang="scss">
  h1 {
    color: #444;
    font-weight: normal;
    text-align: center;
  }
</style>
