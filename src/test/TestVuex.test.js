import VuexComp from "../components/VuexComp.vue";
import {shallowMount, createLocalVue} from "@vue/test-utils";
//shallowMount - Монтирует компонент не целиком, а с заглушками вместо вложенных компонентов
//createLocalVue - Функция, которая создает локальный инстанс
import Vuex from 'vuex';

const localVue = createLocalVue(); //Создаем локальный инстанс и записываем его в localVue
localVue.use(Vuex); //Использовать Vuex в локальном инстансе.

describe('Test store', () => {
    let actions;
    let store;

    beforeEach(() => {  //Хук, который выполняет действия перед каждым тестом.
        actions = {         //В данном случае в хуке очищается хранилище.
            addData: jest.fn()  //Функция МОК. которая смотрит за addData и как только addData
        }                      //будет вызвана в тесте, функция буде помечена как вызов и мы сможем
                                //это проверить.
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
        expect(actions.addData).toHaveBeenCalled() //Метод toHaveBeenCalled проверяет была ли вызвана функция
    })
});