import Vue from 'vue';
Vue.directive('cpfMask', {
  twoWay: true,
  bind: function(el, binding, vNode, oldNode){
    el.addEventListener('keyup', () => {
      el.value = el.value.replace(/[^0-9]+/g, "");
      if(el.value.length > 3){
        el.value = el.value.substring(0, 3) + '.' + el.value.substring(3);
      }
      if(el.value.length > 7){
        el.value = el.value.substring(0, 7) + '.' + el.value.substring(7);
      }
      if(el.value.length > 11){
        el.value = el.value.substring(0, 11) + '-' + el.value.substring(11, 13);
      }
      el.addEventListener('keydown', (e) => {
        if(el.value.length === 14){
          if(e.keyCode !== 8){
            e.preventDefault();
          }
        }
      });
    });
  },
  inserted: function(el, binding){
    // $(el).mask(binding.value)
  },
  update: function(el, binding){
    if(el.value !== undefined){
      if(el.value.length === 11){
        let pt0 = el.value.substring(0, 3);
        let pt1 = el.value.substring(3, 6);
        let pt2 = el.value.substring(6, 9);
        let pt3 = el.value.substring(9, 11);
        el.value = `${pt0}.${pt1}.${pt2}-${pt3}`;
      }
    }
  },
  unbind: function(el){
    el.removeEventListener('keyup', null)
  }
});
