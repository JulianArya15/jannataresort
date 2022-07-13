import Vue from 'vue';
import json from './homepage.json';

export const jsonStore = new Vue({
    data: {
      jsonData: json
    }
})