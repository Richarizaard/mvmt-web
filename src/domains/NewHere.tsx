import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'
import DropdownText from 'components/DropdownText'
import MvmtFooter from 'components/MvmtFooter'
import MvmtHeader from 'components/MvmtHeader'

const faq = [
  {
    title: 'What should I wear?',
    text: `You'll see people wearing everything from casual to business casual. You won't feel out of place no matter what you wear. We do, however, believe God deserves respect and we ask people to dress respectfully.`,
  },
  {
    title: 'Where do I go?',
    text: 'When you arrive, feel free to park anywhere you can find a spot. All covered spots and even the ones with a sign in front of them are open to all. Enter through the glass double doors on the north side of the building and you should see some people inside who will greet you and guide you to the sanctuary.',
  },
  {
    title: 'What is a service like?',
    text: 'A typical Sunday service goes for 75-90 minutes. We open with a few songs of praise (of the contemporary variety), followed by a sermon that aims to explain a passage in the Bible and its relevance. There are some traditional elements in between such as prayer, corporate reading, and sometimes communion.',
  },
  {
    title: 'Will I be asked to do anything?',
    text: `If you're asking if we'll make you stand and introduce yourself or something, then no, we would never embarass you like that. Our services are participatory, however, so everyone will be asked to stand at certain points and encouraged to sing, but only as you are able. There is a time for offering when a basket is passed around, but this is mainly meant for established members and as a visitor, you should not feel obliged at all. There's no expectation there.`,
  },
  {
    title:
      'Are there any "rules" that I need to know if I have never come to church before?',
    text: `Not really, other than being a decent human being. There will be people to welcome and direct you when you arrive, and during the service, the presider (basically the emcee of the service) will give instructions for each part. So while some of it may be new/strange, we hope you won't find it confusing.`,
  },
  {
    title: `Do you have childcare/children's ministry?`,
    text: `Yes, we have children's ministries for children from age 1 through 5th grade, and a youth ministry that spans 6th graders through seniors in high school. When you arrive, any of our welcoming team members can guide you to where you can check in your child(ren).`,
  },
  {
    title: 'What kind of church are you?',
    text: `Technically speaking, we're a Presbyterian church. But if that means nothing to you, we'll simply say that we're a church that believes Jesus Christ is the hope of the world and believes the Bible to be absolute truth. You won't find us making too big a deal about labels and such. We're just normal people trying to live a life of faith. If you want to know more about our beliefs, see our <a href="/about-us" class="text-sky-500">statement of faith.</a>`,
  },
]

const NewHere = () => {
  return (
    <>
      <MvmtHeader />
      <PageIntroCard
        typedStrings={['New here?']}
        img={home}
        desc={
          "We're looking forward to meeting you! We tried to think of everything you'd need to know, but if we missed anything, please don't hesitate to ask.\n\nWe would love to help you with whatever you need and hope you enjoy your visit!"
        }
      />
      <div className="max-w-[900px]">
        {faq.map((qa, idx) => {
          return <DropdownText key={idx} title={qa.title} text={qa.text} />
        })}
      </div>
      <MvmtFooter />
    </>
  )
}

export default NewHere
