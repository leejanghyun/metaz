export const MonoColor = {
  MONO_BLACK: '#1a1a1a',
  MONO_WHITE: '#FFFFFF',
  MONO_100: '#666666',
  MONO_800: '#b3b3b3',
} as const

export type MonoColorValue = ObjectValue<typeof MonoColor>

export const RedColor = {
  RED_900: '#FF0000',
  RED_800: '#DD2121',
  RED_700: '#D02E2E',
  RED_600: '#BC3C3C',
  RED_500: '#AD4747',
  RED_400: '#FF7272',
  RED_300: '#FFA2A2',
  RED_200: '#FFB9B9',
  RED_100: '#FFD9D9',
} as const

export type RedColorValue = ObjectValue<typeof RedColor>
