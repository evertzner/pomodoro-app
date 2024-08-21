import { atom, map } from 'nanostores';

export type Font = 'font-kumbh' | 'font-roboto' | 'font-space';
export const selectedFont = atom<Font>('font-kumbh');

export type Color = 'bg-red-400' | 'bg-cyan-300' | 'bg-fucsia-400';
export const selectedColor = atom<Color>('bg-red-400');

export const pomodoroTime = atom(25);
export const shortBreakTime = atom(5);
export const longBreakTime = atom(15);

export interface ISettings {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  font: Font;
  color: Color;
}

export const settings = map<ISettings>({
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  color: 'bg-red-400',
  font: 'font-kumbh'
});
