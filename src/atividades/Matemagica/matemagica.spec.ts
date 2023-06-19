import { Matemagica } from './matemagica';

describe('Matemagica', () => {
    let calculadora: Matemagica;

    beforeEach(() => {
        calculadora = new Matemagica(5, 2);
    });

    describe('Adição', () => {
        it('deve retornar a soma correta dos operadores', () => {
            expect(calculadora.adicao()).toBe(7);
        });
    });

    describe('Subtração', () => {
        it('deve retornar a diferença correta dos operadores', () => {
            expect(calculadora.subtracao()).toBe(3);
        });
    });

    describe('Divisão', () => {
        it('deve retornar o quociente correto dos operadores', () => {
            expect(calculadora.divisao()).toBe(2.5);
        });

        it('deve lançar um erro ao dividir por zero', () => {
            calculadora.operador2 = 0;
            expect(() => calculadora.divisao()).toThrow('Não é possível dividir por zero.');
        });
    });

    describe('Multiplicação', () => {
        it('deve retornar o produto correto dos operadores', () => {
            expect(calculadora.multiplicacao()).toBe(10);
        });
    });

    describe('Getters e Setters', () => {
        it('deve retornar o valor correto do operador 1', () => {
            expect(calculadora.operador1).toBe(5);
        });

        it('deve retornar o valor correto do operador 2', () => {
            expect(calculadora.operador2).toBe(2);
        });

        it('deve atualizar o valor do operador 1', () => {
            calculadora.operador1 = 8;
            expect(calculadora.operador1).toBe(8);
        });

        it('deve atualizar o valor do operador 2', () => {
            calculadora.operador2 = 3;
            expect(calculadora.operador2).toBe(3);
        });
    });
});