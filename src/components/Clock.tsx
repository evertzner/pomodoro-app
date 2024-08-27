import { useEffect, useState } from 'react';
import IconRestart from '../Icons/IconRestart';
import { selectedStatus, selectedTime, settings, times, color, status } from '../utils/store';
import { useStore } from '@nanostores/react';
import moment from 'moment';

type ProgressRingProps = {
  duration: number;
};

const ProgressRing = ({ duration }: ProgressRingProps) => {
  const $settings = useStore(settings);

  const { hexValue } = color[$settings.colorName];

  const calculatedDuration = `${duration * 60}s`;

  const animation = () => {
    return {
      animationName: 'timer',
      animationFillMode: 'forwards',
      animationTimingFunction: 'linear',
      animationDuration: calculatedDuration
    };
  };

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
          style={animation()}
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
          className='animate-[timer_linear_forwards]'
          style={{ animationPlayState: 'paused', animationDuration: calculatedDuration }}
        />
      </svg>
    </div>
  );
};

const ActionButton = () => {
  const $selectedStatus = useStore(selectedStatus);

  const changeStatus = () => {
    switch ($selectedStatus) {
      case 'off':
        selectedStatus.set('started');
        break;
      case 'resumed':
      case 'started':
        selectedStatus.set('paused');
        break;
      case 'paused':
        selectedStatus.set('resumed');
        break;
      default:
        break;
    }
  };

  return (
    <button className='text-preset-4 text-blue-100 z-10' onClick={changeStatus}>
      {status[$selectedStatus]}
    </button>
  );
};

const RestartButton = () => {
  const restartStatus = () => {
    selectedStatus.set('off');
  };

  return (
    <button className='z-10' onClick={restartStatus}>
      <IconRestart />
    </button>
  );
};

const Clock = () => {
  // const $selectedStatus = useStore(selectedStatus);
  const $settings = useStore(settings);
  const $selectedTime = useStore(selectedTime);
  const $selectedStatus = useStore(selectedStatus);
  const { settingsValue } = times[$selectedTime];
  const value = $settings[settingsValue];
  const [minutes, setMinutes] = useState(value);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    selectedStatus.set('off');
    setMinutes(value);
    setSeconds(0);
  }, [$selectedTime]);

  useEffect(() => {
    switch ($selectedStatus) {
      case 'off':
        setMinutes(value);
        setSeconds(0);
        break;
      case 'started':
      case 'resumed':
        const interval = setInterval(() => {
          setMinutes((current: number) => current - 1);
          console.log(minutes);
        }, 1000);
        return () => clearInterval(interval);

      default:
        break;
    }
  }, [$selectedStatus]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer((current) => current - 1);
  //     console.log(timer);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [timer]);

  // const time = moment().startOf('day').add($settings[settingsValue], 'minutes');

  // const formattedTime = time.format('mm:ss');
  // const formattedTime = `${value > 9 ? value : '0' + value}:00`;

  return (
    <div className='flex items-center justify-center mt-1 w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-full bg-gradient-to-tl from-[#2E325A] to-[#0E112A] shadow-[-50px_-50px_100px_0px_#272C5A,50px_50px_100px_0px_#121530]'>
      <div className='relative grid grid-rows-[2fr_1fr] justify-center w-[268px] h-[268px] md:w-[366px] md:h-[366px] bg-blue-950 rounded-full'>
        <div
          className={`${$settings.font === 'font-space' ? 'text-preset-1-mono' : 'text-preset-1'} text-blue-100 self-end z-10 grid grid-cols-[1fr_min-content_1fr] mb-2`}
        >
          <span className='place-self-end'>{minutes > 9 ? minutes : '0' + minutes}</span>
          <span>:</span>
          <span>{seconds > 10 ? seconds : '0' + seconds}</span>
        </div>
        <div className='pt-1 flex flex-col items-center gap-3 md:gap-4'>
          <ActionButton />
          <RestartButton />
        </div>
        <ProgressRing duration={value} />
      </div>
    </div>
  );
};

export default Clock;
