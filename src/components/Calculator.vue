<template>
    <div>
        <div class="display">
            <input v-model.lazy.number = "operand1" type="number" name="operand1"/>
            <input v-model.lazy.number = "operand2" type="number" name="operand2"/>
            = {{result}}
        </div>
        <div class="keyboard">
            <button @click="result = operand1 + operand2" name="+">+</button>
            <button @click="result = operand1 - operand2" name="-">-</button>
            <button @click="devide(operand1, operand2)" name="devide">/</button>
            <button @click="multiply" name="multiply">*</button>
            <button @click="pow(operand1,operand2)" name="pow">^</button>
            <button @click="devideTrunk(operand1, operand2)" name="devideTrunk">//</button>
        </div>
        <form action="submit" @submit.prevent="">
        <input type="checkbox" value="Keyboard" v-model="keyboardChecked" @click="keyboardChecked=!keyboardChecked" name="checkboxChk">
        <span>Экранная клавиатура</span>
        <div v-show="keyboardChecked" class="keyBoard">
            <button v-for="(key, idx) in keys" :key="idx" @click="getValue(radio , key)" :class="'keyNumber'+ key">{{ key }}</button>
            <button @click="deleteValue(radio)" class="keyDelete"> &#8592; </button>
        </div>
        <div>
            <input type="radio" name="radioOperand" id="op1" v-model="radio" value="operand1" class="radioOp1"> 
            <label for="op1">Операнд 1</label>
            <input type="radio" name="radioOperand" id="op2" v-model="radio" value="operand2" class="radioOp2">
            <label for="op2">Операнд 2</label>
        </div>
    </form>
    </div>     
</template>
<script>
    export default {
        name: 'MyCalculator',
        data() {
            return {
                operand1: 0,
                operand2: 0,
                result: 0,
                keyboardChecked : false,
                keys: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                radio: '',
                tempStr1: '',
                tempStr2: ''
            }
        },
        methods: {
            getValue (radioValue,keyValue) {
                if(radioValue === "operand1") {
                    if(this.operand1 !== 0) {
                        this.tempStr1 = this.operand1;
                } 
                    this.tempStr1 += keyValue;
                    this.operand1 = +this.tempStr1; 
                } else {
                    if(this.operand2 !== 0) {
                        this.tempStr2 = this.operand2
                    }
                    this.tempStr2 += keyValue;
                    this.operand2 = +this.tempStr2;
                }
                },
            deleteValue(radioValue) {
                if(this.radio !== "operand1" && this.radio !== "operand2"){
                    return
                }
                if(radioValue === "operand1") {
                    this.tempStr1 = String(this.operand1);
                    this.tempStr1 = this.tempStr1.slice(0, -1);
                    this.operand1 = +this.tempStr1;
                } else {
                    this.tempStr2 = String(this.operand2);
                    this.tempStr2 = this.tempStr2.slice (0, -1);
                    this.operand2 = +this.tempStr2;                    }
                },
            devide (op1, op2) {
                if (op2 == 0 ){
                    this.result = 'На ноль делить нельзя';
                } else {
                    this.result = op1 / op2;
                }
            },
            multiply () {
                const {operand1, operand2} = this;
                this.result = operand1 * operand2;
            },
            pow(op1,op2) {
                this.result = Math.pow(op1, op2);
            },
            devideTrunk(op1, op2) {
                if (op2 == 0 ){
                    this.result = 'На ноль делить нельзя';
                } else {
                    this.result = Math.trunc(op1 / op2);
                }
            }
        }
    }

</script>
<style scoped>

</style>