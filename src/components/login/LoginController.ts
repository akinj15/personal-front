
import InputComponent from '../styled-compenets/input/InputComponent.vue';
import ButtonComponent from '../styled-compenets/button/ButtonComponent.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default {
  components: {
    InputComponent,
    ButtonComponent,
  },
  setup () {
      const router = useRouter()
      const el = ref(null)
      let mopa = ref(null)
      let login = () => {
      router.push({path: '/home'})
    }
    return {
      el,
      mopa,
      login
    }
  }
}
