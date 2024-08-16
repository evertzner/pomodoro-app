import Settings from './Settings';
import { useStore } from '@nanostores/react';
import { selectedFont } from '../utils/store';

const Main = () => {
  const $selectedFont = useStore(selectedFont);

  return (
    <main className={`flex flex-col ${$selectedFont}`}>
      Hello World
      <Settings />
    </main>
  );
};

export default Main;
