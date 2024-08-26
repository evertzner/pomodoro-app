import { selectedColorName, settings, color, type ColorName } from '../utils/store';
import { useStore } from '@nanostores/react';
import IconCheck from '../Icons/IconCheck';
import { useEffect } from 'react';

type ColorProps = {
  colorName: ColorName;
};

const ColorSelector = ({ colorName }: ColorProps) => {
  const $selectedColorName = useStore(selectedColorName);
  const $settings = useStore(settings);

  useEffect(() => {
    selectedColorName.set($settings.colorName);
  }, [$settings]);

  const selectColor = () => {
    selectedColorName.set(colorName);
  };

  const { background } = color[colorName];

  return (
    <button
      onClick={selectColor}
      className={`flex items-center justify-center ${background} p-2.5 rounded-full w-10 h-10 hover:outline hover:outline-1 hover:outline-offset-[5px] hover:outline-blue-50`}
    >
      {colorName === $selectedColorName && <IconCheck />}
    </button>
  );
};

export default ColorSelector;
