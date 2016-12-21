import Vue from 'vue';
Vue.filter('cpfCnpj', (value) => {
  if(value.length === 14){
    let pt1 = value.substring(0, 2);
    let pt2 = value.substring(2, 5);
    let pt3 = value.substring(5, 8);
    let pt4 = value.substring(8, 12);
    let pt5 = value.substring(12, 14);
    return `${pt1}.${pt2}.${pt3}/${pt4}-${pt5}`;
  }else if(value.length === 11){
    let pt1 = value.substring(0, 3);
    let pt2 = value.substring(3, 6);
    let pt3 = value.substring(6, 9);
    let pt4 = value.substring(9, 11);
    return `${pt1}.${pt2}.${pt3}-${pt4}`;
  }
});
