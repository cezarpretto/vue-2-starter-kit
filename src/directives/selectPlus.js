import Vue from 'vue';
import { findVModelName } from '../services/Utils'
Vue.directive('selectPlus', {
  'twoWay': true,
  bind: function(el, binding, vNode, oldNode){
    setTimeout(() => {
      $(el).select2();
      var $eventSelect = $(el);
      $eventSelect.on('select2:select', (e) => {
        vNode.context[findVModelName(vNode)] = $(el).val();
      });

      $eventSelect.on('select2:unselect', (e) => {
        vNode.context[findVModelName(vNode)] = $(el).val();
      });
    }, 100);
  }
});
