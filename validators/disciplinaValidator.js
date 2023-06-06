const disciplinaValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
            value: 20,
            message: 'O máximo de caracteres é 20'
        },    
    },
    curso: {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo de caracteres é 3'
        },
        maxLength: {
            value: 20,
            message: 'O máximo de caracteres é 20'
        },    
    }
}

export default disciplinaValidator