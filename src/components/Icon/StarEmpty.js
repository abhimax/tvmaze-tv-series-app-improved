import PropTypes from 'prop-types';
const StarEmpty = ({ size, color
}) => {
  return (
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 13 12"
  width={size}
  height={size}
  fill="none"
>
<path d="M6.13737 8.32581L6 8.23546L5.86263 8.32581L2.88962 10.2811L3.83047 6.84936L3.87395 6.6908L3.74557 6.58807L0.967298 4.36478L4.52179 4.19913L4.68603 4.19147L4.74406 4.03764L6 0.708304L7.25594 4.03764L7.31397 4.19147L7.47821 4.19913L11.0327 4.36478L8.25443 6.58807L8.12605 6.6908L8.16953 6.84936L9.11038 10.2811L6.13737 8.32581Z" stroke={color} strokeWidth="0.5"/>
</svg>
  )
}

StarEmpty.propTypes ={
    size: PropTypes.number,
    color: PropTypes.string,
}

StarEmpty.defaultProps = {
    color: "#FFC302",
    size: 24,
}

export default StarEmpty;