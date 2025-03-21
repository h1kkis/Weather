<script>
import axios from 'axios'
export default{
  data(){
    return{
      city:"",
      error:"",
      info: null,
      loading: false
    }
  },
  computed: {
    cityName() {
      return "*" + this.city + "*"
    },
    showTemp() {
      return "Температура: " + this.info.main.temp
    },
    showFeelsLike() {
      return "Ощущается как: " + this.info.main.feels_like
    },
    showMinTemp() {
      return "Минимальная температура: " + this.info.main.temp_min
    },
    showMaxTemp() {
      return "Максимальная температура: " + this.info.main.temp_max
    },
  }, 
  methods: {
    getWeather() {
      if(this.city.trim().length < 2) {
        this.error = "Название больше одного символа!"
        return false;
      }
      this.error = ""
      this.loading = true;

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=5d468ff326f59e63830f1521befca606`)

      .then(res => {
      this.info = res.data;
      this.loading = false;
    })
      .catch(err => {
        this.error = "Ошибка при получении данных";
        this.info = null; // Очищаем данные при ошибке
        this.loading = false;
});
    }
  } 
}
// import User from './components/User.vue'
// export default {
//   components: {User},
//   data() {
//     return {
//       users: [],
//       error: '',
//       userName:'',
//       userPass:'',
//       userEmail:''
//     }
//   },
//   methods: {
//     sendData() {
//       if(this.userName == '') {
//         this.error = 'Имя не введено';
//         return;
//       } else if(this.userPass == '') {
//         this.error = 'Пароль не введен';
//         return;
//       } else if(this.userEmail == '') {
//         this.error = 'Почта не введена';
//         return;
//       }

//       this.error = '';

//         this.users.push({
//           name: this.userName,
//           pass: this.userPass,
//           email: this.userEmail
//         })
//       },
//       deleteUser(index) {
//         this.users.splice(index, 1);
//       }
//   }
//    data() {
//      return {
//        info: 'Title!',
//       someinfo: 'Anons of message'
//      }
//    },
//    methods: {
//      userData(word) {
//        this.info = 'Some new'
//        this.someinfo = 'Dolod'
//      }
//   }
// }
</script>

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
  <div class="wrapper">
    <h1>Погодное приложение</h1>
    <p>Узнать погоду в {{ city == "" ? "вашем городе" : cityName}}</p>
    
    <input type="text" v-model="city" placeholder="Введите город">
    
    <button v-if="city != ''" @click="getWeather()">Получить погоду</button>
    <button disabled v-else>Введите название города</button>
    
    <p class="error">{{ error }}</p>

    <div v-if="info != null">
      <p>{{ showTemp }}°C</p>
      <p>{{ showFeelsLike }}°C</p>
      <p>{{ showMinTemp }}°C</p>
      <p>{{ showMaxTemp}}°C</p>
    </div>
    <p v-if="loading" class="loading">Загрузка...</p>
  </div>
  <!-- <input type="text" v-model="userName" placeholder="Имя">
  <input type="password" v-model="userPass" placeholder="Пароль">
  <input type="email" v-model="userEmail" placeholder="Почта">
<button @click="sendData()">Отправить</button>
<p className="Ошибка">{{ error }}</p>


<div v-if="users.length == 0">У нас нет пользователей</div> -->

<!-- <h3>{{ info }}</h3>
<p>{{ someinfo }}</p>
<button type="button" v-on:click="userData()">Отправить</button> -->
<!-- <User v-for="(el, index) in users":key="index" :user="el" :index="index" :deleteUser="deleteUser" /> -->
</template>

<style scoped>
.loading{
  color:#fff;
  font-style: bold;
}
.error{
  color:#d03939;
}
.wrapper button:disabled{
  background: #746027;
  cursor: not-allowed;
}
.wrapper button{
  background: #e3bc4b;
  color:#fff;
  border-radius: 10px;
  border: 2px solid #b99935;
  padding: 10px 15px;
  margin-left: 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}
.wrapper button:hover {
  transform: scale(1.1) translateY(-5px);
}
.wrapper input{
  margin-top: 30px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #110813;
  color: #fcfcfc;
  font-size: 14px;
  padding: 5p 8px;
  outline: none;
}
.wrapper input:focus{
  border-bottom-color: #6e2d7d;
}
.wrapper{
  color: white;
  width: 900px;
  height: 500px;
  border-radius: 50px;
  padding: 20px;
  background: #1f0f24;
  text-align: center;
}
.wrapper h1{
  margin-top: 50px;
}
.wrapper p{
  margin-top: 20px;
}
/*.user{
  justify-content: center;
  text-align: center;
  border: 2px solid rgb(17, 58, 29);
  border-radius: 10px;
  background-color: rgb(167, 255, 171);
  width: 200px;
  height: 100px;
}
h3 {
  font-weight: lighter;
}
p{
  color: red;
} */
</style>