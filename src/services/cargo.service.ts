export class CargoService {
  calcBays(cargo: string) {
    const toNumbers = cargo.split(",").map(Number);
    const sum = toNumbers.reduce((prev, curr) => prev + curr, 0);

    return Math.ceil(sum / 10);
  }
}
export const cargoService = new CargoService();
