<template>
  <div id="inputCpf">
    <input type="text" class="form-control" id="txt1" v-bind:placeholder="placeholder">
    <span v-bind:class="icon"></span>
    <input type="hidden" class="form-control" id="txt2">
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
      this.in2 = inputs[1];
      if(this.value !== undefined){
        this.in1.value = this.value;
        this.in2.value = this.value;
      }
      this.in1.addEventListener('keyup', () => {
        this.in2.value = this.in1.value.replace(/[^0-9]+/g, "");
        this.in1.value = this.in1.value.replace(/[^0-9]+/g, "");
        if(this.in1.value.length > 2){
          this.in1.value = `(${this.in1.value.substring(0, 2)}) ${this.in1.value.substring(2)}`;
        }
        if(this.in1.value.length > 9){
          this.in1.value = `${this.in1.value.substring(0, 9)}-${this.in1.value.substring(9)}`;
        }
        if(this.in1.value.length === 14){
          this.in1.value = this.in1.value.substring(0, 14);
        }
        if(this.in1.value.length === 15){
          this.in1.value = this.in1.value.replace(/[^0-9]+/g, "");
          let pt1 = this.in1.value.substring(0, 2);
          let pt2 = this.in1.value.substring(2, 7);
          let pt3 = this.in1.value.substring(7, 11);
          this.in1.value = `(${pt1}) ${pt2}-${pt3}`;
        }

        if(this.in2.value.length > 15){
          this.$emit('input', this.in2.value.substring(0, 16));
        }else{
          this.$emit('input', this.in2.value);
        }
      });

      this.in1.addEventListener('keydown', (e) => {
        if(this.in1.value.length > 14){
          if(e.keyCode !== 8 && e.keyCode !== 9){
            e.preventDefault();
          }
        }
      });

      this.mask(this.value);
    },
    methods: {
      mask(val) {
        if(val !== undefined){
          if(val.length === 10){
            let pt1 = val.substring(0, 2);
            let pt2 = val.substring(2, 6);
            let pt3 = val.substring(6, 10);
            this.in1.value = `(${pt1}) ${pt2}-${pt3}`;
          }else if(val.length === 11){
            let pt1 = val.substring(0, 2);
            let pt2 = val.substring(2, 7);
            let pt3 = val.substring(7, 11);
            this.in1.value = `(${pt1}) ${pt2}-${pt3}`;
          }
        }else{
          this.in1.value = '';
          this.in2.value = '';
        }
      }
    },
    watch: {
      value: function(val) {
        this.mask(val);
      }
    }
  }
</script>
