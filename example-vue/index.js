import Vue from 'vue';
import App from './app';
var vm = new Vue({
    // 选项
    el: "#root",
    render: h => h(App)
})