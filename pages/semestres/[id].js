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

            axios.get('/api/semestres/' + query.id).then(resultado => {
                const semestre = resultado.data

                for (let atributo in semestre) {
                    setValue(atributo, semestre[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/semestres/' + query.id, dados)
        push('/semestres')
    }

    return (
        <Pagina titulo='Semestres'>
            <Form>
                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='data_inicio'>
                    <Form.Label >Inicio: </Form.Label>
                    <Form.Control type="text" {...register('data_inicio')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId='data_fim'>
                    <Form.Label >Fim: </Form.Label>
                    <Form.Control type="text" {...register('data_fim')} />
                </Form.Group>

                <div className='text-center'>
                    <Link href='/semestres/' className='me-3'>
                        <Button variant="success" onClick={handleSubmit(alterar)}>
                            <HiCheck />
                            Alterar
                        </Button>
                    </Link>
                    <Link href='/semestres/'>
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