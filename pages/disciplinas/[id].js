import Pagina from '@/components/Pagina'
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
            const cursos = JSON.parse(window.localStorage.getItem('cursos'))
            const curso = cursos[query.id]

            for (let atributo in curso) {
                setValue(atributo, curso[atributo])
            }
        }
    }, [query.id])

    function alterar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.splice(query.id, 1, dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos/')
    }

    return (
        <Pagina titulo='Formulário'>
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
                            Salvar
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