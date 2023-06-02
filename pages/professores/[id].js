import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { HiCheck } from 'react-icons/hi'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/professores/' + query.id).then(resultado => {
                const aluno = resultado.data

                for (let atributo in aluno) {
                    setValue(atributo, aluno[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/professores/' + query.id, dados)
        push('/professores')
    }

    return (
        <Pagina titulo='Professores'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='cpf'>
                    <Form.Label >CPF: </Form.Label>
                    <Form.Control type="text" {...register('cpf')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='matricula'>
                    <Form.Label >Matrícula: </Form.Label>
                    <Form.Control type="text" {...register('matricula')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId='salario'>
                    <Form.Label >Salário: </Form.Label>
                    <Form.Control type="text" {...register('salario')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='email'>
                    <Form.Label >Email: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='telefone'>
                    <Form.Label >Telefone: </Form.Label>
                    <Form.Control type="text" {...register('telefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='cep'>
                    <Form.Label >CEP: </Form.Label>
                    <Form.Control type="text" {...register('cep')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='logradouro'>
                    <Form.Label >Logradouro: </Form.Label>
                    <Form.Control type="text" {...register('logradouro')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='complemento'>
                    <Form.Label >Complemento: </Form.Label>
                    <Form.Control type="text" {...register('complemento')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='numero'>
                    <Form.Label >Número: </Form.Label>
                    <Form.Control type="text" {...register('numero')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='bairro'>
                    <Form.Label >Bairro: </Form.Label>
                    <Form.Control type="text" {...register('bairro')} />
                </Form.Group>

                <div className='text-center'>
                    <Link href='/professores/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(alterar)}>
                            <HiCheck/>
                            Alterar
                        </Button>
                    </Link>
                    <Link href='/professores/'>
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