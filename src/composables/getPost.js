import { ref } from "vue";
import {db} from "../firebase/config";

let getPost = (id) => {
    let post = ref(null);
    let err = ref("");

    let load = async() => {
        try {
           let doc = await db.collection("posts").doc(id).get();
           post.value = {id:doc.id, ...doc.data()};
        } catch (err) {
            err.value = err.message;
        }
    }
    return {post, err, load};
}

export default getPost;