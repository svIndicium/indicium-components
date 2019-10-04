import Vue from "vue";
import button from "./button";

const Components = {
    button
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});
