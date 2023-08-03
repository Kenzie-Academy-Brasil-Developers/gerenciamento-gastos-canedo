import { useState } from 'react'
import './style.css'
import { Input } from '../Input'

export const SectionDescription = ({addNote}) => {
  const [title, setTitle] = useState("")
  const [number, setNumber] = useState("")
  const [option, setOption] = useState("")

  const submit = (event) => {
    event.preventDefault()
    addNote({title,number,option})
    setTitle("")
    setNumber("")
    setOption("")
  }
  


  return(
    <form className='containerValue' onSubmit={submit}>
      <Input
            label="Descrição"
            placeholder="Digite aqui sua descrição"
            type="text"
            id="title"
            value={title}
            setValue={setTitle}
      />
      <p className='title5'>Ex: Compra de roupas</p>
      <Input
            label="Valor (R$) "
            placeholder="1"
            type="number"
            id="number"
            value={number}
            setValue={setNumber}
      />
      <h2 className="title1" >Tipo de valor</h2>
      <select className="title1" name="" onChange={(event) => setOption(event.target.value)}>
        <option className="title1" value="Entrada">Entrada</option>
        <option className="title1" value="Despesa">Despesa</option>
      </select>
      <button className="buttonPink">Inserir valor</button> 
    </form>
  )
}
