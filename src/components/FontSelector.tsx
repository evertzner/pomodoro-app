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

export default FontSelector;
