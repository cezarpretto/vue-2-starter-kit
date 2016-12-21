import Vue from 'vue';
// var ip = 'http://172.16.10.79/qualifica/';
// var loggedUser = null;
const AuthService = {
  ip: 'http://172.16.10.79/qualifica/',
  loggedUser: null,
  nome: '',
  isLoggedIn(vm) {
    if(vm === undefined){
      console.error('Você precisa passar uma instância do Vue como parâmetro. Ex: auth.isLoggedIn(this);');
    }else{
      this.loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
      if(this.loggedUser === null){
        vm.$events.emit('show-menu', false);
        vm.$router.push('login');
      }else{
        vm.$events.emit('show-menu', true);
      }
    }
  },

  setUsuario(usuario) {
    window.localStorage.setItem('loggedUser', JSON.stringify(usuario));
    this.loggedUser = usuario;
  },

  getUsuario() {
    if(this.loggedUser === null){
      return {};
    }else{
      this.loggedUser = JSON.parse(window.localStorage.getItem('loggedUser'));
      return this.loggedUser;
    }
  },

  logout() {
    window.localStorage.setItem('loggedUser', JSON.stringify(null));
    this.loggedUser = null;
  },

  getIp() {
    return this.ip;
  }
};
export default AuthService;
