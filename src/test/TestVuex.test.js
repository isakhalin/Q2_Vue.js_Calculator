import VuexComp from "../components/VuexComp.vue";
import {shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex)

describe('Test store', () => {
    let actions;
    let store;

    beforeEach(() => {
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

    it('Test Actions', ()=>{
        const wrapper = shallowMount(VuexComp, {
            store,
            localVue
        })

        const input = wrapper.find('input[name="test"]');
        input.setValue('Testing');

        expect(wrapper.vm.value).toBe('Testing');

        const btn = wrapper.find('button[name="save"]');
        btn.trigger('click');
        expect(actions.addData).toHaveBeenCalled()
    })
});