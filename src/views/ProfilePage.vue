<template>
    <div>
      <header class="header">
        <img style="height: 3rem" src="../assets/logofull.svg" alt="Logo" />
      </header>
      <div style="width: 100vw; height: 100vh">
        <div class="container">
            <div class="main-profile_bar">
                <div class="avatar">
                    <vs-avatar size="200" style="height: 100%;">
                        <img src="../assets/coffee.jpg" alt="">
                    </vs-avatar>
                </div>
                <div class="info">
                    <h2>Фамилия: Талалуев</h2>
                    <h2>Имя: Денис</h2>
                    <h2>Отчество: Сергеевич</h2>
                </div>
            </div>
            <div class="info2">
                <h2>Должность: Инженер</h2>
                <h2>Mail: denis.tal@mail</h2>
                <h2>Номер телефона: 89147485850</h2>
                <h2>Штат: Отдел работотехники</h2>
            </div>
            <div class="buttons">
                <vs-button @click="active=!active">
                    <h3>Отредактировать</h3>
                </vs-button>
                <vs-dialog v-model="active">
                    <template #header>
                    <h4 class="not-margin">
                        Welcome to <b>Vuesax</b>
                    </h4>
                    </template>


                    <div class="con-form">
                    <vs-input v-model="email" placeholder="Email">
                        <template #icon>
                        @
                        </template>
                    </vs-input>
                    <vs-input type="password" v-model="password" placeholder="Password">
                        <template #icon>
                        <i class='bx bxs-lock'></i>
                        </template>
                    </vs-input>
                    <div class="flex">
                        <vs-checkbox v-model="remember">Remember me</vs-checkbox>
                        <a href="#">Forgot Password?</a>
                    </div>
                    </div>

                    <template #footer>
                    <div class="footer-dialog">
                        <vs-button block>
                        Sign In
                        </vs-button>

                        <div class="new">
                        New Here? <a href="#">Create New Account</a>
                        </div>
                    </div>
                    </template>
                </vs-dialog>
                <vs-button danger><h3>Написать жалобу</h3></vs-button>
            </div>
        </div>  
      </div>
      <OpacitySidebar></OpacitySidebar>
    </div>
  </template>
  
  <script>
  import OpacitySidebar from "@/components/OpacitySidebar.vue";
  export default {
    components: { OpacitySidebar },
    data:() => ({

        active: false,
        email: '',
        password: '',
        remember: false
      }),
  };
  </script>
  
<style scoped>

.container{
    width: 1040px;
    margin: 0 auto;

}
.main-profile_bar{
    margin-top: 20px;
    display: flex;
    justify-content: center;
}

.info{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

h2{
    text-align: left;
}
.info2{
    margin: 20px auto;;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.info2 h2{
    margin-top: 10px;
}
.buttons {
    display: flex;
    justify-content: center;
}
h3{
    font-size: 25px;
}
.header {
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: #ffffff;
    padding: 10px;
    box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1);
}
</style>
  
