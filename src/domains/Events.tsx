import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'
import MvmtHeader from 'components/MvmtHeader'
import MvmtFooter from 'components/MvmtFooter'

const Events = () => {
  return (
    <>
      <MvmtHeader />
      <PageIntroCard
        typedStrings={['Events']}
        desc={`Take a look below to stay informed of meetings, events, activities, and key dates.\n\nYou can sign up for many of these through our Facebook group page.  If you don't use Facebook, don't worry about signing up - you're more than welcome to join us!  Send us a message if you have any questions.`}
        img={home}
      />
      <MvmtFooter />
    </>
  )
}

export default Events
