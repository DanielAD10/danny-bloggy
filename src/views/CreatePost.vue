<template>
    <h1>Create Post</h1>
  <form @submit.prevent="createPost">
      <label>Title</label>
      <input type="text" required v-model="title">

      <label>Body</label>
      <textarea required v-model="body"></textarea>

      <label>Tags</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handlerKeydown">
      <div v-for="tag in tags" :key="tag" class="pills">
          {{tag}}
      </div>

      <button>Create Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
import {db,timestamp} from '../firebase/config'


export default {
    setup() {
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);
        let router = useRouter(); // this.$router

        let handlerKeydown = () => {
            if(!tags.value.includes(tag.value))
            {
                tags.value.push(tag.value);
            }
            tag.value = "";
        };

        let createPost = async() => {
            let newPost = {
                        title: title.value, // ""
                        body: body.value, // ""
                        tags: tags.value, //[]
                        created_at: timestamp()
                    }
            let res = await db.collection("posts").add(newPost);
            // console.log(res);
            //redirect to Home Page
            router.push("/");
        };

        return {title, body, tag, handlerKeydown, tags, createPost};
    }
}
</script>

<style scoped>
    h1 {
        text-align: center;
    }
    form {
        width: 500px;
        margin: 30px auto;
        background-color: rgb(198, 223, 238);
        padding: 20px;
        text-align: left;
        border-radius: 5px;
    }
    label {
        display: block;
        margin: 20px 10px;
        letter-spacing: 1px;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
    }
    input {
        display: block;
        padding: 10px;
        margin: 10px auto;
        border: none;
        border-radius: 10px;
        width: 100%;
        box-sizing: border-box;
    }
    textarea {
        display: block;
        border: none;
        width: 100%;
        height: 200px;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
    }
    button {
        display: block;
        margin: 25px auto 10px;
        background-color: rgb(212, 248, 7);
        border: none;
        padding: 10px;
        font-size: 16px;
        color: darkslategrey;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }
    .pills {
        display: inline-block;
        padding: 10px;
        background-color: darkcyan;
        color: ghostwhite;
        border-radius: 30px;
        margin: auto 5px;
    }
</style>