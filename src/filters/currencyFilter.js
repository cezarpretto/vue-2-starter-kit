import Vue from 'vue';
Vue.filter('currency', (value) => {
  var prefixo = 'R$ ';
  if(value !== undefined){
    let aux = value.toString().split('.');
    if(value.toString().indexOf('.') > -1){
      if(aux.length === 2){
        if(aux[1].length === 1){
          return `${prefixo}${aux[0]},${aux[1]}0`;
        }else{
          return `${prefixo}${aux[0]},${aux[1]}`;
        }
      }
    }else{
      return `${prefixo}${value},00`;
    }
  }
});
