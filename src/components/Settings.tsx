import FontSelector from './FontSelector';
import InputNumber from './InputNumber';

const Settings = () => {
  return (
    <div className='flex gap-4'>
      <InputNumber />
      <FontSelector font={'font-kumbh'} />
      <FontSelector font={'font-roboto'} />
      <FontSelector font={'font-space'} />
    </div>
  );
};

export default Settings;
