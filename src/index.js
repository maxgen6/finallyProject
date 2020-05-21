

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import headerAndFooter from './modules/headerAndFooter';
import accordion from './modules/accordion';
import addBtn from './modules/addBtn';
import getCheckList from './modules/getCheckList';
import consultation from './modules/consultation';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import sendSale from './modules/sendSale';



headerAndFooter();
accordion();
addBtn();
getCheckList();
consultation();
calculator();
sendForm();
sendSale();