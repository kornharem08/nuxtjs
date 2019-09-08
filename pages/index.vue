

<template>
  <section class="container">
    <div>
      <h2>Write to Firestore.</h2>
      <div>
        <button @click="writeToFirestore" :disabled="writeSuccessful">
          <span v-if="!writeSuccessful">Write now</span>
          <span v-else>Successful!</span>
        </button>
        <p>{{text}}</p>
      </div>
      <div>
  <h2>
    Read from Firestore.
  </h2>
  <div>
    <button @click="readFromFirestore" :disabled="readSuccessful">
      <span v-if="!readSuccessful">Read now</span>
      <span v-else>Successful!</span>
    </button>
    <p>{{text}}</p>
     <p>{{title}}</p>
  </div>
</div>
    </div>
  </section>
</template>



  // <section id="posts" class="row">
  //   <PostPreview 
  //     v-for="post in posts"
  //     :key="post.id"
  //     :title="post.title"
  //     :excerpt="post.PreviewText"
  //     :price="post.price"
  //     :thumbnaiImage="post.thumbnaiUrl"
  //     :id="post.id"
  //   />
  // </section>



<script>
import PostPreview from "@/components/Blog/PostPreview";
import { fireDb } from "~/plugins/firebase.js";
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: "",
      title: ""
    };
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection("test").doc("korn");
      const document = {
        text: "This is a korn message.",
        title: "Lamborghini"
      };
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }
      this.writeSuccessful = true;
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
  this.readSuccessful = true
}
  }

  // data() {
  //   return {
  //     posts: [
  //       {
  //         title: "Cookie",
  //         PreviewText: "This will be awesome, dont miss it!",
  //         thumbnaiUrl:
  //           "https://images-gmi-pmc.edge-generalmills.com/e8198dd2-770b-4c7c-a748-ca7538cf48d0.jpg",
  //         price: "40 Baht",
  //         id: "1"
  //       },
  //       {
  //         title: "Chocolate Cake",
  //         PreviewText:
  //           "Perfect for birthdays, this is a foolproof and really easy chocolate cake recipe",
  //         thumbnaiUrl:
  //           "https://food-images.files.bbci.co.uk/food/recipes/salted_dark_chocolate_16338_16x9.jpg",
  //         price: "250 Baht",
  //         id: "2"
  //       },
  //       {
  //         title: "brownie",
  //         PreviewText: "This will be awesome, dont miss it!",
  //         thumbnaiUrl: "https://i.ytimg.com/vi/tcQWZ0sfu4Q/maxresdefault.jpg",
  //         price: "50 Baht",
  //         id: "2"
  //       },
  //       {
  //         title: "Croissant dough",
  //         PreviewText: "This will be awesome, dont miss it!",
  //         thumbnaiUrl:
  //           "https://www.bltbangkok.com/public/core/uploaded/article/07acb7030499831fd2f811702da7b0d2.jpg",
  //         price: "50 Baht",
  //         id: "2"
  //       },
  //       {
  //         title: "Cheese Cake",
  //         PreviewText: "This will be awesome, dont miss it!",
  //         thumbnaiUrl:
  //           "https://www.wegointer.com/wp-content/uploads/2014/11/cake5.jpg",
  //         price: "80 Baht",
  //         id: "2"
  //       },
  //        {
  //         title: "Ice Cream Cake",
  //         PreviewText: "This will be awesome, dont miss it!",
  //         thumbnaiUrl:
  //           "https://www.wegointer.com/wp-content/uploads/2014/11/cake6.jpg",
  //         price: "300 Baht",
  //         id: "2"
  //       },
  //        {
  //         title: "Chocolate Lava Cakes",
  //         PreviewText: "This will be awesome, dont miss it!",
  //         thumbnaiUrl:
  //           "https://www.wegointer.com/wp-content/uploads/2014/11/cake17.jpg",
  //         price: "160 Baht",
  //         id: "2"
  //       },

  //     ]
  //   };
  // }
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