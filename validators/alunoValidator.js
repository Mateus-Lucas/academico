const alunoValidator = {
    nome: {
      required: 'Campo obrigatório',
      minLength: {
        value: 3,
        message: 'Minimo de caracteres é 3'
      },
      maxLength: {
        value: 20,
        message: 'Máximo de caracteres é 20'
      },
      pattern: {
        value: /^[A-Za-z\s]+$/,
        message: 'Digite apenas letras'
      }
    },
    cpf: {
      required: 'Campo obrigatório',
      maxLength: {
        value: 14,
        message: 'Máximo de caracteres é 14'
      },
      minLength: {
        value: 14,
        message: 'Mínimo de caracteres é 14'
      },
      pattern: {
        value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        message: 'Coloque nessa configuração somente com números 000.000.000-00'
      },
    },
    matricula: {
        maxLength: {
            value: 8,
            message: 'Máximo de caracteres é 8'
          },
          minLength: {
            value: 8,
            message: 'Mínimo de caracteres é 8'
          },
      required: 'Campo obrigatório',
      pattern: {
         value: /^[A-Z]{2}\d{6}$/,
         message: 'Coloque nessa configuração XX000000'
        }
    },
    email: {
      required: 'Campo obrigatório',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Email inválido'
      }
    },
    telefone: {
      required: 'Campo obrigatório',
      pattern: {
        value: /^\(\d{2}\) \d{5}-\d{4}$/,
        message: 'Coloque nessa configuração (00) 00000-0000'
      }
    },
    cep: {
      required: 'Campo obrigatório',
      pattern: {
        value: /^\d{5}-\d{3}$/,
        message: 'Coloque nessa configuração 00000-000'
      },
      maxLength: {
        value: 9,
        message: 'Máximo de caracteres é 9'
      },
      minLength: {
        value: 9,
        message: 'Minimo de caracteres é 9'
      }
    },
    complemento: {
      required: 'Campo obrigatório',
    },
    numero: {
      required: 'Campo obrigatório',
      maxLength: {
        value: 2,
        message: 'Apenas dois caracteres'
      }
    },
    bairro: {
      required: 'Campo obrigatório',
    },
  };
  
  export default alunoValidator;
  