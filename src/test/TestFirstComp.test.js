import TestComponent from "../components/TestComponent.vue"; //Импортируем компонент, который будем тестировать
import {mount} from "@vue/test-utils"; //монтируем компонент

//Метод описывает что мы будем делать в тесте
describe("Test for TestComponent", () => {
    //Метод test говорит что мы будем тестировать
    test('test props', () => {
        const wrapper = mount(TestComponent, { //Создается некий враппер, в который мы монтируем компонент и передаем пропсы
            propsData: {    // Устанавливается значение пропсов по умолчанию в момент монтирования
                message: "Some text"
            }
        })
        expect(wrapper.text()).toContain('The message is: Some') ////Метод Jest'а который используется для проверки значения. Реальное с ожидаемым.
        ////text() извлекает только текст и компонента
        //expect(wrapper.html()).toContain('The message is: <span>Some text</span>') ////html() извлекает модержимое с разметкой целиком
    })
})