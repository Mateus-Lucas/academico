const professorValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
            value: 10,
            message: 'O máximo de caracteres é 15'
        },
    },

    cpf: {
        required: 'Campo obrigatório',
        minLength: {
            value: 9,
            message: 'Digite 9 caracteres'
        },
        maxLength: {
            value: 9,
            message: 'Digite 9 caracteres'
        }
    },

    matricula: {
        required: 'Campo obrigatório',
        },

    salario: {
        required: 'Campo obrigatório',
        },
    
    email: {
        required: 'Campo obrigatório',
    },

    telefone: {
        required: 'Campo obrigatório',
        },
    
    cep: {
        required: 'Campo obrigatório',
    },

    logradouro: {
        required: 'Campo obrigatório',
        },
    
    complemento: {
        required: 'Campo obrigatório',
    },

    numero: {
        required: 'Campo obrigatório',
        },

    bairro: {
        required: 'Campo obrigatório',
        },
    }

export default professorValidator