<template>
  <div class="container-fluid bg-light py-3">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card card-body">
          <h3 class="productn text-center mb-4">Add Product</h3>

          <fieldset>
            <p class="fonts">Product Name (required)</p>

            <div class="form-group has-error">
              <input
                class="form-control input-lg"
                placeholder
                name="name"
                type="text"
                v-model="name"
              />
            </div>
            <p>Price</p>
            <div class="form-group has-success">
              <input
                class="form-control input-lg"
                placeholder
                name="price"
                value
                type="text"
                v-model="price"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Explanation</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="expain"
                v-model="expain"
              ></textarea>
            </div>

            <div class="form-group">
              <b-form-file
              type="file"
                id="fileupload"
                v-model="file"
                ref="myFiles"
                name="fileupload"
                multiple
                v-on:change="uploadimage"
              
              ></b-form-file>
              
            </div>
            <div>
              <input
                @click="writeToFirestore"
                class="btn btn-lg btn-primary btn-block"
                value="Sign Me Up"
                type="submit"
              />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fireDb } from "~/plugins/firebase.js";
import { db } from "~/plugins/firebase.js";
import { storage } from "~/plugins/firebase.js";

export default {
  data() {
    return {
      files: [],
      name: "",
      price: "",
      expain: "",
      file:"",
      thumbnail:"",
      filex:""
    };
  },
  methods: {
    uploadimage:function(event){
    //  console.log(event.target.files)
    //   alert(event.target.files)
        var picture = event.target.files[0];
        var storageRef = storage.ref(picture.name);
        storageRef.put(picture);
        this.thumbnail = "https://firebasestorage.googleapis.com/v0/b/"+"nuxtjs-76065.appspot.com"+"/o/"+picture.name+"?alt=media";
        console.log(this.thumbnail)

    },
    async writeToFirestore() {
      
 
      const ref = fireDb.collection("test").doc();
      const document = {
        name: this.name,
        price: this.price,
        expain: this.expain,
        thumbnail:this.thumbnail
      };
      try {
        await ref.set(document);
      } catch (e) {
        // TODO: error handling
        console.error(e);
      }

      this.name = "";
      this.price = "";
      this.expain = "";
      this.file="",
      this.thumbnail=""
    }
  }
};
</script>

<style scoped>
.productn {
  /* color: #fe214c; */
  font-weight: 700;
  font-size: 57px;
}
.fonts {
  font-size: 18px !important;
  line-height: 39px;
  font-weight: 300;
  font-style: normal;
}
</style>