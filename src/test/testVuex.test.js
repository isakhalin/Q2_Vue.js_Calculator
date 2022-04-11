import VuexComp from "../components/VuexComp.Vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('test store', () => {
    let actions
    let store

    beforeEach(()=> {
        actions = {
            addData: jest.fn()
        }

        store = new Vuex.Store({
            actions,
            state: {
                data: ''
            }
        })
    })
    it('test action', () => {
        const wrapper = shallowMount(VuexComp,{
            store, localVue
        })
        const input = wrapper.find('input')
        input.setValue('test')
        expect(wrapper.vm.value).toBe('test')

        const btn = wrapper.find('button')
        btn.trigger('click')

        expect(wrapper.vm.value).toBe('test')
        expect(actions.addData).toHaveBeenCalled()
    })
})