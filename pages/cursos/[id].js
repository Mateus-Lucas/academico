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

            axios.get('/api/cursos/' + query.id).then(resultado => {
                const curso = resultado.data

                for (let atributo in curso) {
                    setValue(atributo, curso[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/cursos/' + query.id, dados)
        push('/cursos')
    }

    return (
        <Pagina titulo='Cursos'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='duracao'>
                    <Form.Label >Duração: </Form.Label>
                    <Form.Control type="text" {...register('duracao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='modalidade'>
                    <Form.Label >Modalidade: </Form.Label>
                    <Form.Control type="text" {...register('modalidade')} />
                </Form.Group>

                <div className='text-center'>
                    <Link href='/cursos/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(alterar)}>
                            <HiCheck />
                            Alterar
                        </Button>
                    </Link>
                    <Link href='/cursos/'>
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