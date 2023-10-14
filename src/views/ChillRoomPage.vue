<template>
    <div>
        <div v-for="room in rooms">
            <h1>{{ room.name }}</h1>
        </div>
    </div>
</template>

<script>
 
export default {
    data(){
        return{
            rooms: [],
        }
    },
    methods:{
        GetChillRooms(){
            //axios.get('http://10.193.141.30:3000/get-chill-rooms')
            //.then(response => {
                // Обработка успешной загрузки
            //    console.log(response);
            //})
            //.catch(error => {
                // Обработка ошибки
            //    console.log(error);
            //});

            this.rooms = [
                {id:1, name: "chill1", people_count: "12"},
                {id:2, name: "chill2", people_count: "13"}
            ]
        }
    },
    created(){
        this.GetChillRooms()
    }
};
</script>

<style>
.header {
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1);
}
</style>
  