import Vue from 'vue';
Vue.directive('cnpjMask', {
  twoWay: true,
  bind: function(el, binding, vNode, oldNode){
    el.addEventListener('keyup', () => {
      el.value = el.value.replace(/[^0-9]+/g, "");
      if(el.value.length > 2){
        el.value = el.value.substring(0, 2) + '.' + el.value.substring(2);
      }
      if(el.value.length > 6){
        el.value = el.value.substring(0, 6) + '.' + el.value.substring(6);
      }
      if(el.value.length > 10){
        el.value = el.value.substring(0, 10) + '/' + el.value.substring(10);
      }
      if(el.value.length > 15){
        el.value = el.value.substring(0, 15) + '-' + el.value.substring(15);
      }
      if(el.value.length > 18){
        el.value = el.value.substring(0, 18);
      }
    });

    el.addEventListener('keydown', (e) => {
      if(el.value.length === 18){
        if(e.keyCode !== 8 && e.keyCode !== 9){
          e.preventDefault();
        }
      }
    });
  },
  inserted: function(el, binding){
    // $(el).mask(binding.value)
  },
  update: function(el, binding){
    if(el.value !== undefined){
      if(el.value.length === 14){
        let pt1 = el.value.substring(0, 2);
        let pt2 = el.value.substring(2, 5);
        let pt3 = el.value.substring(5, 8);
        let pt4 = el.value.substring(8, 12);
        let pt5 = el.value.substring(12, 14);
        el.value = `${pt1}.${pt2}.${pt3}/${pt4}-${pt5}`;
      }
    }
  },
  unbind: function(el){
    el.removeEventListener('keyup', null)
  }
});
