import { selectedFont, type Font } from '../utils/store';

type FontProps = {
  font: Font;
};

const FontSelector = ({ font }: FontProps) => {
  const selectFont = () => {
    selectedFont.set(font);
  };

  return (
    <button onClick={selectFont} className={`bg-red-400 flex ${font} p-2`}>
      Change Font
    </button>
  );
};

const Settings = () => {
  return (
    <div className='flex gap-4'>
      <FontSelector font={'font-kumbh'} />
      <FontSelector font={'font-roboto'} />
      <FontSelector font={'font-space'} />
    </div>
  );
};

export default Settings;
