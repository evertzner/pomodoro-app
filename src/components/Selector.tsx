import { selectedTime, settings, color, type Time } from '../utils/store';
import { useStore } from '@nanostores/react';

type ButtonProps = {
  time: Time;
};

const Button = ({ time }: ButtonProps) => {
  const $selectedTime = useStore(selectedTime);
  const $settings = useStore(settings);

  const selectTime = () => {
    selectedTime.set(time);
  };

  const { background } = color[$settings.colorName];

  return (
    <button
      className={`text-preset-7 px-5 py-4 rounded-full ${time === $selectedTime ? `${background} text-blue-900` : 'bg-transparent text-blue-100 text-opacity-40 hover:text-blue-100'}  `}
      onClick={selectTime}
    >
      {time}
    </button>
  );
};

const Selector = () => (
  <div className='w-[345px] md:w-[381px] flex justify-between items-center bg-blue-950 p-1.5 rounded-full'>
    <Button time='pomodoro' />
    <Button time='short break' />
    <Button time='long break' />
  </div>
);

export default Selector;
