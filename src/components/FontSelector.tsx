import { selectedFont, type Font } from '../utils/store';
import { useStore } from '@nanostores/react';

type FontProps = {
  font: Font;
};

const FontSelector = ({ font }: FontProps) => {
  const $selectedFont = useStore(selectedFont);

  const selectFont = () => {
    selectedFont.set(font);
  };

  return (
    <button
      onClick={selectFont}
      className={`bg-blue-50 text-blue-900 flex justify-center ${font} p-2.5 rounded-full font-bold w-10 h-10 leading-none hover:outline hover:outline-1 hover:outline-offset-[5px] hover:outline-blue-50 ${font === $selectedFont ? 'bg-blue-950 text-white hover:outline-0' : ''}`}
    >
      Aa
    </button>
  );
};

export default FontSelector;
