import { Randomizer } from "./randomObject";
import { describe, it, expect } from "@jest/globals";

describe('Randomizer', () => {
  it('deve criar uma instância do randomizer', () => {
    const randomizer = new Randomizer([1,2,3,4,5], 3);

    expect(randomizer).toBeInstanceOf(Randomizer);
    expect(randomizer.array).toEqual([1,2,3,4,5]);
    expect(randomizer.numberOfRandomObjects).toEqual(3);
  });

  it('deve definir corretamente a propriedade array', () => {
    const randomizer = new Randomizer([1,2,3,4,5], 3);
    randomizer.array = [6,7,8,9,10];

    expect(randomizer.array).toEqual([6,7,8,9,10]);
  });

  it('deve definir corretamente a propriedade numberOfRandomObjects', () => {
    const randomizer = new Randomizer([1,2,3,4,5], 3);
    randomizer.numberOfRandomObjects = 5;

    expect(randomizer.numberOfRandomObjects).toEqual(5);
  });

  it('deve gerar um array com objetos aleatórios', () => {
    const arr = [{name: 'John'}, {name: 'Paul'}, {name: 'George'}, {name: 'Ringo'}];
    const randomizer = new Randomizer(arr, 2);
    const result = randomizer.getRandomObjects();

    expect(result.length).toEqual(2);
    expect(arr).toContain(result[0]);
    expect(arr).toContain(result[1]);
    expect(result[0]).not.toEqual(result[1]);
  });
});


