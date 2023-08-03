import './style.css'

export const SectionValue = ({ noteList}) => {
  const totalValue = noteList.reduce((prevValue, note) => {
    return prevValue + parseFloat(note.number)
  },0)
  
  console.log(totalValue)
  return(
    <section className='containerSectionValue'>
      <div className=''>
        <h2 className="title2">Valor total:</h2>
      <p className="title1">O valor se refere ao saldo</p>
      </div>
        <p className="title3">R$ {totalValue}</p>
    </section>
  )
}