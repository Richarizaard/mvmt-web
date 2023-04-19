export const IconsList = ['cross', 'contactUs', 'profile', 'bible', 'hamburger']

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
    default:
      return null
  }
}
const SVGIcon = ({
  name = '',
  className = '',
  fill = '#0F0F0F',
  width = '28',
  height = '28',
}) => getPath({ name, className, fill, width, height })

export default SVGIcon
