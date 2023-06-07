import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import professorValidator from '@/validators/professorValidator'

const form = () => {

    const { register, handleSubmit, formState: {errors} } = useForm()
    const { push } = useRouter()

    function salvar(dados) {

        axios.post('/api/professores', dados)
        push('/professores')

    }

    return (
        <Pagina titulo='Professores'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} isValid={!errors.nome} type="text" {...register('nome', professorValidator.nome)} />
                    {
                        errors.nome &&
                        <p className='text-danger'>{errors.nome.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='cpf'>
                    <Form.Label >CPF: </Form.Label>
                    <Form.Control isInvalid={errors.cpf} isValid={!errors.cpf} type="text" {...register('cpf', professorValidator.cpf)} />
                    {
                        errors.cpf &&
                        <p className='text-danger'>{errors.cpf.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='matricula'>
                    <Form.Label >Matrícula: </Form.Label>
                    <Form.Control isInvalid={errors.matricula} isValid={!errors.matricula} type="text" {...register('matricula', professorValidator.matricula)} />
                    {
                        errors.matricula &&
                        <p className='text-danger'>{errors.matricula.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='salario'>
                    <Form.Label >Salário: </Form.Label>
                    <Form.Control isInvalid={errors.salario} isValid={!errors.salario} type="text" {...register('salario', professorValidator.salario)} />
                    {
                        errors.salario &&
                        <p className='text-danger'>{errors.salario.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='email'>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} isValid={!errors.email} type="text" {...register('email', professorValidator.email)} />
                    {
                        errors.email &&
                        <p className='text-danger'>{errors.email.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='telefone'>
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control isInvalid={errors.telefone} isValid={!errors.telefone} type="text" {...register('telefone', professorValidator.telefone)} />
                    {
                        errors.telefone &&
                        <p className='text-danger'>{errors.telefone.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='cep'>
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control isInvalid={errors.cep} isValid={!errors.cep} type="text" {...register('cep', professorValidator.cep)} />
                    {
                        errors.cep &&
                        <p className='text-danger'>{errors.cep.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='logradouro'>
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control isInvalid={errors.logradouro} isValid={!errors.logradouro} type="text" {...register('logradouro', professorValidator.logradouro)} />
                    {
                        errors.logradouro &&
                        <p className='text-danger'>{errors.logradouro.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='complemento'>
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control isInvalid={errors.complemento} isValid={!errors.complemento} type="text" {...register('complemento', professorValidator.complemento)} />
                    {
                        errors.complemento &&
                        <p className='text-danger'>{errors.complemento.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='numero'>
                    <Form.Label>Número: </Form.Label>
                    <Form.Control isInvalid={errors.numero} isValid={!errors.numero} type="text" {...register('numero', professorValidator.numero)} />
                    {
                        errors.numero &&
                        <p className='text-danger'>{errors.numero.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId='bairro'>
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control isInvalid={errors.bairro} isValid={!errors.bairro} type="text" {...register('bairro', professorValidator.bairro)} />
                    {
                        errors.bairro &&
                        <p className='text-danger'>{errors.bairro.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Link href='/professores/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <HiCheck />
                            Salvar
                        </Button>
                    </Link>
                    <Link href='/professores/'>
                        <Button variant='danger'>
                            <HiArrowNarrowLeft />
                            Voltar
                        </Button>
                    </Link>
                </div>

            </Form>
        </Pagina>

    )
}

export default form