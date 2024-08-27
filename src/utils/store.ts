import { atom, map } from 'nanostores';

export type Font = 'font-kumbh' | 'font-roboto' | 'font-space';
export const selectedFont = atom<Font>('font-kumbh');

export type ColorName = 'red' | 'cyan' | 'fucsia';
export const selectedColorName = atom<ColorName>('red');

export const color = {
  red: { background: 'bg-red-400', hexValue: '#F87070' },
  cyan: { background: 'bg-cyan-300', hexValue: '#70F3F8' },
  fucsia: { background: 'bg-fucsia-400', hexValue: '#D881F8' }
};

export type Time = 'pomodoro' | 'shortBreak' | 'longBreak';
export const selectedTime = atom<Time>('pomodoro');

export const times = {
  pomodoro: { settingsValue: 'pomodoroTime', label: 'pomodoro' },
  shortBreak: { settingsValue: 'shortBreakTime', label: 'short break' },
  longBreak: { settingsValue: 'longBreakTime', label: 'long break' }
};

export type Status = 'start' | 'resume' | 'pause';
export const selectedStatus = atom<Status>('start');

export const pomodoroTime = atom(25);
export const shortBreakTime = atom(5);
export const longBreakTime = atom(15);

export const isModalOpened = atom<boolean>(false);

export interface ISettings {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  colorName: ColorName;
  font: Font;
}

export const settings = map<ISettings>({
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  colorName: 'red',
  font: 'font-kumbh'
});
