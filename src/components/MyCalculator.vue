<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h1>{{ messageComputed }}</h1>
    <hr/>
<!--    <button @click="doThat('Hello', $event)">Click me</button>-->
<!--    <input type="text" @blur="onValidation" @input=""/>-->
    <div class="display">
      <input type="number" v-model.number="operand1" name="operand1">
      <input type="number" v-model.number="operand2" name="operand2">

      = {{ result }}
      <br/>
      = Fib: {{ resultFib }}
    </div>

    <div class="errors" v-if="error">Ошибка: {{ error }}</div>

    <div class="strange-message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Получилось слишком большое число</template>
    </div>

<!--    <div class="arr">-->
<!--      <div v-for="(item, indx) in myCollection" :key="item">{{ indx }} - {{ item }}</div>-->
<!--    </div>-->
    <div class="logs">
      {{ logs }}
    </div>

    <button @click="message = `new text`">Update</button>
    <div class="keyboard">
      <button v-for="item in operands"
              :key="item"
              :disabled="getBtnStatusDisabled(item)"
              :name="item"
              @click="calculate(item)">
              {{ item }}
      </button>
    </div>

    <input type="checkbox" id="keyCheckBox" v-model="kbrdCheckbox">
    <span>Отобразить экранную клавиатуру</span>
    <div class="keyboard" v-show="kbrdCheckbox">
      <button v-for="item in createKbrdBtns"
              :key="item"
              @click="addNumFromKbrd(item)">
        {{ item }}
      </button>
      <div>
        <input id="oprndSelectorOne" type="radio" value="oper1" v-model="operandSelector"> Операнд 1
        <input id="oprndSelectorTwo" type="radio" value="oper2" v-model="operandSelector"> Операнд 2
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyCalculator',
  props: {
    msg: {
      type: String,
      default: 'Empty Props',
      required: true
    }
  },
  data(){
    return {
      message: "Hello Vue",
      myCollection: [1, 2, 3, 4, 5, 6],
      operands: ['+', '-', '/', '*', '^', '//'],
      operand1: 0,
      operand2: 0,
      error: '',
      result: 0,
      resultFib: 0,
      logs: {},
      kbrdCheckbox: false,
      operandSelector: 'oper1',
    }
  },
  computed: {
    messageComputed() {
      return `${this.message} from GB`;
    },
    fibOperand1(){
      return this.fib(this.operand1)
    },
    fibOperand2(){
      return this.fib(this.operand2)
    },
    createKbrdBtns(){
      const arr = ['<-']
      for (let i = 9; i >= 0; i--) {
        arr.unshift(i);
      }
      return arr;
    },
  },
  watch: {
    logs: function () {
      const keys = Object.keys(this.logs);
      //const lastKey = keys[keys.length - 1];
      //console.log(`Logs Updated at ${lastKey}`);
      console.log(`Logs Updated at ${keys[keys.length - 1]}`);
    }
  },
  methods: {
    calculate(operation = '+') {
      this.error = '';
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "/":
          this.devide();
          break;
        case "*":
          this.multiply();
          break;
        case "^":
          this.exponentiation();
          break;
        case "//":
          this.trnc();
          break;
      }
      const key = Date.now();
      const value = `${this.operand1}${operation}${this.operand2} = ${this.result}`;
      this.$set(this.logs, key, value);
    },
    getBtnStatusDisabled(operation){
      return (operation === '/' || operation === '//') && this.operand2 === 0;
    },

    add(){
      this.result = this.operand1 + this.operand2;
      this.resultFib = this.fibOperand1 + this.fibOperand2;
    },
    substract(){
      this.result = this.operand1 - this.operand2;
    },
    devide(){
      if (this.operand2 === 0) {
        this.error = 'На ноль делить нельзя'
      } else {
        this.result = this.operand1 / this.operand2;
      }
    },
    multiply(){
      this.result = this.operand1 * this.operand2;
    },
    // doThat(str, evnt){
    //   console.log('Button clicked', str, evnt);
    // },
    // devide(op1, op2){
    //   if (op2 !== 0 && op2 !== "") {
    //     this.result = op1 / op2;
    //   } else {
    //     this.result = 'На ноль делить нельзя';
    //   }
    // },
    // multiply(){
    //   const {operand1, operand2} = this;
    //   this.result = operand1 * operand2;
    // },
    exponentiation(){
      this.result = Math.pow(this.operand1, this.operand2);  //Возведение в степень
    },
    trnc() {
      if (this.operand1 !== 0 && this.operand2 !== "") {
        this.result = Math.trunc(this.operand1 / this.operand2);  //Возвращает целую часть
      } else {
        this.error = 'На ноль делить нельзя';
      }
    },
    fib(n){
      return n <= 1 ? n : this.fib(n-1) + this.fib(n-2);
    },

    addNumFromKbrd(num){
      if (this.operandSelector === 'oper1'){
        this.operand1 = this.calcNumFromKbrd(num, this.operand1);
      } else {
        this.operand2 = this.calcNumFromKbrd(num, this.operand2);
      }
    },

    calcNumFromKbrd(num, oper){
      let operand = String(oper);
      if(num === '<-'){
        operand = operand.slice(0, -1);
        return +operand;
      }
      operand += num;
      return +operand;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
