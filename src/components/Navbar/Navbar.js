import AuthService from '../../services/AuthService'
const auth = AuthService;
export default {
  data() {
    return {
      showMenu: false,
      loggedUser: {}
    }
  },
  mounted() {
    this.loggedUser = auth.getUsuario();
    if(this.loggedUser.nome === undefined){
      this.collapseMenu(true);
    }else{
      this.collapseMenu(false);
    }
    this.$events.on('show-menu', (event) => {
      this.showMenu = event;
      if(this.showMenu){
        this.loggedUser = auth.getUsuario();
        this.collapseMenu(false);
      }else{
        this.collapseMenu(true);
      }
    });
  },
  methods: {
    logout() {
      this.$events.emit('show-menu', false);
      this.$router.push('/login');
      auth.logout();
    },
    collapseMenu(arg) {
      let body = document.getElementById('mainBody');
      if(arg){
        body.className += ' sidebar-collapse';
      }else{
        let aux = body.className.split(' ');
        body.className = '';
        for (var i = 0; i < aux.length; i++) {
          if(aux[i] != 'sidebar-collapse'){
            body.className += ` ${aux[i]}`;
          }
        }
      }
    }
  }
}
