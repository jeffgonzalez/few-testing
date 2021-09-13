
export class ConvertersService {
  convertToC(tempInF: number): number {
    return (tempInF - 32) * (5.0 / 9.0);
  }
  convertToF(tempInC: number): number {
    return (tempInC * 9 / 5) + 32;
  }



}
