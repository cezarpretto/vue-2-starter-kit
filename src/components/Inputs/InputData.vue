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

      this.in1.addEventListener('keyup', () => {
        if(this.in1.value === '' || this.in1.value === null){
          this.$emit('input', undefined);
        }
        if(this.in1.value !== undefined){
          this.in1.value = this.in1.value.replace(/[^0-9]+/g, "");
          if(this.in1.value.length > 2){
            this.in1.value = `${this.in1.value.substring(0, 2)}/${this.in1.value.substring(2)}`
          }

          if(this.in1.value.length > 5){
            this.in1.value = `${this.in1.value.substring(0, 5)}/${this.in1.value.substring(5, 9)}`
          }

          if(this.in1.value.length === 10){
            let aux = this.in1.value.split('/');
            let dt = new Date(aux[2], aux[1] -1, aux[0]);
            this.$emit('input', dt);
          }
        }else{
          this.$emit('input', dt);
        }
      });
    },
    methods: {

    },
    watch: {
      value(vl) {
        if(vl !== undefined && !(vl instanceof Date)) {
          let aux = vl.split('-');
          if(aux.length === 3) {
            this.in1.value = `${aux[2]}/${aux[1]}/${aux[0]}`;
          }
        }
        // if(this.value !== undefined && vl instanceof Date){
        //   let dia = vl.getDate();
        //   let mes = vl.getMonth() + 1;
        //   dia.toString().length === 1 ? dia = `0${dia}` : dia = dia;
        //   mes.toString().length === 1 ? mes = `0${mes}` : mes = mes;
        //   this.in1.value = `${dia}/${mes}/${vl.getFullYear()}`;
        // }
      }
    }
  }
</script>
