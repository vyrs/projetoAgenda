import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if(telefoneInput.value.length !== 11) {
            alert('tefone precisa ter DDD mais 9 numeros');
            error = true;
        }

        if(validator.isEmpty(nomeInput.value) || validator.isEmpty(sobrenomeInput.value) ) {
            alert('Nome e sobrenome são obrigatórios');
            error = true;
        }

        if(!error) el.submit();
    }
}