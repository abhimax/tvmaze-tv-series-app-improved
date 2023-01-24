import PropTypes from 'prop-types';
const StarFilled = ({ size, color
}) => {
  return (
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 13 12"
  width={size}
  height={size}
  fill={color}
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6.53635 9.24591L2.75407 11.7586L3.95103 7.34853L0.416503 4.49139L4.93853 4.27851L6.53635 0L8.13416 4.27851L12.6562 4.49139L9.12166 7.34853L10.3186 11.7586L6.53635 9.24591Z"
    fill={color}
  />
</svg>
  )
}

StarFilled.propTypes ={
    size: PropTypes.number,
    color: PropTypes.string,
}

StarFilled.defaultProps = {
    color: "#FFC302",
    size: 24,
}

export default StarFilled;