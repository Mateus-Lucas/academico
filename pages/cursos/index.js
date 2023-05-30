import Pagina from '@/components/Pagina'
import React, { use, useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import Link from 'next/link'


const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro')) {
      const itens = getAll()
      console.log(itens)
      itens.splice(id, 1)
      console.log(itens)
      window.localStorage.setItem('cursos', JSON.stringify(cursos))
      setCursos(itens)
    }
  }

  console.log(cursos);

  return (
    <Pagina titulo='Cursos'>
      <Button href='/cursos/form' className='mb-2' variant="primary">Novo
        <AiOutlinePlus />
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Opções</th>
            <th>Curso</th>
            <th>Duração</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item, lista) => (
            <tr key={lista}>
              <td>
                <Link href={'/cursos/' + lista}>
                  <BiEditAlt className='me-3' style={{ cursor: 'pointer' }} />
                </Link>
                <BsTrash3Fill style={{ cursor: 'pointer' }}
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