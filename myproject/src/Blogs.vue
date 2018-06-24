<template>
  <div class="blogs">
    <h2>Blog</h2>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body | snippet }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Blog',
    data(){
      return {
        posts:[]
      }
    },
    methods: {

    },
    created(){
      axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then( respose => {
//          console.log(respose);
          this.posts = respose.data;
        })
        .catch( err => {
//          console.log(err);
        })
    }
  }

</script>
