<template>
  <div class="home">
      <div v-if="err">
        {{err}}
      </div>
      <div v-if="posts.length" class="layout">
        <div>
          <PostsList :posts = "filterPosts"></PostsList>
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
import PostsList from '../components/PostsList'
import getPosts from '@/composables/getPosts'
import { computed } from '@vue/runtime-core';
export default {
  components: {
    SpinLoad,
    TagCloud, PostsList },
  props: ['tag'],
  setup(props) {
    let {posts, err, loading} = getPosts();
    loading();
    //filter posts by tag
    let filterPosts = computed(() => {
      return posts.value.filter((post)=>{
        return post.tags.includes(props.tag)
      })
    })
    console.log(filterPosts);

    return {posts, err, filterPosts};
  }
}
</script>

<style>
  
</style>