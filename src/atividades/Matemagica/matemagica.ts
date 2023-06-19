export class Matemagica {
    private _operador1: number;
    private _operador2: number;
  
    constructor(operador1: number, operador2: number) {
      this._operador1 = operador1;
      this._operador2 = operador2;
    }
  
    // Métodos de cálculo
    public adicao(): number {
      return this._operador1 + this._operador2;
    }
  
    public subtracao(): number {
      return this._operador1 - this._operador2;
    }
  
    public divisao(): number {
      if (this._operador2 === 0 || this._operador1 === 0) {
        throw new Error("Não é possível dividir por zero.");
      }
      return this._operador1 / this._operador2;
    }
  
    public multiplicacao(): number {
      return this._operador1 * this._operador2;
    }
  
    // Getters e Setters
    public get operador1(): number {
      return this._operador1;
    }
  
    public set operador1(valor: number) {
      this._operador1 = valor;
    }
  
    public get operador2(): number {
      return this._operador2;
    }
  
    public set operador2(valor: number) {
      this._operador2 = valor;
    }
  }
  
  // Exemplo de uso da classe Matemagica
  const calculadora = new Matemagica(5, 2);
  console.log(calculadora.adicao()); // Saída: 7
  console.log(calculadora.subtracao()); // Saída: 3
  console.log(calculadora.divisao()); // Saída: 2.5
  console.log(calculadora.multiplicacao()); // Saída: 10
  
  calculadora.operador1 = 8;
  calculadora.operador2 = 3;
  console.log(calculadora.adicao()); // Saída: 11
  console.log(calculadora.subtracao()); // Saída: 5
  console.log(calculadora.divisao()); // Saída: 2.6666666666666665
  console.log(calculadora.multiplicacao()); // Saída: 24