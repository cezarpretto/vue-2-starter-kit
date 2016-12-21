import Vue from 'vue';
import { findVModelName } from '../services/Utils';
Vue.directive('telefoneMask', {
  twoWay: true,
  bind: function(el, binding, vNode, oldNode){
    el.addEventListener('keyup', () => {
      el.value = el.value.replace(/[^0-9]+/g, "");
      if(el.value.length > 2){
        el.value = `(${el.value.substring(0, 2)}) ${el.value.substring(2)}`;
      }
      if(el.value.length > 9){
        el.value = `${el.value.substring(0, 9)}-${el.value.substring(9)}`;
      }
      if(el.value.length === 14){
        el.value = el.value.substring(0, 14);
      }
      if(el.value.length === 15){
        el.value = el.value.replace(/[^0-9]+/g, "");
        let pt1 = el.value.substring(0, 2);
        let pt2 = el.value.substring(2, 7);
        let pt3 = el.value.substring(7, 11);
        el.value = `(${pt1}) ${pt2}-${pt3}`;
      }
    });

    el.addEventListener('keydown', (e) => {
      if(el.value.length === 15){
        if(e.keyCode !== 8){
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
      if(el.value.length === 10){
        let pt1 = el.value.substring(0, 2);
        let pt2 = el.value.substring(2, 6);
        let pt3 = el.value.substring(6, 10);
        el.value = `(${pt1}) ${pt2}-${pt3}`;
      }else if(el.value.length === 11){
        let pt1 = el.value.substring(0, 2);
        let pt2 = el.value.substring(2, 7);
        let pt3 = el.value.substring(7, 11);
        el.value = `(${pt1}) ${pt2}-${pt3}`;
      }
    }
  },
  unbind: function(el){
    el.removeEventListener('keyup', null)
  }
});
