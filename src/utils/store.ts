import { atom } from 'nanostores';

export type Font = 'font-kumbh' | 'font-roboto' | 'font-space';

export const selectedFont = atom<Font>('font-kumbh');

export type Color = 'bg-red-400' | 'bg-cyan-300' | 'bg-fucsia-400';

export const selectedColor = atom<Color>('bg-red-400');
