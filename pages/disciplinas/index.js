import Pagina from '@/components/Pagina'
import React, { use, useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'


const index = () => {

  const [disciplinas, setDisciplinas] = useState([])

  useEffect(() => {
  }, [])


  return (
    <Pagina titulo='Disciplinas'>
      <Button href='/disciplinas/form' className='mb-2' variant="primary">Novo
        <AiOutlinePlus />
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Opções</th>
            <th>Disciplina</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item, lista) => (
            <tr key={lista}>
              <td>
                <Link href={'/disciplinas/' + lista}>
                  <BiEditAlt className='me-3' style={{ disciplinar: 'pointer' }} />
                </Link>
                <BsTrash3Fill style={{ disciplinar: 'pointer' }}
                  onClick={() => excluir(lista)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  )
}

export default index