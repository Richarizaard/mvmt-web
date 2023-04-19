import SVGIcon from "../utils/Icon";

interface FeatureCardProps {
  text: string;
  title: string;
  svg: string;
}

const FeatureCard = ({ text, title, svg }: FeatureCardProps) => {
  return (
    <div className="w-3/12 flex items-center flex-col p-2 m-2 cursor-pointer rounded-3xl shadow-black hover:shadow-lg group animate-fadeIn">
      <SVGIcon
        name={svg}
        className="group-hover:stroke-sky-500 group-hover:fill-sky-500"
      />
      <h5 className="py-2 text-center text-xl font-semibold leading-snug normal-case no-underline group-hover:text-sky-500 group-hover:fill-sky-500">
        {title}
      </h5>
      <span className="text-center">{text}</span>
    </div>
  );
};

export default FeatureCard;
