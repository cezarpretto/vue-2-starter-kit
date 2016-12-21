import Vue from 'vue';
import { findVModelName } from '../services/Utils';
Vue.directive('cepMask', {
  twoWay: true,
  bind: function(el, binding, vNode, oldNode){
    el.addEventListener('keyup', () => {
      el.value = el.value.replace(/[^0-9]+/g, "");
      if(el.value.length > 5){
        el.value = `${el.value.substring(0, 5)}-${el.value.substring(5)}`;
      }
    });

    el.addEventListener('keydown', (e) => {
      if(el.value.length === 9){
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
      if(el.value.length === 8){
        let pt1 = el.value.substring(0, 5);
        let pt2 = el.value.substring(5, 8);
        el.value = `${pt1}-${pt2}`;
      }
    }
  },
  unbind: function(el){
    el.removeEventListener('keyup', null)
  }
});
