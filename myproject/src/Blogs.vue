<template>
  <div class="blogs">
    <h2>{{ blogTitle }}</h2>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
  export default {
    name: 'Blog',
    data(){
      return {
        blogTitle:'Blogs'
      }
    },
    methods: {
      changeTitle(){
        this.blogTitle = 'Amazing';
      }
    },
    beforeCreate(){
      alert('before Create');
    },
    created(){
      alert('created');
    },
    beforeUpdate(){
      alert('beforeUpdate');
    }
  }

</script>

<style lang="scss" scoped>

</style>
