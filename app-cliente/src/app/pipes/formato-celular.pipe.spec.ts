import { FormatoCelularPipe } from './formato-celular.pipe';

describe('FormatoCelularPipe', () => {
  let pipe: FormatoCelularPipe;

  beforeEach(() => {
    pipe = new FormatoCelularPipe();
  });

  it('crea una instancia', () => {
    expect(pipe).toBeTruthy();
  });

  it('debe formatear el número de teléfono correctamente', () => {
    const telefono = '56912345678';
    const resultado = pipe.transform(telefono);
    expect(resultado).toBe('+569 1234 5678');
  });

  it('debe manejar números de teléfono no estándar', () => {
    const telefono = '1234567890';
    const resultado = pipe.transform(telefono);
    expect(resultado).toBe('1234 5678 90');
  });

  it('debe devolver el número sin cambios si no coincide con el formato esperado', () => {
    const telefono = '123';
    const resultado = pipe.transform(telefono);
    expect(resultado).toBe('123');
  });
});
