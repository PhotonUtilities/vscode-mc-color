/* eslint-disable @typescript-eslint/naming-convention */
export const Colors = {
  '0': '#000000',
  '1': '#0000AA',
  '2': '#00AA00',
  '3': '#00AAAA',
  '4': '#AA0000',
  '5': '#AA00AA',
  '6': '#FFAA00',
  '7': '#C6C6C6',
  '8': '#555555',
  '9': '#5555FF',
  'a': '#55FF55',
  'b': '#55FFFF',
  'c': '#ff5555',
  'd': '#ff55ff',
  'e': '#ffff55',
  'f': '#ffffff',
  'g': '#ddd605',
  'h': '#E3D4D1',
  'i': '#CECACA',
  'j': '#443A3B',
  'm': '#971607',
  'n': '#B4684D',
  'p': '#DEB12D',
  'q': '#47A036',
  's': '#2CBAA8',
  't': '#21497B',
  'u': '#9A5CC6',
} as const

export const Special = {
  'l': 'BOLD',
  'o': 'ITALIC',
  'r': 'RESET'
} as const
export type SpecialUnion = typeof Special[keyof typeof Special]
export const SpecialValues: SpecialUnion[] = Object.values(Special)