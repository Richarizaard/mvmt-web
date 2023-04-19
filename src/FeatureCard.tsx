interface FeatureCardProps {
    img: string,
    text: string,
    title: string,
  }
  
const FeatureCard = ({
    img,
    text,
    title
}: FeatureCardProps) => {
  return (
    <div className="w-3/12 flex items-center flex-col p-4">
      <img
        alt=""
        src={img}
        className="h-8 object-cover"
      />
      <h5 className="py-2 text-center text-xl font-semibold leading-snug normal-case no-underline">{title}</h5>
      <span className="text-center">{text}</span>
    </div>
  )
}

export default FeatureCard
