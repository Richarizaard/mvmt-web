import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'

const Events = () => {
  return (
    <PageIntroCard
      typedStrings={['Events']}
      desc={`Take a look below to stay informed of meetings, events, activities, and key dates.  You can sign up for many of these through our Facebook group page.  If you don't use Facebook, don't worry about signing up - you're more than welcome to join us!  Send us a message if you have any questions.`}
      img={home}
    />
  )
}

export default Events
