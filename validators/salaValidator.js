const salaValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLenght: {
            value: 2,
            message: 'Minimo de caracteres é 2'
        },
        maxLength: {
            value: 20,
            message: 'Máximo de caracteres é 10'
        },
    },

    capacidade: {
        required: 'Campo obrigatório',
        maxLength: {
            value: 3,
            message: 'Digite no máximo 3 caracteres'
        },
        pattern: {
            value: /^[0-9]+$/,
            message: 'Digite apenas números'
        }
            
    },

    tipo: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'Digite no minimo 3 caracteres'
        },
        maxLength: {
            value: 20,
            message: 'Digite no máximo 20 caracteres'
        },
        pattern: {
            value: /[A-Za-z\s]+$/,
            message: 'Digite apenas letras'
        }
    }

}

export default salaValidator