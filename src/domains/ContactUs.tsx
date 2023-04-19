import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'

const ContactUs = () => {
  return (
    <PageIntroCard
      typedStrings={['Contact Us']}
      desc="Hey there! Do you have a question? Feedback for us? Maybe you have a prayer request? Please fill out the form below and we will get back with you asap."
      img={home}
    />
  )
}

export default ContactUs
