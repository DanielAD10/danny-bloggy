import { ref } from '@vue/reactivity';
import {db} from '../firebase/config'

let getPosts = () => {
    let posts = ref([]);
    let err = ref("");

    let loading = async() => {
      try {
        let res = await db.collection("posts").orderBy("created_at", "desc").get();
        // console.log(res.docs);
        posts.value = res.docs.map((doc) => {
          return {id:doc.id,...doc.data()}
          // console.log(doc.id);
        })
        
      }
      catch (error) {
        // console.log(error.message);
        err.value = error.message;
      }
    }
    return {posts, err, loading}
}

export default getPosts;