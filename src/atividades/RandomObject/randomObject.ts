// Declaração da classe Randomizer
export class Randomizer {

    // Declaração das propriedades privadas (arrayOfObjects, numberOjects)
    private arrayOfObjects: any[];
    private numberOjects: number;
  
    // Construtor da classe, recebe um array de objetos e a quantidade de objetos aleatórios desejados
    constructor(array: any[], numberOfRandomObjects: number) {
      // Atribui os valores recebidos às propriedades da classe correspondentes
      this.arrayOfObjects = array;
      this.numberOjects = numberOfRandomObjects;
    }
  
    // Getter para a propriedade arrayOfObjects
    public get array(): any[] {
      return this.arrayOfObjects;
    }
  
    // Setter para a propriedade arrayOfObjects
    public set array(value: any[]) {
      this.arrayOfObjects = value;
    }
  
    // Getter para a propriedade numberOjects
    public get numberOfRandomObjects(): number {
      return this.numberOjects;
    }
  
    // Setter para a propriedade numberOjects
    public set numberOfRandomObjects(value: number) {
      this.numberOjects = value;
    }
  
    // Método público para obter um array com objetos aleatórios
    public getRandomObjects(): any[] {
      // Cria um array vazio para armazenar os objetos aleatórios gerados
      let result: any = [];
  
      // Executa o loop enquanto o tamanho do array resultante for menor que a quantidade de objetos aleatórios desejada
      while (result.length < this.numberOjects) {
        // Gera um índice aleatório dentro do intervalo do array original
        let randomIndex = Math.floor(Math.random() * this.arrayOfObjects.length);
  
        // Seleciona um objeto aleatório do array original
        let randomObject: any = this.arrayOfObjects[randomIndex];
  
        // Verifica se o objeto já existe no array resultante
        if (!result.includes(randomObject)) {
          // Se o objeto ainda não existe no array resultante, adiciona-o a ele
          result.push(randomObject);
        }
      }
  
      // Retorna o array com os objetos aleatórios gerados
      return result;
    }
  }
  