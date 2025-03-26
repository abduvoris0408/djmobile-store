import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const categories1 = [
	{
		id: 1,
		name: 'Iphone',
		image: '/Iphone.png',
	},
	{
		id: 2,
		name: 'Iphone',
		image: '/mini speakers.png',
	},
	{
		id: 3,
		name: 'Iphone',
		image: '/Ipad.png',
	},
	{
		id: 4,
		name: 'Iphone',
		image: '/headphones.png',
	},
	{
		id: 5,
		name: 'Iphone',
		image: '/Laptop.png',
	},
	{
		id: 6,
		name: 'Iphone',
		image: '/airpods.png',
	},
]
