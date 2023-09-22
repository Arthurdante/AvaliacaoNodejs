const { describe, expect, it } = require('@jest/globals')
const ServicoExercicio = require("../src/services/calculadora")

describe('Testes da calculadora', () => {

    const servico = new ServicoExercicio()


    it('Somar', () => {
        const result = servico.Somar(1, 2)
      
        expect(result).toBe(3);
    })
    it('Somar/Catch the error', () => {
        const result = () => servico.Somar(1, "a")
      
        expect(result).toThrow("Favor informar números");
    })


    it('Subtrair', () => {
        const result = servico.Subtrair(1, 2)
    
        expect(result).toBe(-1);
    })
    it('Subtrair/Catch the error', () => {
        const result = () => servico.Subtrair(1, "a")
        
        expect(result).toThrow("Favor informar números");
    })


    it('Multiplicar', () => {
        const result = servico.Multiplicar(1, 2)
        
        expect(result).toBe(2);
    })
    it('Multiplicar/Catch the error', () => {
        const result = () => servico.Multiplicar(1, "a")
        
        expect(result).toThrow("Favor informar números");
    })


    it('Dividir', () => {
        const result = servico.Dividir(2, 2)
        
        expect(result).toBe(1);
    })
    it('Dividir/Catch the error', () => {
        expect(() => servico.Dividir(10, 0)).toThrow('Não é possível dividir por 0');
    })
    it('Catch the error2', () => {
        const result = () => servico.Somar(1, "a")
        
        expect(result).toThrow("Favor informar números");
    })

    
    it('Potencia', () => {
        const result = servico.Potencia(2, 2)
        
        expect(result).toBe(4);
    })
    it('Potencia/Catch the error', () => {
        const result = () => servico.Potencia(1, "a")
        
        expect(result).toThrow("Favor informar números");
    })


    it('RaizQuadrada', () => {
        const result = servico.RaizQuadrada(9)
        
        expect(result).toBe(3);
    })
    it('RaizQuadrada/Catch the error', () => {
        const result = () => servico.RaizQuadrada("a")
        
        expect(result).toThrow("Favor informar números");
    })
    it('RaizQuadrada/Catch the error2', () => {
        const result = () => servico.RaizQuadrada(-2)
        
        expect(result).toThrow("A raiz quadrada de um número negativo não é definida em números reais.");
    })
})