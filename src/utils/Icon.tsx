export const IconsList = [
  'cross',
  'contactUs',
  'profile',
  'bible',
  'hamburger',
  'facebook',
  'chevron-down',
  'chevron-up',
  'cancel',
]

interface SvgIconProps {
  className: string
  name: string
  fill: string
  width: string
  height: string
}

const getPath = ({ name, className, fill, width, height }: SvgIconProps) => {
  switch (name) {
    case 'cross':
      return (
        <svg
          className={className}
          fill={fill}
          width={width}
          height={height}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 13 3 L 13 9 L 7 9 L 7 15 L 13 15 L 13 29 L 19 29 L 19 15 L 25 15 L 25 9 L 19 9 L 19 3 Z M 15 5 L 17 5 L 17 11 L 23 11 L 23 13 L 17 13 L 17 27 L 15 27 L 15 13 L 9 13 L 9 11 L 15 11 Z" />
        </svg>
      )
    case 'contactUs':
      return (
        <svg
          className={className}
          fill={fill}
          width={width}
          height={height}
          version="1.1"
          id="XMLID_276_"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g id="contact-us">
            <g>
              <path d="M4,24v-5H0V0h23v19h-9.3L4,24z M2,17h4v3.7l7.3-3.7H21V2H2V17z" />
            </g>
            <g>
              <rect x="5" y="8" width="3" height="3" />
            </g>
            <g>
              <rect x="10" y="8" width="3" height="3" />
            </g>
            <g>
              <rect x="15" y="8" width="3" height="3" />
            </g>
          </g>
        </svg>
      )
    case 'profile':
      return (
        <svg
          className={className}
          fill={fill}
          width={width}
          height={height}
          version="1.1"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
        >
          <g>
            <path
              d="M32,42c8.673,0,16-8.701,16-19S40.673,4,32,4s-16,8.701-16,19S23.327,42,32,42z M32,8c6.505,0,12,6.869,12,15
                   s-5.495,15-12,15s-12-6.869-12-15S25.495,8,32,8z"
            />
            <path
              d="M4.103,45.367l-4,12c-0.203,0.61-0.101,1.28,0.275,1.802C0.753,59.691,1.357,60,2,60h60c0.643,0,1.247-0.309,1.622-0.831
                   c0.376-0.521,0.479-1.191,0.275-1.802l-4-12c-0.209-0.626-0.713-1.108-1.348-1.29l-14-4c-0.482-0.139-0.996-0.09-1.444,0.134
                   L32,45.764l-11.105-5.553c-0.448-0.224-0.962-0.272-1.444-0.134l-14,4C4.815,44.259,4.312,44.741,4.103,45.367z M19.802,44.137
                   l11.304,5.652c0.562,0.281,1.227,0.281,1.789,0l11.304-5.652l12.238,3.496L59.226,56H4.774l2.789-8.367L19.802,44.137z"
            />
            <path
              d="M62,6h-4V2c0-1.104-0.896-2-2-2s-2,0.896-2,2v4h-4c-1.104,0-2,0.896-2,2s0.896,2,2,2h4v4c0,1.104,0.896,2,2,2s2-0.896,2-2
                   v-4h4c1.104,0,2-0.896,2-2S63.104,6,62,6z"
            />
          </g>
        </svg>
      )
    case 'bible':
      return (
        <svg
          className={className}
          fill={fill}
          width={width}
          height={height}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 9 4 C 7.355469 4 6 5.355469 6 7 L 6 25 C 6 26.644531 7.355469 28 9 28 L 26 28 L 26 4 Z M 9 6 L 24 6 L 24 22 L 9 22 C 8.648438 22 8.316406 22.074219 8 22.1875 L 8 7 C 8 6.433594 8.433594 6 9 6 Z M 15 8 L 15 11 L 12 11 L 12 13 L 15 13 L 15 20 L 17 20 L 17 13 L 20 13 L 20 11 L 17 11 L 17 8 Z M 9 24 L 24 24 L 24 26 L 9 26 C 8.433594 26 8 25.566406 8 25 C 8 24.433594 8.433594 24 9 24 Z" />
        </svg>
      )
    case 'hamburger':
      return (
        <svg
          className={className}
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 2.39999V0.399994H0V2.39999H20ZM20 7.99999V9.99999H0V7.99999H20ZM20 15.6V17.6H0V15.6H20Z"
            fill="black"
          />
        </svg>
      )
    case 'facebook':
      return (
        <svg
          className={className}
          fill={fill}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H12V13H11C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11H12V9.5C12 7.567 13.567 6 15.5 6H16.1C16.6523 6 17.1 6.44772 17.1 7C17.1 7.55228 16.6523 8 16.1 8H15.5C14.6716 8 14 8.67157 14 9.5V11H16.1C16.6523 11 17.1 11.4477 17.1 12C17.1 12.5523 16.6523 13 16.1 13H14V20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6Z"
          />
        </svg>
      )
    case 'instagram':
      return (
        <svg
          className={className}
          fill={fill}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
          />
        </svg>
      )
    case 'youtube':
      return (
        <svg
          className={className}
          width={width}
          height={height}
          viewBox="0 -3 20 20"
        >
          <g transform="translate(-300.000000, -7442.000000)">
            <g transform="translate(56.000000, 160.000000)">
              <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"></path>
            </g>
          </g>
        </svg>
      )
    case 'email':
      return (
        <svg
          className={className}
          fill={fill}
          width={width}
          height={height}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
      )
    case 'chevron-down':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'chevron-up':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.6569 16.2427L19.0711 14.8285L12.0001 7.75739L4.92896 14.8285L6.34317 16.2427L12.0001 10.5858L17.6569 16.2427Z"
            fill="currentColor"
          />
        </svg>
      )
    case 'cancel':
      return (
        <svg
          className={className}
          fill={fill}
          width={width}
          height={height}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" />
        </svg>
      )
    default:
      return null
  }
}
const SVGIcon = ({
  name = '',
  className = '',
  fill = '#0F0F0F',
  width = '24',
  height = '24',
}) => getPath({ name, className, fill, width, height })

export default SVGIcon
