<template>
  <div class="home">
    <div v-if="err">
      {{err}}
    </div>
    <div v-if="posts.length" class="layout">
      <div>
        <PostsList :posts="posts"></PostsList>
      </div>
      <div>
        <TagCloud :posts="posts"></TagCloud>
      </div>
    </div>
    <div v-else>
      <SpinLoad></SpinLoad>
    </div>
  </div>
</template>

<script>
import SpinLoad from '../components/SpinLoad'
import TagCloud from '../components/TagCloud'
import getPosts from "../composables/getPosts"
import PostsList from '../components/PostsList'

export default {
  components: {
    SpinLoad,
    TagCloud,PostsList },
  setup() {
    let {posts, err, loading} = getPosts(); // {posts, err, loading}
    loading();

    return {posts, err};
  }
    
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>
