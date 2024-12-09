import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import dayjs from 'dayjs'

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseReadableDate(date: string) {
  const readableDate = dayjs(date).format('MMM, DD YYYY')
  return readableDate
}
