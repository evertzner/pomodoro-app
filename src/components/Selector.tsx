import { selectedTime, settings, type Time } from '../utils/store';
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

  return (
    <button
      className={`text-preset-7 px-5 py-4 rounded-full ${time === $selectedTime ? `${$settings.color} text-blue-900` : 'bg-transparent text-blue-100 text-opacity-40'}`}
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
