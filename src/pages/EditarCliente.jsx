import React from 'react'
import { obtenerCliente } from '../data/Clientes'

export async function loader({ params }) {
    const cliente = await obtenerCliente(params.clienteId)
    if(Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No hay Resultados'
        })
    }
    return cliente
}

function EditarCliente() {
  return (
    <div>
      <p>Editar Cliente</p>
    </div>
  )
}

export default EditarCliente
