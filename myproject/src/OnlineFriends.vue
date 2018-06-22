<template>
  <div id="online-friends">
    <h2>online Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <span v-if="friend.online">{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OnlineFriends',
    props: ['friends'],
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>



</style>
