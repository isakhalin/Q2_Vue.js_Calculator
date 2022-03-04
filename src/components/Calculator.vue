<template>
    <div>
        <div class="display">
            <input v-model.lazy.number = "operand1" type="number"/>
            <input v-model.lazy.number = "operand2" type="number"/>
            = {{result}}
        </div>
        <div class="keyboard">
            <button @click="result = operand1 + operand2">+</button>
            <button @click="result = operand1 - operand2">-</button>
            <button @click="devide(operand1, operand2)">/</button>
            <button @click="multiply">*</button>
            <button @click="pow(operand1,operand2)">^</button>
            <button @click="devideTrunk(operand1, operand2)">//</button>
        </div>
    </div>     
</template>
<script>
    export default {
        name: 'MyCalculato r',
        data() {
            return {
                operand1: 0,
                operand2: 0,
                result: 0
            }
        },
        methods: {
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