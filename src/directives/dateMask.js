import Vue from 'vue';
import { dataParaBack } from '../services/Utils';

Vue.directive('dateMask', {
  twoWay: true,
  bind: function(el, binding, vNode, oldNode){
    setTimeout(() => {
      $(el).mask('00/00/0000');
    }, 5);
  },
  update: function(el, binding){
    if(el.value !== undefined && el.value !== null && el.value !== '' && el.value.length === 26){
      let aux = el.value.split('-');
      el.value = `${parseInt(aux[2].replace('"', ''))}/${parseInt(aux[1].replace('"', ''))}/${parseInt(aux[0].replace('"', ''))}`;
    }
  },
  unbind: function(el){
    el.removeEventListener('keyup', null)
  }
});
