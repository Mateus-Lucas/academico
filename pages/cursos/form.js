import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const form = () => {

    const { register, handleSubmit } = useForm()
    const router = useRouter()

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        router.push('/cursos/')
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

                <Link href='/cursos/'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        Salvar
                    </Button>
                </Link>
            </Form>
        </Pagina>

    )
}

export default form