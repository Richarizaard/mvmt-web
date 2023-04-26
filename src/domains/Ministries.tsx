import PageIntroCard from 'components/PageIntroCard'
import ContentCard from 'components/ContentCard'

import home from 'assets/home.png'
import outreach from 'assets/outreach.jpeg'
import fellowship from 'assets/fellowship.jpeg'
import welcoming from 'assets/welcoming.jpeg'
import praise from 'assets/praise.jpeg'
import childrens from 'assets/childrens.jpeg'
import youth from 'assets/youth.jpeg'

const ministries = [
  {
    title: 'Outreach',
    desc: `Help the church be more involved in local outreaches and mission work abroad.  This committee coordinates trips, cares for missionaries we support, and seeks to get the church more excited about advancing the gospel.`,
    img: outreach,
  },
  {
    title: 'Fellowship & Events',
    desc: `If you find joy in seeing people come together and want to see the church more unified, you are much needed here!  This team creates programs and events that foster inclusiveness, unity, and discipleship.`,
    img: fellowship,
  },
  {
    title: 'Welcoming Team',
    desc: `A smiling face and a warm greeting makes a world of difference when a person walks in Sunday morning.  Brighten someone's day and help them have a great worship and church experience by joining the welcoming team.`,
    img: welcoming,
  },
  {
    title: 'Praise Ministry',
    desc: `
    We love music at Movement because of the power it has to draw us near to God.  There is nothing better we can do with our talents than to use them to worship God and lead others to worship as well.  Due to the nature of this ministry, those interested will need to apply.  Please contact us for more details. 
    
    This ministry also includes technical and A/V support needed for Sunday services to run smoothly.    `,
    img: praise,
  },
  {
    title: `Children's Ministry`,
    desc: `CtCC (our parent church) has a large children's ministry that is always in need of Sunday school teachers and assistants.  There is also an opportunity to serve special-needs kids through a ministry designed just for them.  Due to the nature of these ministries, those interested will need to apply.`,
    img: childrens,
  },
  {
    title: 'Youth Ministry',
    desc: `We have the golden opportunity to influence the youth of our church (6th grade - 12th grade) at a very pivotal stage in their lives.  Serving this group can take many different forms from being involved throughout the year, to seasonally, to even one-time volunteering at an activity or event.`,
    img: youth,
  },
]
const Ministries = () => {
  return (
    <>
      <PageIntroCard
        typedStrings={['Ministries']}
        desc={`At Movement, we see serving as a way to build the church as well as an opportunity for growth and discipleship.`}
        img={home}
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(333px,auto))]">
        {ministries.map((ministry, idx) => {
          return (
            <ContentCard
              key={idx}
              title={ministry.title}
              desc={ministry.desc}
              img={ministry.img}
            />
          )
        })}
      </div>
    </>
  )
}

export default Ministries
