import PropTypes from 'prop-types';
const Back = ({ size, color
}) => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   width={size}
    //   height={size}
    //   fill={color}
    // >
    //   <path fill="none" d="M0 0h24v24H0z"/>
    //   <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/>
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.496 11.21"
      width={size}
      height={size}
      fill={color}
      
    >
      <g
        id="Arrow_Icon"
        data-name="Arrow Icon"
        transform="translate(0 -41.674)"
      >
        <g id="Group_7" data-name="Group 7" transform="translate(0 41.674)">
          <path
            id="Path_21"
            data-name="Path 21"
            d="M12.737,46.22l.021,0H3.727L6.566,43.38a.746.746,0,0,0,0-1.048l-.442-.442a.739.739,0,0,0-1.043,0L.215,46.755a.744.744,0,0,0,0,1.047l4.867,4.867a.74.74,0,0,0,1.043,0l.442-.442a.731.731,0,0,0,.215-.521.709.709,0,0,0-.215-.512L3.7,48.332h9.052a.765.765,0,0,0,.749-.757V46.95A.75.75,0,0,0,12.737,46.22Z"
            transform="translate(0 -41.674)"
          />
        </g>
      </g>
    </svg>
  );
}

Back.propTypes ={
    size: PropTypes.number,
    color: PropTypes.string,
}

Back.defaultProps = {
    color: 'white',
    size: 24,
}

export default Back;