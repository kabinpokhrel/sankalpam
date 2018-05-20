var app = new Vue({
    el: '#app',
    data: {
      user:{
          yourName:'',
          wifeName:'',
          gowtra:'',
          pujaName:'Shiva',
          pujaDate: new Date().toLocaleDateString()
      },
      address:{
          continent:'',
          country:'',
          mountain:'',
          mountain_direction:''
      }
    }
  })