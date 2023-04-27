import { useNavigate, Link } from 'react-router-dom'

import PageDetailsCard from 'components/PageDetailsCard'
import PageIntroCard from 'components/PageIntroCard'

import home from 'assets/home.png'
import lifeGroup from 'assets/lifeGroup.jpeg'
import serving from 'assets/serving.jpeg'
import outreach from 'assets/outreach.jpeg'
import FeatureCard from 'components/FeatureCard'
import MvmtFooter from 'components/MvmtFooter'
import MvmtHeader from 'components/MvmtHeader'

const Homepage = () => {
  const nav = useNavigate()

  return (
    <>
      <MvmtHeader />
      <PageIntroCard
        title={'Welcome to'}
        typedStrings={['Movement']}
        desc={`We are a Christ-centered community committed to loving Jesus, our city, and the world. Our hope is that you and your family will find a place here to grow and be involved in God's work.`}
        img={home}
        ctaButtons
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,auto))]">
        <FeatureCard
          text={`11:00 AM - In person and online`}
          title="Sunday worship"
          svg={'cross'}
          to={'https://www.youtube.com/@MovementMinistry'}
          openNewTab
        />
        <FeatureCard
          text={`Are you new or planning to visit soon? We have some answers to questions you might be wondering!`}
          title="New here?"
          svg={'profile'}
          to={'/new-here'}
        />
        <FeatureCard
          text={`To raise fruitful and impactful followers of Jesus Christ.  `}
          title="Why we exist"
          svg={'bible'}
          to={'/about-us'}
        />
        <FeatureCard
          text={`Questions or feedback? Drop us a note!`}
          title="Contact us"
          svg={'contactUs'}
          to={'/contact-us'}
        />
      </div>
      <PageDetailsCard
        title={'Life Groups'}
        desc={`They're the heartbeat of our community. Groups meet weekly to study the Bible, build relationships, and encourage one another to follow Jesus.`}
        img={lifeGroup}
        ctaButtons={true}
        onClick={() => {}}
        alignment={'right'}
      />
      <PageDetailsCard
        title={'Serving Opportunities'}
        desc={`Serving is key to spiritual growth, not to mention a great way to connect with others in the church.  Learn more about opportunities.`}
        img={serving}
        ctaButtons={true}
        onClick={() => nav('/ministries')}
        alignment={'left'}
      />
      <PageDetailsCard
        title={'Missions & Outreach'}
        desc={`Impacting the world is our goal. Whether it's through supporting missionaries or taking short-term trips, we're excited to take part in God's work.`}
        img={outreach}
        ctaButtons={true}
        onClick={() => nav('/missions')}
        alignment={'right'}
      />
      <MvmtFooter />
    </>
  )
}

export default Homepage
