import Pagina from '@/components/Pagina'
import React, { use, useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash3Fill } from 'react-icons/bs'

const index = () => {
  
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    setCursos(getAll())
  }, [])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }

  function excluir(id){
    const itens = getAll()
    console.log(itens)
    itens.splice(id, 1)
    console.log(itens)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    setCursos(itens)
  }


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
          {cursos.map((item,lista) => (
            <tr key={lista}>
              <td><BsTrash3Fill onClick={()=>excluir(lista)} className='text-danger'/></td>
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