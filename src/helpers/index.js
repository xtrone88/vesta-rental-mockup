import Vue from 'vue';
import stringHelpers from './string-helpers';
import dateHelpers from './date-helpers';
import propertyHelpers from './property-helpers';

export default {
  install: () => {
    Vue.prototype.stringHelpers = stringHelpers;
    Vue.stringHelpers = stringHelpers;

    Vue.prototype.dateHelpers = dateHelpers;
    Vue.dateHelpers = dateHelpers;
    
    Vue.prototype.propertyHelpers = propertyHelpers;
    Vue.propertyHelpers = propertyHelpers;
  }
}