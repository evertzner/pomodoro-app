import Modal from 'react-modal';
import Settings from './Settings';
import Header from './Header';
import { useStore } from '@nanostores/react';
import { selectedFont, isModalOpened } from '../utils/store';
import IconGear from '../Icons/IconGear';

const Main = () => {
  const $selectedFont = useStore(selectedFont);
  const $isModalOpened = useStore(isModalOpened);

  return (
    <main className={`flex flex-col ${$selectedFont} items-center justify-between h-full`}>
      <Header />
      <Modal
        portalClassName='absolute top-1/2 -translate-y-1/2'
        overlayClassName='contents'
        className='contents'
        isOpen={$isModalOpened}
        parentSelector={() => document.querySelector('main')}
      >
        <Settings />
      </Modal>
      <button onClick={() => isModalOpened.set(true)}>
        <IconGear />
      </button>
    </main>
  );
};

export default Main;
