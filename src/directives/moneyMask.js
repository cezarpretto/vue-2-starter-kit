import Vue from 'vue';
import { findVModelName, addPontos } from '../services/Utils';
import * as vanillaTextMask from 'vanilla-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const numberMask = createNumberMask({
  prefix: '',
  suffix: '',
  thousandsSeparatorSymbol: '.',
  decimalSymbol: ',',
  requireDecimal: true
});
var first = true;
Vue.directive('moneyMask', {
  twoWay: true,
  bind: function(el, binding, vNode){
    if(vNode.context[findVModelName(vNode)] !== undefined){
      vNode.context[findVModelName(vNode)] = vNode.context[findVModelName(vNode)].toString().replace('.', ',');
    }
    var maskedInputController = vanillaTextMask.maskInput({
      inputElement: el,
      mask: numberMask
    })
  },
  update: function(el, binding, vNode){
    let value = vNode.elm._value
    if(value !== '0'){
      if(value.indexOf('.') != -1){
        let aux = value.split('.');
        if(aux.length === 2){
          if(first){
            if(vNode.context[findVModelName(vNode)] !== undefined){
              vNode.context[findVModelName(vNode)] = vNode.context[findVModelName(vNode)].toString().replace('.', ',');
            }
            first = false;
          }
        }else if(aux.length === 1){
          var maskedInputController = vanillaTextMask.maskInput({
            inputElement: el,
            mask: numberMask
          })
        }
      }
    }
  },
  componentUpdated: function(el, binding, vNode){

  },
  unbind: function(el){

  }
});
