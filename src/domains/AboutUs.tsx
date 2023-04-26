import PageIntroCard from 'components/PageIntroCard'
import pc from 'assets/pc.jpeg'
import DropdownText from 'components/DropdownText'

const AboutUs = () => {
  return (
    <>
      <PageIntroCard
        typedStrings={['About us']}
        img={pc}
        desc={`Pastor Charles has served as the pastor of Movement Ministry (formerly known as TKPC English Ministry) since the summer of 2015.  After graduating college, he worked professionally for 12 years before becoming a full-time pastor.  He is originally from Illinois, where he spent nearly all his life until he and his family moved to AZ in 2015.  He is married to Sarah and together they have three boys - Noah, Matthew, and Deacon.
          
He has a Bachelor's in electrical engineering from the University of Illinois and a Master of Divinity from Columbia International University Seminary and School of Missions.`}
      />
      <div className="max-w-[900px]">
        <DropdownText
          title={`Where we're going`}
          text={`Up and out.\n\nTrue Christianity isn't a mechanical following of rules. It is a life-giving (John 4:14) and fruit-producing (Galatians 5:22-23) relationship with God who is in the business of restoring and transforming people (2 Corinthians 5:17). We're not interested in merely being a nice church with nice people doing nice things. We want to be a church that's alive. We don't want to simply follow Jesus, we want him to be our sole passion and devotion
          
True Christianity also has a cause: to impact this world by pointing to the only source of hope, Jesus Christ (Acts 1:8). It is the privilege and calling of every follower of Christ to be an agent of his grace to this world and we are committed to preparing and equipping God's people to that end. We want to see every believer impacting their offices, schools, homes, and communities.

We won't settle for listless religion and drifting through life. We are on a journey. There is a destination...we have a purpose...and God is faithful to lead us. So by His grace, we will keep moving. Upward and outward. Together.`}
        />
        <DropdownText
          title={'What we believe'}
          text={`\u2022 About the Bible. God is a communicating God and He has graciously revealed Himself through the Bible. It is the written word of God, inspired by the Holy Spirit and without error in the original manuscripts. It tells us everything we need to know in regards to salvation and it is the absolute authority for Christian faith and life.
\n\u2022 About God. There is one God who has eternally existed in three equally divine Persons: the Father, the Son, and the Holy Spirit. God is the Creator of all, Sustainer of all, and Ruler of all, and is therefore worthy of all praise.
\n\u2022 About Jesus Christ. He is the eternal Son of God, conceived by the Holy Spirit and born of the virgin Mary, and therefore fully God and fully human. He lived a perfect life which qualified him to be a sacrifice for sinners. He died on the cross to pay for all the sins of all who will trust in him for salvation. He physically rose from the dead, validating his work on the cross and breaking the power of death. He ascended into heaven where he is forever exalted and forever interceding for his people.
\n\u2022 About the Holy Spirit. He seeks to glorify Jesus Christ, convict people of their sins, and give faith to those who will believe. He resides in the heart of the Christian to assure, guide, instruct, and empower him/her to love and serve God.
\n\u2022 About people. All people are created in the image of God and are therefore valuable. However, all people are also inherently sinful which alienates them from God and makes them deserving of His just wrath. The core need of every human being is to be reconciled to God, which we are powerless to seek, except by His mercy.
\n\u2022 About salvation. Forgiveness of sin and reconciliation with God are only possible because of the sacrifice of Jesus Christ and his resurrection. God sovereignly chooses those who will receive salvation and His choice is based on His purposes and grace, not on any individual merit. Salvation is received through faith alone and is evidenced by spiritual growth and holy living. 
\n\u2022 About the church. The true Church is made up of all regenerated believers who are united together as the body of Christ, with Christ as the Head. All members of the body have gifts they are to use to serve the Church and God. The Church exists to worship God, build up believers, and fulfill Jesus' command to make disciples of all nations. 
\n\u2022 About baptism and the Lord's Supper. These are ordinances the Church is commanded to observe. They are not means of salvation but are means of God's strengthening grace. Water baptism is a sign and seal of one's entrance into God's covenant community. The Lord's Supper is for spiritual sustenance.
\n\u2022 About marriage and gender. Marriage was instituted by God from the foundation of the world, before the corruption of sin. He intended marriage as a lifelong union of one man and one woman. We also believe God uniquely designed each individual as male or female, equal, but with complementary roles in the church and family. We honor God's sovereign design but we also condemn hateful behavior and attitudes toward anyone based on these or any other grounds.
\n\u2022 About the end. The personal and bodily return of Jesus Christ to judge all mankind, consummate his kingdom, restore all creation, and gather his people to himself, is the hope of the Church. There will be a bodily resurrection of all people - the unbeliever to eternal conscious punishment in hell, the believer to eternal joy in the presence of God.`}
        />
        <DropdownText
          title={'Who we are: core values'}
          text={`Christ-centered. Everything is by Christ, through Christ, and for Christ.

Word of God. Faith, fruit, and impact result from the word of God.

Prayer. Nothing happens without prayer.

Church. God will accomplish His plans through the church. He loves the church and so do we.

Discipleship. There is a cost to following Christ. We don't shy away from this, we embrace it because he is worth it and he is worthy.

Kingdom. Building God's Kingdom up and out is the call of the church and the Christian.`}
        />
      </div>
    </>
  )
}

export default AboutUs
