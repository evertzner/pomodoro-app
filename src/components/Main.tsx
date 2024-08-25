import Settings from './Settings';
import Header from './Header';
import { useStore } from '@nanostores/react';
import { settings, isModalOpened } from '../utils/store';
import IconGear from '../Icons/IconGear';
import Selector from './Selector';

const Main = () => {
  const $settings = useStore(settings);
  const $isModalOpened = useStore(isModalOpened);

  return (
    <main
      className={`flex flex-col pt-8 pb-12 ${$settings.font} items-center  h-full gap-11 relative`}
    >
      <Header />
      <Selector />
      <button onClick={() => isModalOpened.set(true)}>
        <IconGear />
      </button>
      {$isModalOpened && <Settings />}
    </main>
  );
};

export default Main;
