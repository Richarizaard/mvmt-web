import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'

const Ministries = () => {
  return (
    <PageIntroCard
      typedStrings={['Serve']}
      desc={`At Movement, we see serving as a way to build the church as well as an opportunity for growth and discipleship.`}
      img={home}
    />
  )
}

export default Ministries
