const ValidarEmail = require('./ValidarEmail');

describe('EmailValido.test', () => {
    let validator;

    beforeEach(() => {
        validator = new ValidarEmail();
    });

    it('Debería retornar un true para que sea un email válido', () => {
        expect(validator.validate('usuario@example.com')).toBe(true);
    });
});