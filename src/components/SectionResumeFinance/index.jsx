import { ResumeCards } from './ResumeCards'
import './style.css'


export const SectionResumeFinance = ({ noteList, removeNote }) => {
  return(
    <section className='containerResume'>
      <h2 className="title2">Resumo Financeiro</h2>
      <div className='containerResumeCards'>
        {noteList.map((note) => (
          <ResumeCards key={note.id} id={note.id} title={note.title} number={note.number} option={note.option} removeNote={removeNote}/>
        ))}
      </div>
    </section>
  )
}
