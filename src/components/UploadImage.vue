<template>
  <div>
    <input
      type="file"
      id="fileInput"
      style="display: none"
      @change="uploadImage"
    />
    <vs-button @click="handleBrowseClick()">Select File</vs-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["mode"],
  methods: {
    handleBrowseClick() {
      document.getElementById("fileInput").click();
    },
    uploadImage(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);

      if (this.mode == "face-recognition") {
        axios
          .post("http://10.193.141.30:3000/face-recognition", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.mode == "people-count") {
        axios
          .post("http://10.193.141.30:3000/people-count", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
