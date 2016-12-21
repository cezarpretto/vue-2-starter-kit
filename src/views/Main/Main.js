import Headerbar from '../../components/Headerbar/Headerbar.vue';
import AuthService from '../../services/AuthService'

var auth = AuthService;

export default {
  data() {
    return {

    }
  },
  mounted () {
    auth.isLoggedIn(this)
  },
  methods: {

  },
  components: {
    'header-bar': Headerbar
  }
}
