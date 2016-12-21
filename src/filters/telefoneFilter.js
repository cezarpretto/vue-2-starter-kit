import Vue from 'vue';
Vue.filter('telefone', (value) => {
  if(value.length === 10){
    let pt1 = value.substring(0, 2);
    let pt2 = value.substring(2, 6);
    let pt3 = value.substring(6, 10);
    return `(${pt1}) ${pt2}-${pt3}`;
  }else if(value.length === 11){
    let pt1 = value.substring(0, 2);
    let pt2 = value.substring(2, 7);
    let pt3 = value.substring(7, 11);
    return `(${pt1}) ${pt2}-${pt3}`;
  }
});
