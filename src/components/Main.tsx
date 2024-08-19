import Settings from './Settings';
import Header from './Header';
import { useStore } from '@nanostores/react';
import { selectedFont } from '../utils/store';

const Main = () => {
  const $selectedFont = useStore(selectedFont);

  return (
    <main className={`flex flex-col ${$selectedFont} items-center justify-center`}>
      <Header />
      <Settings />
    </main>
  );
};

export default Main;
