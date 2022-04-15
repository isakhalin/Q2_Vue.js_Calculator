import TestComponent from "../components/TestComponent.vue";
import { mount } from "@vue/test-utils";

describe("Test for TestComponent", () => {
    test('test props', () => {
        const wrapper = mount(TestComponent, {
            propsData: {
                message: 'Hello World'
            }
        })
        expect(wrapper.text()).toContain('The message is: Hello World')
    })
})