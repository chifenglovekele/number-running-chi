import VueRunningNumber from './vue-running-number.vue';
// 为组件提供 install 安装方法，供按需引入
VueRunningNumber.install = function (Vue) {

  Vue.component(VueRunningNumber.name, VueRunningNumber);

};
export default VueRunningNumber;
