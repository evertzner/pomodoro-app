import { useState } from 'react';

interface props {
  onClick: () => void;
}

const IconArrowUp = ({ onClick }: props) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='flex cursor-pointer p-1'
      onClick={onClick}
    >
      <svg width='14' height='7' viewBox='0 0 14 7' fill='none'>
        <path
          d='M1 6L7 2L13 6'
          stroke='#1E213F'
          strokeOpacity={hover ? '1' : '0.25'}
          strokeWidth='2'
        ></path>
      </svg>
    </button>
  );
};

export default IconArrowUp;
