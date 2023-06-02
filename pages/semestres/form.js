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

    const { register, handleSubmit } = useForm()
    const { push } = useRouter()

    function salvar(dados) {

        axios.post('/api/semestres', dados)
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
                        <Button variant="success" onClick={handleSubmit(salvar)}>
                            <HiCheck/>
                            Salvar
                        </Button>
                    </Link>
                    <Link href='/semestres/'>
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