import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'

const Missions = () => {
  return (
    <PageIntroCard
      typedStrings={['Mission Partnerships']}
      desc={`Go therefore and make disciples of all nations,
baptizing them in the name of the Father and of the Son and of the Holy Spirit,
teaching them to observe all that I have commanded you.
And behold, I am with you always, to the end of the age.
- Matthew 28:19-20`}
      img={home}
    />
  )
}

export default Missions
