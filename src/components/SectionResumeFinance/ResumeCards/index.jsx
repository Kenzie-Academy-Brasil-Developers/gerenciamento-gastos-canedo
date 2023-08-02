import './style.css'


export const ResumeCards = () => {
  return(
        <div className='containerCard'>
          <div className='div-primary'>
            <h2 className="title2">Salario - Mes Dezembro</h2>
            <p className="title1">Entrada</p>
          </div>
          <div className='div-secundary'>
            <p className="title1">R$ 6.660,00</p>
            <button className="buttonRemove">Excluir</button>
          </div>
        </div>
  )
}