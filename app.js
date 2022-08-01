const app = Vue.createApp({
  data(){
    return{
      showName: true,
      showEmail: false,
      showPhone: false,
      firstName: 'Antonio',
      lastName: 'Jacobs',
      email: 'antonio.jacobs@example.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/8.jpg',
      phone: '(368) 775-1102',
    }
  },

  methods: {
    async getUser(){
      const res = await fetch('https://randomuser.me/api');

      const {results} = await res.json();
      
      console.log(results)

      this.firstName= results[0].name.first
      this.lastName= results[0].name.last
      this.email= results[0].email
      this.gender= results[0].gender
      this.phone= results[0].phone
      this.picture= results[0].picture.large
    
    },
    displayName(){
      this.showName = true;
      this.showEmail = false;
      this.showPhone = false;
    },
    displayEmail(){
      this.showName = false;
      this.showEmail = true;
      this.showPhone = false;
    },
    displayPhone(){
      this.showName = false;
      this.showEmail = false;
      this.showPhone = true;
    }
  },
});

app.mount('#app');