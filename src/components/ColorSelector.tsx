import { selectedColor, type Color } from '../utils/store';
import { useStore } from '@nanostores/react';
import IconCheck from '../Icons/IconCheck';

type ColorProps = {
  color: Color;
};

const ColorSelector = ({ color }: ColorProps) => {
  const $selectedColor = useStore(selectedColor);

  console.log('fonts', color, $selectedColor);

  const selectColor = () => {
    selectedColor.set(color);
  };

  return (
    <button
      onClick={selectColor}
      className={`flex items-center justify-center ${color} p-2.5 rounded-full w-10 h-10 hover:outline hover:outline-1 hover:outline-offset-[5px] hover:outline-blue-50`}
    >
      <IconCheck />
    </button>
  );
};

export default ColorSelector;
