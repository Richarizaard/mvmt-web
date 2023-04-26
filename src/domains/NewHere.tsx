import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'

const NewHere = () => {
  return (
    <PageIntroCard
      typedStrings={['New here?']}
      img={home}
      desc={
        "We're looking forward to meeting you! We tried to think of everything you'd need to know, but if we missed anything, please don't hesitate to ask.\n\nWe would love to help you with whatever you need and hope you enjoy your visit!"
      }
    />
  )
}

export default NewHere
