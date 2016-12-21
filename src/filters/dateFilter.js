import Vue from 'vue';
Vue.filter('date', (value) => {
  if(value !== undefined){
    if(value instanceof Date){
      let dt = new Date(value);
      return `${dt.getDate()}/${dt.getMonth() +1}/${dt.getFullYear()}`
    }else{
      return `${value.substring(8, 10)}/${value.substring(5, 7)}/${value.substring(0, 4)}`
    }
  }
});
