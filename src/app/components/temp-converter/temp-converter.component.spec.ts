import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ConvertersService } from "src/app/services/converters.service";
import { TempConverterComponent } from "./temp-converter.component";

describe('TempConverterComponent', () => {

  describe('shallow testing', () => {

    it('can convert from f to c', () => {
      const dummy: ConvertersService = {
        convertToC: (t) => 12,
        convertToF: (t) => 18
      }
      const component = new TempConverterComponent(dummy);
      component.convertToC(212);
      expect(component.convertedTemp).toEqual(12);
    });
  });

  describe('full component testing', () => {

    describe('converting to f', () => {

      let component: TempConverterComponent;
      let inputElement: HTMLInputElement;
      let convertToFButton: HTMLButtonElement;
      let answerSpan: HTMLSpanElement;
      let fixture: ComponentFixture<TempConverterComponent>;

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [TempConverterComponent],
          providers: [ConvertersService]
        });

        fixture = TestBed.createComponent(TempConverterComponent);

        inputElement = fixture.debugElement.query(By.css('[data-temp-converter-value-input]')).nativeElement;
        convertToFButton = fixture.debugElement.query(By.css('[data-temp-converter-convert-to-f-button]')).nativeElement;
        answerSpan = fixture.debugElement.query(By.css('[data-temp-converter-answer-span]')).nativeElement;
      });
      it('are all the elements hooked up', () => {
        expect(inputElement).not.toBeNull();
        expect(convertToFButton).not.toBeNull();
        expect(answerSpan).not.toBeNull();
      });

      // when the user enters 200 in the text box
      // and they click the convert to F button
      // the service is passed the value from the textbox
      // and the response from the service is put in the
      // answer span.

    });
  });

});
