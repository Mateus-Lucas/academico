import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const form = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const { push } = useRouter()

    function salvar(dados) {

        axios.post('/api/cursos', dados)
       push('/cursos')

    }

    const validacaoNome = {
        required: 'Campo obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo é 3'
        },
        maxLenght: {
            value: 10,
            message: 'O máximo é 10'
        },
    }

    const validacaoDuracao = {
        required: 'Campo obrigatório',
        maxLength: {
            value: 3,
            message: 'O máximo é2'
        },
        min: {
            value: 2.5,
            message: 'O valor mínimo é 2.5'
        },
        max: {
            value: 10,
            message: 'O valor é máximo é 10'
        },
    }

    const validacaoModalidade = {
        required: 'Campo obrigatório',
        maxLenght: {
            value: 10,
            message: 'O máximo é 10'
        },
    }

    return (
        <Pagina titulo='Cursos'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome', validacaoNome)} />
                    {
                        errors.nome && 
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='duracao'>
                    <Form.Label >Duração: </Form.Label>
                    <Form.Control type="text" {...register('duracao', validacaoDuracao)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='modalidade'>
                    <Form.Label >Modalidade: </Form.Label>
                    <Form.Control type="text" {...register('modalidade', validacaoModalidade)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/cursos/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <HiCheck/>
                            Salvar
                        </Button>
                    </Link>
                    <Link href='/cursos/'>
                        <Button variant='danger'>
                            <HiArrowNarrowLeft/>
                            Voltar
                        </Button>
                    </Link>
                </div>

            </Form>
        </Pagina>

    )
}

export default form