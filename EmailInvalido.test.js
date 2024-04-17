const ValidarEmail = require('./ValidarEmail');

describe('EmailInvalido.test', () => {
    let validator;

    beforeEach(() => {
        validator = new ValidarEmail();
    });

    it('Debería retornar un false para que sea un email inválido', () => {
        expect(validator.validate('usuario@example')).toBe(false);
        expect(validator.validate('usuario@example.')).toBe(false);
        expect(validator.validate('usuarioexample.com')).toBe(false);
        expect(validator.validate('usuario@.com')).toBe(false);
        expect(validator.validate('usuario@')).toBe(false);
        expect(validator.validate('usuario')).toBe(false);
        expect(validator.validate('@.com')).toBe(false);
        expect(validator.validate('@')).toBe(false);
        expect(validator.validate('.com')).toBe(false);
    });
});
