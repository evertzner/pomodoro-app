import { useEffect, useState } from 'react';
import IconRestart from '../Icons/IconRestart';
import { selectedStatus, selectedTime, settings, times, color, status } from '../utils/store';
import { useStore } from '@nanostores/react';

type ProgressRingProps = {
  duration: number;
};

const ProgressRing = ({ duration }: ProgressRingProps) => {
  const $settings = useStore(settings);
  const $selectedStatus = useStore(selectedStatus);

  const { hexValue } = color[$settings.colorName];

  let calculatedDuration = `${duration * 60}s`;

  const animation: React.CSSProperties = {
    animationName: 'timer',
    animationFillMode: 'forwards',
    animationTimingFunction: 'linear',
    animationPlayState: 'running',
    animationDuration: calculatedDuration,
    animationDelay: '1s'
  };

  const timers: NodeListOf<SVGPathElement> = document.querySelectorAll('[name=timer]');

  switch ($selectedStatus) {
    case 'off':
      calculatedDuration = `${duration * 60}s`;
      animation.animationDuration = calculatedDuration;
      animation.animationPlayState = 'paused';
      timers.forEach((t) => (t.style.animationName = ''));
      break;
    case 'paused':
      animation.animationPlayState = 'paused';
      break;
    case 'resumed':
    case 'started':
      animation.animationPlayState = 'running';
      timers.forEach((t) => (t.style.animationName = 'timer'));
      break;
    default:
      break;
  }

  return (
    <div className='[&_svg]:absolute [&_svg]:top-1/2 [&_svg]:left-1/2 [&_svg]:-translate-x-1/2 [&_svg]:-translate-y-1/2'>
      <svg viewBox='-3 -3 254 254' width='256' height='256' className='opacity-100 md:opacity-0'>
        <path
          name='timer'
          d='M124 5A1 1 0 01124 243 1 1 0 01124 5'
          stroke={hexValue}
          strokeWidth='8'
          fill='none'
          strokeDasharray='750'
          strokeDashoffset='750'
          strokeLinecap='round'
          style={animation}
        />
      </svg>
      <svg
        viewBox='-4.49999 -1 341 341'
        width='341'
        height='341'
        className='opacity-0 md:opacity-100 '
      >
        <path
          name='timer'
          d='M166 7A1 1 0 01166 332 1 1 0 01166 7'
          stroke={hexValue}
          strokeWidth='11'
          fill='none'
          strokeDasharray='1021'
          strokeDashoffset='1021'
          strokeLinecap='round'
          style={animation}
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
      case 'finished':
        selectedStatus.set('off');
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
  const $settings = useStore(settings);
  const $selectedTime = useStore(selectedTime);
  const $selectedStatus = useStore(selectedStatus);
  const { settingsValue } = times[$selectedTime];
  const value = $settings[settingsValue];
  const [minutes, setMinutes] = useState(value);
  const [seconds, setSeconds] = useState(0);

  const finishedSound = new Audio('./sounds/timer-off.mp3');

  useEffect(() => {
    selectedStatus.set('off');
    setMinutes(value);
    setSeconds(0);
  }, [$selectedTime, $settings]);

  useEffect(() => {
    switch ($selectedStatus) {
      case 'off':
        setMinutes(value);
        setSeconds(0);
        break;
      case 'started':
      case 'resumed':
        if (seconds === 0 && minutes === 0) {
          finishedSound.play();
          selectedStatus.set('finished');
        }
        const interval = setInterval(() => {
          if (seconds === 0) setMinutes((current: number) => current - 1);
          setSeconds((current: number) => (current === 0 ? 59 : current - 1));
        }, 1000);
        return () => clearInterval(interval);
      default:
        break;
    }
  }, [$selectedStatus, seconds, minutes]);

  return (
    <div className='flex items-center justify-center mt-1 w-[300px] h-[300px] md:w-[410px] md:h-[410px] rounded-full bg-gradient-to-tl from-[#2E325A] to-[#0E112A] shadow-[-50px_-50px_100px_0px_#272C5A,50px_50px_100px_0px_#121530] place-self-center'>
      <div className='relative grid grid-rows-[2fr_1fr] justify-center w-[268px] h-[268px] md:w-[366px] md:h-[366px] bg-blue-950 rounded-full'>
        <div
          className={`${$settings.font === 'font-space' ? 'text-preset-1-mono' : 'text-preset-1'} text-blue-100 self-end z-10 grid grid-cols-[1fr_min-content_1fr] mb-2`}
        >
          <span className='place-self-end'>{minutes > 9 ? minutes : '0' + minutes}</span>
          <span>:</span>
          <span>{seconds > 9 ? seconds : '0' + seconds}</span>
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
