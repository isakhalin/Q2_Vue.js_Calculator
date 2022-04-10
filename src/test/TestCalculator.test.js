import MyCalculator from "../components/MyCalculator.vue";
//import {describe} from "@jest/globals";
import {mount} from '@vue/test-utils';
//require("babel-polyfill");


describe('Test Calculator', () => {
    it('Test first operand', () => {
        const wrapper = mount(MyCalculator)
        const operand1 = wrapper.find('input[name=operand1]')
        operand1.setValue('1')
        expect(wrapper.vm.operand1).toBe(1)
    })

    it('Test second operand', () => {
        const wrapper = mount(MyCalculator)
        const operand2 = wrapper.find('input[name=operand2]')
        operand2.setValue('2')
        expect(wrapper.vm.operand2).toBe(2)
    })

    it('Test method sum', () => {
        const wrapper = mount(MyCalculator);
        const operand1 = wrapper.find('input[name=operand1]'); //Найти операнд 1
        const operand2 = wrapper.find('input[name=operand2]'); //Найти операнд 2

        operand1.element.value = "7"    //Установить значение операнда 1 = 1
        operand1.trigger('input')

        operand2.setValue('4')     //Установить значение операнда 2 = 4

        const btn = wrapper.find('button[name="+"]')    //Найти кнопку
        btn.trigger('click')    //Инициализация нажатия

        expect(wrapper.vm.result).toBe(11)       //Проверить
    })
})