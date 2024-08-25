import FontSelector from './FontSelector';
import InputNumber from './InputNumber';
import IconClose from '../Icons/IconClose';
import ColorSelector from './ColorSelector';
import {
  settings,
  selectedColor,
  selectedFont,
  pomodoroTime,
  shortBreakTime,
  longBreakTime,
  isModalOpened
} from '../utils/store';
import { useStore } from '@nanostores/react';

const Settings = () => {
  const $settings = useStore(settings);
  const $selectedColor = useStore(selectedColor);
  const $selectedFont = useStore(selectedFont);
  const $pomodoroTime = useStore(pomodoroTime);
  const $shortBreakTime = useStore(shortBreakTime);
  const $longBreakTime = useStore(longBreakTime);

  const applySettings = () => {
    console.log($pomodoroTime);
    settings.setKey('pomodoroTime', $pomodoroTime);
    settings.setKey('shortBreakTime', $shortBreakTime);
    settings.setKey('longBreakTime', $longBreakTime);
    settings.setKey('font', $selectedFont);
    settings.setKey('color', $selectedColor);
  };

  return (
    <div className='absolute top-0 w-full h-full grid place-items-center'>
      <div className='relative flex flex-col p-6 pb-7 md:p-10 md:pt-9 rounded-2xl w-[327px] md:w-[540px] bg-white '>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-preset-3'>Settings</h2>
          <button onClick={() => isModalOpened.set(false)}>
            <IconClose />
          </button>
        </div>
        <hr className='-mx-6' />
        <div className='py-6 flex flex-col gap-4'>
          <h3 className='text-preset-5 text-center md:text-left'>Time (Minutes)</h3>
          <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
            <InputNumber
              onInputChange={(value: number) => pomodoroTime.set(value)}
              text='pomodoro'
              value={$settings.pomodoroTime}
              maxValue={120}
            />
            <InputNumber
              onInputChange={(value: number) => shortBreakTime.set(value)}
              text='short break'
              value={$settings.shortBreakTime}
              maxValue={15}
            />
            <InputNumber
              onInputChange={(value: number) => longBreakTime.set(value)}
              text='long break'
              value={$settings.longBreakTime}
              maxValue={30}
            />
          </div>
        </div>
        <hr />
        <div className='py-6 flex flex-col gap-4 items-center md:flex-row md:justify-between'>
          <h3 className='text-preset-5 text-center md:text-left'>Font</h3>
          <div className='flex gap-4'>
            <FontSelector font='font-kumbh' />
            <FontSelector font='font-roboto' />
            <FontSelector font='font-space' />
          </div>
        </div>
        <hr />
        <div className='py-6 flex flex-col gap-4 items-center md:flex-row md:justify-between'>
          <h3 className='text-preset-5 text-center md:text-left'>Color</h3>
          <div className='flex gap-4'>
            <ColorSelector color='bg-red-400' />
            <ColorSelector color='bg-cyan-300' />
            <ColorSelector color='bg-fucsia-400' />
          </div>
        </div>
        <button
          onClick={applySettings}
          className='bg-red-400 text-white font-bold p-[18px] w-[140px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Settings;
