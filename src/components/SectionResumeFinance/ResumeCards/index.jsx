import './style.css'


export const ResumeCards = ({id, title, option, number, removeNote}) => {
  return(
        <div className='containerCard'>
          <div className='div-primary'>
            <h2 className="title2">{title}</h2>
            <p className="title1">{option}</p>
          </div>
          <div className='div-secundary'>
            <p className="title1">R$ {number}</p>
            <button className="buttonRemove" onClick={() => removeNote(id)}>Excluir</button>
          </div>
        </div>
  )
}