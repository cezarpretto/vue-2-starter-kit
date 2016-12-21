import Vue from 'vue';

Vue.directive('uppercase', {
  twoWay: true,
  bind: function(el, binding, vNode, oldNode){
    el.addEventListener('input', () => {
      el.value = el.value.toUpperCase();
    });
  },
  update: function(el){
    el.value = el.value.toUpperCase();
  },
  unbind: function(el){
    el.removeEventListener('input', null);
  }
});
