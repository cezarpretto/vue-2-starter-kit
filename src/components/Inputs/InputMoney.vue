<template>
  <div id="inputCpf">
    <input type="text" class="form-control" id="txt1" v-bind:placeholder="placeholder">
    <span v-bind:class="icon"></span>
  </div>
</template>
<script type="text/javascript">
  import Vue from 'vue';
  export default {
    props: ['value', 'placeholder', 'icon'],
    data() {
      return {

      }
    },
    mounted() {
      let inputs = this.$el.querySelectorAll('input');
      this.in1 = inputs[0];
      setTimeout(() => {
        $(this.in1).maskMoney({prefix:'R$ ', allowNegative: true, thousands:'.', decimal:',', affixesStay: true});
        if(this.value === undefined){
          $(this.in1).maskMoney('mask', 0);
        }
      }, 100);

      this.in1.addEventListener('keyup', () => {
        this.$emit('input', $(this.in1).maskMoney('unmasked')[0]);
      });
    },
    methods: {

    },
    watch: {
      value() {
        if(this.value !== undefined){
          $(this.in1).maskMoney('mask', this.value);
        }
      }
    }
  }
</script>
