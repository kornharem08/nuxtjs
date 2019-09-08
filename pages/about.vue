<template>
  <section id="posts">
   <PostPreview 
   v-for="post in posts"
   :key="post.id"
   :title="post.title"
   :excerpt="post.PreviewText"
   :thumbnaiImage="post.thumbnaiUrl"
   :id="post.id" />

   <button @click="readFromFirestore">
      <span >Read now</span></button>
    <p>{{text}}</p>
     <p>{{title}}</p>
  </section>
  
    

</template>


<script>
import PostPreview from "@/components/Blog/PostPreview";
import { fireDb } from "~/plugins/firebase.js";
export default {
  components:{
      PostPreview
    },
data(){
  return{
    message:[],
     text: "",
      title: ""
  }
},
 async readFromFirestore() {
  const ref = fireDb.collection("test").doc("korn")
  let snap
  try {
    snap = await ref.get()
  } catch (e) {
    // TODO: error handling
    console.error(e)
  }
  console.log(snap)
  this.text = snap.data().name
  this.title = snap.data().price

}

};
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>