import PageIntroCard from 'components/PageIntroCard'
import home from 'assets/home.png'
import montoya from 'assets/montoya.jpeg'
import conrad from 'assets/conrad.png'
import mike from 'assets/mike.jpeg'
import piantedosi from 'assets/piantedosi.png'
import PageDetailsCard from 'components/PageDetailsCard'

const missions = [
  {
    title: 'Nogales, Sonora, Mexico',
    desc: `Pastors Ramon and Theresa Montoya started the N.A.N.A ministry in 2005 which rescues, restores, and reunites at-risk children and their families by supporting them spiritually and physically.  They oversee the Dream Center which houses children, volunteers, and long-term staff.

    There are several opportunities each year to provide needs for the children and serve the residents of the Dream Center.`,
    img: montoya,
  },
  {
    title: 'Puerto Penasco, Mexico',
    desc: `Pastor Conrad and Heidi Quiros serve in Puerto Penasco (known as Rocky Point to tourists), Mexico.  Pastor Conrad pastors Penasco Christian Fellowship which organizes feeding ministries, prison outreaches, and evangelism efforts in the city and surrounding areas.

Trips to assist with the feeding ministry and support PCF are organized each year.`,
    img: conrad,
  },
  {
    title: 'San Jose, Costa Rica',
    desc: `Pastor Mike Yoon has been serving in Costa Rica since 2001 planting churches, discipling local leaders, evangelizing indigenous people groups, and hosting short-term teams. 

Movement and TKPC sends a joint team every 1-2 years, typically in June for about a week.`,
    img: mike,
  },
  {
    title: 'Phoenix, Arizona',
    desc: `As one of the largest refugee resettlement states in the US and home to a major international university in ASU, Phoenix has many of the nations represented in its own backyard.  Nick and Leslie Piantedosi serve as local missionaries working with Native Americans, exchange students, and refugees from the Middle East, Africa, and Asia, 
    
We have the opportunity to help refugee families learn English through tutoring once a week.  Outreaches targeting various refugee groups are also organized throughout the year. `,
    img: piantedosi,
  },
]

const Missions = () => {
  return (
    <>
      <PageIntroCard
        typedStrings={['Mission Partnerships']}
        desc={`We believe every church has its own role to play in this grand mission of God. We aim to support missions work in various parts of the world through prayer and finances, but we most actively partner with missionaries and ministries that are geographically close to Arizona.

Stewarding our resources well, maximally benefitting missionaries, and providing opportunities for involvement are the priorities of our missions program.`}
        img={home}
      />
      <div className="italic flex w-full justify-center text-center whitespace-pre-wrap">
        <div>{`Go therefore and make disciples of all nations,
baptizing them in the name of the Father and of the Son and of the Holy Spirit,
teaching them to observe all that I have commanded you.
And behold, I am with you always, to the end of the age.
Matthew 28:19-20`}</div>
      </div>
      {missions.map((mission, idx) => {
        return (
          <PageDetailsCard
            key={idx}
            title={mission.title}
            desc={mission.desc}
            img={mission.img}
            alignment={idx % 2 === 0 ? 'left' : 'right'}
          />
        )
      })}
    </>
  )
}

export default Missions
