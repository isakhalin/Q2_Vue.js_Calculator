import Calculator from "../components/Calculator.vue"
import { mount } from "@vue/test-utils"
require("babel-polyfill");

describe('Test Calculator', () => {
    it('Test first operand1', () => {
        const wrapper = mount(Calculator);
        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('1')
        expect(wrapper.vm.operand1).toBe(1)
    })
    it('Test first operand2', () => {
        const wrapper = mount(Calculator);
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2')
        expect(wrapper.vm.operand2).toBe(2)
    })
    it('test method sum', () => {
        const wrapper = mount(Calculator);
        const operand1 = wrapper.find('input[name=operand1]');
        // operand1.element.value = "1"
        // operand1.trigger('input')
        operand1.setValue('1')
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('4')
        // operand2.element.value = '4'
        // operand2.trigger('input')

        const btn = wrapper.find('button[name="+"]')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(5)
        
    })
    it('test method sub', () => {
        const wrapper = mount(Calculator);
        const operand1 = wrapper.find('input[name=operand1]');

        operand1.setValue('4')
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('3')

        const btn = wrapper.find('button[name="-"]')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(1)
        
    })
    it('test method multipy', ()=> {
        const wrapper = mount(Calculator);
        const operand1 = wrapper.find('input[name=operand1]');

        operand1.setValue('2')
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2')

        const btn = wrapper.find('button[name="multiply"]')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(4)
    })
    it('test method pow', ()=> {
        const wrapper = mount(Calculator);
        const operand1 = wrapper.find('input[name=operand1]');

        operand1.setValue('4')
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2')

        const btn = wrapper.find('button[name="pow"]')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(16)
    })
    it('test method devide', ()=> {
        const wrapper = mount(Calculator);
        const operand1 = wrapper.find('input[name=operand1]');

        operand1.setValue('7')
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('2')

        const btn = wrapper.find('button[name="devide"]')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(3.5)
        operand2.setValue('0')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe('На ноль делить нельзя')
    })
    it('test method devideTrunk', ()=> {
        const wrapper = mount(Calculator);
        const operand1 = wrapper.find('input[name=operand1]');

        operand1.setValue('7')
        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('0')
        const btn = wrapper.find('button[name="devideTrunk"]');
        btn.trigger('click')
        expect(wrapper.vm.result).toBe('На ноль делить нельзя')
        operand2.setValue('2')
        btn.trigger('click')
        expect(wrapper.vm.result).toBe(3)
    })
    it('keyboardChecked', async ()=> {
        const wrapper = mount(Calculator);
        const checkbox = wrapper.find('input[name="checkboxChk"]');
        const radioOp1 = wrapper.find('.radioOp1');
        const radioOp2 = wrapper.find('.radioOp2');
        const div = wrapper.find('.keyBoard')

        expect(div.isVisible()).toBe(false)

        await checkbox.setChecked() //Устанавливает значение отмеченным элемент ввода типа чекбокса или радиокнопки и обновляет связанные данные с v-model.
        expect(checkbox.element.checked).toBe(true)
        expect(wrapper.vm.keyboardChecked).toBe(true)
        expect(div.isVisible()).toBe(true)

        await radioOp1.setChecked()
        expect(radioOp1.element.checked).toBe(true)
        expect(radioOp2.element.checked).toBe(false)
        expect(wrapper.vm.radio).toBe('operand1')

        await radioOp2.setChecked()
        expect(radioOp2.element.checked).toBe(true)
        expect(radioOp1.element.checked).toBe(false)
        expect(wrapper.vm.radio).toBe('operand2')
    })
    it('test method getValue', async ()=> {
        const wrapper = mount(Calculator);
        const radioOp1 = wrapper.find('.radioOp1');
        const radioOp2 = wrapper.find('.radioOp2');
        const keyNumber6 = wrapper.find('.keyNumber6')
        const keyNumber2 = wrapper.find('.keyNumber2')
        const operand1 = wrapper.find('input[name=operand1]');
        const operand2 = wrapper.find('input[name=operand2]');

        operand1.setValue(0)
        await radioOp1.setChecked();
        await keyNumber6.trigger('click')
        expect(wrapper.vm.tempStr1).toBe('6')
        expect(wrapper.vm.operand1).toBe(6)
        operand1.setValue(4)
        await keyNumber6.trigger('click')
        expect(wrapper.vm.tempStr1).toBe('46')
        expect(wrapper.vm.operand1).toBe(46)

        operand2.setValue(0)
        await radioOp2.setChecked();
        await keyNumber2.trigger('click')
        expect(wrapper.vm.tempStr2).toBe('2')
        expect(wrapper.vm.operand2).toBe(2)
        operand2.setValue(5)
        await keyNumber2.trigger('click')
        expect(wrapper.vm.tempStr2).toBe('52')
        expect(wrapper.vm.operand2).toBe(52)
        
    })

    it('test method deletevalue', async ()=> {
        const wrapper = mount(Calculator);
        const radioOp1 = wrapper.find('.radioOp1');
        const radioOp2 = wrapper.find('.radioOp2');
        const keyDelete = wrapper.find('.keyDelete');
        const operand1 = wrapper.find('input[name=operand1]');
        const operand2 = wrapper.find('input[name=operand2]');

        operand1.setValue('123')
        operand2.setValue('332')

        keyDelete.trigger('click')
        expect(wrapper.vm.operand1).toBe(123)
        expect(wrapper.vm.tempStr1).toBe('')
        expect(wrapper.vm.operand2).toBe(332)
        expect(wrapper.vm.tempStr2).toBe('')

        radioOp1.setChecked()
        keyDelete.trigger('click')
        expect(wrapper.vm.tempStr1).toBe('12')
        expect(wrapper.vm.operand1).toBe(12)
        
        radioOp2.setChecked()
        keyDelete.trigger('click')
        expect(wrapper.vm.tempStr2).toBe('33')
        expect(wrapper.vm.operand2).toBe(33)
    })
})