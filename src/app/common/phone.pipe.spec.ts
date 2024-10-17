import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  it('create an instance', () => {
    const pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });

  it('parse corrently phone number', () => {
    const pipe = new PhonePipe();
    expect(pipe.transform("0584214527")).toBe("05 84 21 45 27");
    });
});
