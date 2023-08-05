import { Fragment } from 'react'
import './style.css'
import { Header } from '../Header'
import { SectionDescription } from '../SectionDescription'
import { SectionResumeFinance } from '../SectionResumeFinance'
import { SectionValue } from '../SectionValue'
import { useState } from 'react'

export const TodoSection = () => {
  const [noteList, setNoteList] = useState([])

  const addNote = (formData) => {
     const newNote = { ...formData, id: crypto.randomUUID() }
     setNoteList([...noteList, newNote])
  }
  
  const removeNote = (removeId) => {
     const newNoteList = noteList.filter((note) => note.id !== removeId)
     setNoteList(newNoteList)
  }
  return(
    <Fragment>
      <Header/>
      <section className="sectionContainer">
        <div className="sectionPrimary">
          <SectionDescription addNote={addNote}/>
          <SectionValue noteList={noteList}/>
        </div>
        <div className="sectionSecundary">
          <SectionResumeFinance noteList={noteList} removeNote={removeNote}/>
        </div>
      </section>
    </Fragment>
  )
}