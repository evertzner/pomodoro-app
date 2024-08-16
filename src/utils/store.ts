import { atom } from 'nanostores';

export type Font = 'font-kumbh' | 'font-roboto' | 'font-space';

export const selectedFont = atom<Font>('font-kumbh');
