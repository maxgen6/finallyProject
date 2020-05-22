'use strict'; 

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";


import './modules/append-polyfill';
import maskPhone from './modules/maskPhone';
import popupCallForm from './modules/popupCallForm';
import butoonMore from './modules/butoonMore';
import accordionPerformance from './modules/accordionPerformance';
import calculatorAccordion from './modules/calculatorAccordion';

maskPhone();
popupCallForm();
butoonMore();
accordionPerformance();
calculatorAccordion();

