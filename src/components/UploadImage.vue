<template>
    <div>
        <input type="file" id="fileInput" style="display: none" @change="uploadImage" />
        <vs-button @click="handleBrowseClick()">Select File</vs-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        handleBrowseClick() {
            document.getElementById('fileInput').click();
        },
        uploadImage(e) {
            let file = e.target.files[0];
            let formData = new FormData();
            formData.append('file', file);

            axios.post('http://10.193.141.30:3000/face-recognition', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                // Обработка успешной загрузки
                console.log(response);
            })
            .catch(error => {
                // Обработка ошибки
                console.log(error);
            });
        }
    }
}
</script>
  