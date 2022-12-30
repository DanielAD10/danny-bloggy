<template>
    <div class="post">
        <router-link :to="{name: 'Detail', params: {id: post.id}}">
            <h2>{{post.title}}</h2>
        </router-link>
        <p>{{cutPostBody}}</p>
        <div v-for="tag in post.tags" :key="tag" class="pills">
            <router-link :to="{name: 'Tags', params: {tag}}">{{tag}}</router-link>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
export default {
    props: ['post'],
    setup(props){
        let cutPostBody = computed(() => {
            return props.post.body.substring(0,100)+ ".....";
        })
        return {cutPostBody};
    }
}
</script>

<style>
    .post {
        margin: 0 40px 30px;
        padding-bottom: 10px;
        border: 1px solid darkslategrey;
        border-radius: 10px;
    }
    .post h2 {
        display: inline-block;
        color: whitesmoke;
        padding: 10px;
        margin-top: 0;
        position: relative;
        font-size: 23px;
    }
    .post h2::before {
        content: "";
        display: block;
        background-color: darkslategrey;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        padding-right: 40px;
        left: -30px;
        top: -3px;
        border-radius: 10px;
        transform: rotateZ(-1.5deg);
    }
    .post p {
        padding: 0 20px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .pills {
        display: inline-block;
        padding: 10px;
        background-color: darkcyan;
        border-radius: 30px;
        margin: 10px;
        font-size: 15px;
    }
    .pills a {
        color: ghostwhite;;
        text-decoration: none;
    }
</style>