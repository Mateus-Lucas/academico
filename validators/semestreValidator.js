const semestreValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
            value: 30,
            message: 'O máximo de caracteres é 10'
        },
        pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Digite apenas letras'
        }
    },

    inicio: {
        required: 'Campo obrigatório',
        minLength: {
            value: 7,
            message: 'O minimo de caracteres é 7'
        },
        maxLength: {
            value: 7,
            message: 'O máximo de caracteres é 7'
        },
        pattern: {
            value: /^(0[1-9]|1[0-2])\/\d{4}$/,
            message: 'Digite um mês e ano válido no formato MM/AAAA',
        },
    },

    fim: {
        required: 'Campo obrigatório',
        minLength: {
            value: 7,
            message: 'O minimo de caracteres é 7'
        },
        maxLength: {
            value: 7,
            message: 'O máximo de caracteres é 7'
        },
        pattern: {
            value: /^(0[1-9]|1[0-2])\/\d{4}$/,
            message: 'Digite um mês e ano válido no formato MM/AAAA',
        },
    }
}

export default semestreValidator