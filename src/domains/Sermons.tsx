import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'
import MvmtHeader from 'components/MvmtHeader'
import MvmtFooter from 'components/MvmtFooter'

const Sermons = () => {
  return (
    <>
      <MvmtHeader />
      <PageIntroCard typedStrings={['Sermons']} img={home} />
      <MvmtFooter />
    </>
  )
}

export default Sermons
