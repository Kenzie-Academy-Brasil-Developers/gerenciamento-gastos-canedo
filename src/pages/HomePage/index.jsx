import { Header } from "../../components/Header"
import { SectionDescription } from "../../components/SectionDescription"
import { SectionResumeFinance } from "../../components/SectionResumeFinance"
import { SectionValue } from "../../components/SectionValue"


export const HomePage = () => {
  return(
    <>
      <Header/>
      <SectionDescription/>
      <SectionResumeFinance/>
      <SectionValue/>
    </>
  )
}