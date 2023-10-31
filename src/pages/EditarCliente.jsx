import React from 'react'

export async function loader({ params }) {
    console.log(params)
    return null
}

function EditarCliente() {
  return (
    <div>
      <p>Editar Cliente</p>
    </div>
  )
}

export default EditarCliente
