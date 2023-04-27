import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'
import MvmtFooter from 'components/MvmtFooter'
import MvmtHeader from 'components/MvmtHeader'

const ContactUs = () => {
  return (
    <>
      <MvmtHeader />
      <PageIntroCard
        typedStrings={['Contact us']}
        desc="Hey there! Do you have a question? Feedback for us? Maybe you have a prayer request? Please fill out the form below and we will get back with you asap."
        img={home}
      />
      <MvmtFooter />
    </>
  )
}

export default ContactUs
