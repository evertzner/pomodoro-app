import FontSelector from './FontSelector';
import InputNumber from './InputNumber';
import IconClose from '../Icons/IconClose';
import ColorSelector from './ColorSelector';

const Settings = () => {
  return (
    <div className='flex flex-col p-6 pb-7 md:p-10 md:pt-9 rounded-2xl w-[327px] md:w-[540px] bg-white relative'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-preset-3'>Settings</h2>
        <IconClose />
      </div>
      <hr className='-mx-6' />
      <div className='py-6 flex flex-col gap-4'>
        <h3 className='text-preset-5 text-center md:text-left'>Time (Minutes)</h3>
        <div className='flex flex-col md:flex-row gap-2 md:gap-5'>
          <InputNumber text='pomodoro' />
          <InputNumber text='short break' />
          <InputNumber text='long break' />
        </div>
      </div>
      <hr />
      <div className='py-6 flex flex-col gap-4 items-center md:flex-row md:justify-between'>
        <h3 className='text-preset-5 text-center md:text-left'>Font</h3>
        <div className='flex gap-4'>
          <FontSelector font={'font-kumbh'} />
          <FontSelector font={'font-roboto'} />
          <FontSelector font={'font-space'} />
        </div>
      </div>
      <hr />
      <div className='py-6 flex flex-col gap-4 items-center md:flex-row md:justify-between'>
        <h3 className='text-preset-5 text-center md:text-left'>Color</h3>
        <div className='flex gap-4'>
          <ColorSelector color='bg-red-400' />
          <ColorSelector color='bg-cyan-300' />
          <ColorSelector color={'bg-fucsia-400'} />
        </div>
      </div>
      <button className='bg-red-400 text-white font-bold p-[18px] w-[140px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'>
        Apply
      </button>
    </div>
  );
};

export default Settings;
