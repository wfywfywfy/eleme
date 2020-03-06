import scrolly from '@/components/scrollY'
export default {
  name: '',
  data() {
    return {

    };
  },
  created() {

  },
  components: {
    scrolly
  },
  async mounted() {
    await this.$refs.scrolly.fire()

    this.$refs.scrolly.setMin()


  },
  methods: {

  }
};
