import MvmtHeader from "../components/MvmtHeader";
import PageDetailsCard from "../components/PageDetailsCard";
import PageIntroCard from "../components/PageIntroCard";

import home from "../assets/home.png";
import lifeGroup from "../assets/lifeGroup.jpeg";
import serving from "../assets/serving.jpeg";
import outreach from "../assets/outreach.jpeg";
import FeatureCard from "../components/FeatureCard";

const Homepage = () => {
  return (
    <div className="max-w-[1000px]">
      <div className="flex items-start">
        <MvmtHeader />
      </div>
      <PageIntroCard
        title={"Welcome to"}
        typedStrings={["Movement"]}
        desc={`We are a Christ-centered community committed to loving Jesus, our city, and the world. Our hope is that you and your family will find a place here to grow and be involved in God's work.`}
        img={home}
        ctaButtons={true}
        alignment={"left"}
      />
      <div className="flex justify-between">
        <FeatureCard
          text={`11:00 AM - 1150 South Dobson Road Chandler, AZ 85286`}
          title="Sunday worship"
          svg={"cross"}
        />
        <FeatureCard
          text={`Are you new or planning to visit soon? We have some answers to questions you might be wondering!`}
          title="New here?"
          svg={"profile"}
        />
        <FeatureCard
          text={`To raise fruitful and impactful followers of Jesus Christ.  `}
          title="Why we exist"
          svg={"bible"}
        />
        <FeatureCard
          text={`Questions or feedback? Drop us a note!`}
          title="Contact us"
          svg={"contactUs"}
        />
      </div>
      <PageDetailsCard
        title={"Life Groups"}
        desc={`They're the heartbeat of our community. Groups meet weekly to study the Bible, build relationships, and encourage one another to follow Jesus.`}
        img={lifeGroup}
        ctaButtons={true}
        alignment={"right"}
      />
      <PageDetailsCard
        title={"Serving Opportunities"}
        desc={`Serving is key to spiritual growth, not to mention a great way to connect with others in the church.  Learn more about opportunities.`}
        img={serving}
        ctaButtons={true}
        alignment={"left"}
      />
      <PageDetailsCard
        title={"Missions & Outreach"}
        desc={`mpacting the world is our goal.  Whether it's through supporting missionaries or taking short-term trips, we're excited to take part in God's work.`}
        img={outreach}
        ctaButtons={true}
        alignment={"right"}
      />
    </div>
  );
};

export default Homepage;
