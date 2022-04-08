import MyCalculator from "../components/MyCalculator";
import {mount} from '@vue/test-utils'

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
})