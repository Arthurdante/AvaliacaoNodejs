class ServicoExercicio {
    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 + num2
    
        return resultado;
    }
    Subtrair(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 - num2
        return resultado
    }
    Multiplicar(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }
        const resultado = num1 * num2
    
        return resultado;
    }
    Dividir(num1, num2) {
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar números")
        }else if(num2 == 0){
            throw new Error("Não é possível dividir por 0")
        }
        const resultado = num1 / num2
        return resultado
    }
    Potencia = (num1, num2) => {
        if (isNaN(num1) || isNaN(num2)) {
          throw new Error('Favor informar números')
        }
        const resultado = Math.pow(num1, num2)
        return resultado
    };
    RaizQuadrada = (num1) => {
        if (isNaN(num1)) {
          throw new Error('Favor informar números')
        }
        if (num1 < 0) {
          throw new Error('A raiz quadrada de um número negativo não é definida em números reais.')
        }
        const resultado = Math.sqrt(num1)
        return resultado
    };
}
module.exports = ServicoExercicio