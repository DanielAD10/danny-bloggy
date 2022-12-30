<template>
  <div class="detail">
        <h1>Detail</h1>
        <div v-if="post" class="post">
            <h2>{{post.title}}</h2>
            <p>{{post.body}}</p>
            <div v-for="tag in post.tags" :key="tag" class="pills">
                {{tag}}
            </div>
            <button @click="deletePost">Delete</button>
        </div>
        <div v-else>
            <SpinLoad></SpinLoad>
        </div>
  </div>
</template>

<script>
import SpinLoad from '../components/SpinLoad'
import getPost from '@/composables/getPost'
import {db} from '../firebase/config'
import {useRouter} from 'vue-router'
export default {
  components: { SpinLoad },
    props: ['id'],
    setup(props) {
        let router = useRouter();
        let {post, err, load} = getPost(props.id); //{post, err, load}

        load();

        let deletePost = async() => {
            let id = props.id;
            await db.collection("posts").doc(id).delete();

            router.push("/");
        }

        return {post, err, deletePost};
    }
}
</script>

<style>
    .detail {
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
    }
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
        color: ghostwhite;
        border-radius: 30px;
        margin: 10px;
        font-size: 15px;
    }
    button {
        display: block;
        margin: 15px auto;
        background-color: rgb(212, 248, 7);
        border: none;
        padding: 10px;
        font-size: 16px;
        color: darkslategrey;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }
</style>