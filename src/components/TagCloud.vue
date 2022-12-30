<template>
  <div class="tag-cloud">
        <h3>Tag Cloud </h3>
        <div v-for="tag in uniqueTags" :key="tag">
            <router-link :to="{name: 'Tags', params: {tag}}">{{tag}}</router-link>
        </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    props: ['posts'],
    setup(props) {
        let tags = ref([]);
        props.posts.forEach((post) => {
            // console.log(post);
            post.tags.forEach((tag) => {
                // console.log(tag);
                tags.value.push(tag);
            })
        });
        
        let uniqueTags = tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag) === index
        });

        // console.log(uniqueTags);

        return {uniqueTags};
    }
}
</script>

<style>
    .tag-cloud {
        padding: 10px;
    }
    .tag-cloud h3 {
        border-bottom: 1px solid lightblue;
        padding: 10px;
        color: darkslategrey; 
    }
    .tag-cloud div {
        display: inline-block;
        margin: 10px;
    }
    .tag-cloud a {
        text-decoration: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 20px;
        text-transform: capitalize;
        color: cadetblue;
    }
    .tag-cloud a.router-link-active {
        color: darkcyan;
        font-weight: bold;
    }
</style>