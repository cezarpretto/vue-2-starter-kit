<template id="select2-template">
  <select v-bind:multiple="JSON.parse(multiple)" style="width: 100%">
    <slot></slot>
  </select>
</template>

<script>
export default {
  props: ['options', 'value', 'description', 'multiple'],
  template: '#select2-template',
  mounted: function () {
    var vm = this
    setTimeout(() => {
      $(this.$el)
        .val(this.value)
        // init select2
        .select2({ data: this.options })
        // emit event on change.
        .on('change', function () {
          if(JSON.parse(this.multiple)){
            let aux = $(this).val();
            let ret = [];
            for (var i = 0; i < aux.length; i++) {
              let v = {
                id: aux[i],
                status: 'INSERT'
              };
              ret.push(v);
            }
            vm.$emit('input', ret);
          }else{
            vm.$emit('input', this.value);
          }
        })
    }, 100);
  },
  watch: {
    value: function (value) {
      // update value
      setTimeout(() => {
        if(Array.isArray(value)){
          console.log('Array');
          console.log(value);
        }
        $(this.$el).select2('val', value.toString())
      }, 100);
    },
    options: function (options) {
      // update options
      for (var i = 0; i < this.options.length; i++) {
        this.options[i].text = this.options[i][this.description]
      }
      $(this.$el).select2({ data: options })
    }
  },
  destroyed: function () {
    $(this.$el).off().select2('destroy')
  }
}
</script>
