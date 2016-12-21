import Vue from 'vue';
Vue.directive('modalfocus', {
  'twoWay': true,
  bind: function(el, binding, vNode, oldNode){
    let input = el.querySelector('input');
    setTimeout(() => {
      $(el).on('shown.bs.modal', function () {
        input.focus();
        // input.select();
      });
    }, 500);
  }
});
