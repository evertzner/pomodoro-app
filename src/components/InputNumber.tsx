import IconArrowUp from '../Icons/IconArrowUp';
import IconArrowDown from '../Icons/IconArrowDown';
import { useEffect, useState } from 'react';

type InputNumberProps = {
  text: string;
};

const InputNumber = ({ text }: InputNumberProps) => {
  const [inputValue, setInputValue] = useState(0);

  const positiveValue = (number) => {
    if (number < 0) return false;

    return true;
  };

  const changeValue = (number) => {
    positiveValue(number) && setInputValue(number);
  };

  const increaseValue = () => {
    setInputValue((current) => current + 1);
  };

  const decreaseValue = () => {
    positiveValue(inputValue - 1) && setInputValue((current) => current - 1);
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className='flex flex-row md:flex-col gap-2.5 justify-between items-center md:items-start'>
      <p className='text-preset-7 text-blue-900 opacity-40'>{text}</p>
      <div className='relative w-max'>
        <input
          id='number'
          type='number'
          className='appearance-none outline-none text-sm font-bold text-blue-900 bg-blue-50 grid grid-cols-[1fr_max-content] w-[140px] h-[40px] md:h-[48px] items-center rounded-[10px] overflow-hidden p-4'
          value={inputValue}
          onChange={(e) => changeValue(e.target.value)}
          onKeyDown={(e) => e.preventDefault()}
        />
        <div className='absolute right-0 -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <IconArrowUp onClick={increaseValue} />
          <IconArrowDown onClick={decreaseValue} />
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
