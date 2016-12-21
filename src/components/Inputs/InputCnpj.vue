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
          this.in1.value = this.in1.value.substring(0, 2) + '.' + this.in1.value.substring(2);
        }
        if(this.in1.value.length > 6){
          this.in1.value = this.in1.value.substring(0, 6) + '.' + this.in1.value.substring(6);
        }
        if(this.in1.value.length > 10){
          this.in1.value = this.in1.value.substring(0, 10) + '/' + this.in1.value.substring(10);
        }
        if(this.in1.value.length > 15){
          this.in1.value = this.in1.value.substring(0, 15) + '-' + this.in1.value.substring(15);
        }
        if(this.in1.value.length > 18){
          this.in1.value = this.in1.value.substring(0, 18);
        }

        if(this.in2.value.length > 18){
          this.$emit('input', this.in2.value.substring(0, 18));
        }else{
          this.$emit('input', this.in2.value);
        }
      });

      this.in1.addEventListener('keydown', (e) => {
        if(this.in1.value.length === 18){
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
          if(val.length === 14){
            let pt0 = val.substring(0, 2);
            let pt1 = val.substring(2, 5);
            let pt2 = val.substring(5, 8);
            let pt3 = val.substring(8, 12);
            let pt4 = val.substring(12, 14);
            this.in1.value = `${pt0}.${pt1}.${pt2}/${pt3}-${pt4}`;
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
