import IconRestart from '../Icons/IconRestart';
import { selectedStatus, selectedTime, settings, times, color } from '../utils/store';
import { useStore } from '@nanostores/react';
import moment from 'moment';

const ProgressRing = () => {
  const $settings = useStore(settings);
  const { hexValue } = color[$settings.colorName];

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <svg viewBox='-3 -3 254 254' width='256' height='256' className='flex md:hidden'>
        <path
          d='M124 5A1 1 0 01124 243 1 1 0 01124 5'
          stroke={hexValue}
          strokeWidth='8'
          fill='none'
          strokeDasharray='750'
          strokeDashoffset='750'
          strokeLinecap='round'
          className='animate-[timer_5s_linear_forwards]'
        />
      </svg>
      <svg viewBox='-4.49999 -1 341 341' width='341' height='341' className='hidden md:flex'>
        <path
          d='M166 7A1 1 0 01166 332 1 1 0 01166 7'
          stroke={hexValue}
          strokeWidth='11'
          fill='none'
          strokeDasharray='1020'
          strokeDashoffset='1020'
          strokeLinecap='round'
          className='animate-[timer_5s_linear_forwards]'
        />
      </svg>
    </div>
  );
};

const ActionButton = () => {
  const $selectedStatus = useStore(selectedStatus);

  return <button className='text-preset-4 text-blue-100 z-10'>{$selectedStatus}</button>;
};

type ClockProps = {
  time: string;
};

const Clock = () => {
  const $settings = useStore(settings);
  const $selectedTime = useStore(selectedTime);
  const { settingsValue } = times[$selectedTime];
  const value = $settings[settingsValue];

  // const time = moment().startOf('day').add($settings[settingsValue], 'minutes');

  // const formattedTime = time.format('mm:ss');
  // const formattedTime = `${value > 9 ? value : '0' + value}:00`;

  return (
    <div className='flex items-center justify-center mt-1 w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-full bg-gradient-to-tl from-[#2E325A] to-[#0E112A] shadow-[-50px_-50px_100px_0px_#272C5A,50px_50px_100px_0px_#121530]'>
      <div className='relative grid grid-rows-[2fr_1fr] justify-center w-[268px] h-[268px] md:w-[366px] md:h-[366px] bg-blue-950 rounded-full'>
        <div
          className={`${$settings.font === 'font-space' ? 'text-preset-1-mono' : 'text-preset-1'} text-blue-100 self-end z-10 grid grid-cols-[1fr_min-content_1fr] `}
        >
          <span className='place-self-end'>{value > 9 ? value : '0' + value}</span>
          <span>:</span>
          <span>00</span>
        </div>
        <div className='pt-1 md:pt-3 flex flex-col items-center gap-3 md:gap-4'>
          <ActionButton />
          <button className='z-10'>
            <IconRestart />
          </button>
        </div>
        <ProgressRing />
      </div>
    </div>
  );
};

export default Clock;
