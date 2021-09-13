import { ConvertersService } from "./converters.service";

describe('ConvertersService', () => {

  describe('converting to F', () => {
    it('can convert freezing C to F', () => {
      // Arrange - Given
      const service = new ConvertersService();
      const tempInC = 0;
      // Act - When
      const tempInF: number = service.convertToF(tempInC);

      // Assert - Then
      expect(tempInF).toEqual(32);
    });

    it('can convert from boiling in C to F', () => {
      const service = new ConvertersService();
      const tempInC = 100;

      const tempInF = service.convertToF(tempInC);

      expect(tempInF).toBe(212);
    });

  });
  describe('convert to C', () => {

    it('can convert from freezing F to C', () => {
      const service = new ConvertersService();
      const tempInF = 32;

      const tempInC: number = service.convertToC(tempInF);

      expect(tempInC).toBe(0);

    });
  });
});
