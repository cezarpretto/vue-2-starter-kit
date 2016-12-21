import AuthService from '../../services/AuthService';
import Growl from '../../services/GrowlService';
import InputCpf from '../../components/Inputs/InputCpf.vue';
import { required } from 'vuelidate/lib/validators';

const auth = AuthService;

export default {
  data() {
    return {
      teste: '',
      usuario: [],
      cpf: undefined
    }
  },
  mounted() {

  },
  methods: {
    logar() {
      auth.setUsuario({nome: 'Cezar Pretto'});
      this.$events.emit('show-menu', true);
      this.$router.push('/');
      // Growl.success('Seja bem vindo <strong>Cezar</strong>');
    }
  },
  components: {
    'input-cpf': InputCpf
  },
  validations: {
    cpf: {
      required
    }
  }
}
