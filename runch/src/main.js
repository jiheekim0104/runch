import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

const app = createApp(App);
app.use(store); // Vuex 스토어를 등록합니다.
app.mount('#app');

// var mysql = require('mysql');
// // Connection 객체 생성 
// var connection = mysql.createConnection({
//   host: 'runtime.co.kr',
//   port: 3306,
//   user: 'RR',   
//   password: 'fnffpt',
//   database: 'test_crud'  
// });  

// // Connect
// connection.connect(function (err) {   
//   if (err) {     
//     console.error('mysql connection error');     
//     console.error(err);     
//     throw err;   
//   } 
// });

// // insert
// app.post('/regist', function (req, res) {
//   var user = {
//     'userid': req.body.userid,
//     'name': req.body.name,
//     'address': req.body.address
//   };
//   connection.query('insert into users set ?', user, function (err, result) {
//     if (err) {
//       console.error(err);
//       console.log(result);
//       throw err;
//     }
//     res.status(200).send('success');
//   });
// });