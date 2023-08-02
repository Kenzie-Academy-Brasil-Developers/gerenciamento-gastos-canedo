import { ResumeCards } from './ResumeCards'
import './style.css'


export const SectionResumeFinance = () => {
  return(
    <section className='containerResume'>
      <h2 className="title2">Resumo Financeiro</h2>
      <div className='containerResumeCards'>
        <ResumeCards/>
      </div>
    </section>
  )
}
