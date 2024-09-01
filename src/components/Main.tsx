import Settings from './Settings';
import Header from './Header';
import { useStore } from '@nanostores/react';
import { settings, isModalOpened } from '../utils/store';
import IconGear from '../Icons/IconGear';
import Selector from './Selector';
import Clock from './Clock';

const Main = () => {
  const $settings = useStore(settings);
  const $isModalOpened = useStore(isModalOpened);

  return (
    <main
      className={`grid grid-rows-[max-content_max-content_max-content_1fr] justify-center pt-8 pb-12 ${$settings.font}  h-full gap-11 relative`}
    >
      <Header />
      <Selector />
      <Clock />
      <button className='self-end place-self-center' onClick={() => isModalOpened.set(true)}>
        <IconGear />
      </button>
      {$isModalOpened && <Settings />}
    </main>
  );
};

export default Main;
