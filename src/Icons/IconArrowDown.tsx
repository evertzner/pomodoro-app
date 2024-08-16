import { useState } from 'react';

interface props {
  onClick: () => void;
}

const IconArrowDown = ({ onClick }: props) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className='flex cursor-pointer p-1'
      onClick={onClick}
    >
      <svg width='14' height='7' viewBox='0 0 14 7' fill='none'>
        <path
          d='M1 1L7 5L13 1'
          stroke='#1E213F'
          strokeOpacity={hover ? '1' : '0.25'}
          strokeWidth='2'
        ></path>
      </svg>
    </div>
  );
};

export default IconArrowDown;
