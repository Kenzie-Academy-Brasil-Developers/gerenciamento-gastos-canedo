import './style.css'


export const SectionDescription = () => {
  return(
    <section className='containerValue'>
      <h2 className="title1">Descrição</h2>
      <input type="text" placeholder="Digite aqui sua descrição" />
      <p className='title5'>Ex: Compra de roupas</p>
      <h2 className="title1">Valor (R$)</h2>
      <input type="number" placeholder="1" />
      <h2 className="title1">Tipo de valor</h2>
      <select className="title1" name="">
        <option className="title1" value="entrada">Entrada</option>
        <option className="title1" value="despesa">Despesa</option>
      </select>
      <button className="buttonPink">Inserir valor</button> 
    </section>
  )
}