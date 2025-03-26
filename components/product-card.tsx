import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
	product: {
		id: number
		name: string
		image: string
		rating?: number
		salePrice: number
		regularPrice: number
		slug?: string
	}
}

export default function ProductCard({ product }: ProductCardProps) {
	return (
		<Link
			href={`/product/${product.slug || product.id}`}
			className='border rounded-lg p-4 hover:shadow-md transition-shadow block'
		>
			<div className='relative h-48 mb-4'>
				<Image
					src={product.image || '/placeholder.svg'}
					alt={product.name}
					fill
					className='object-contain'
				/>
			</div>

			{product.rating && (
				<div className='flex mb-2 justify-center'>
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className={`w-4 h-4 ${
								i < product.rating
									? 'fill-yellow-400 text-yellow-400'
									: 'fill-gray-200 text-gray-200'
							}`}
						/>
					))}
				</div>
			)}

			<h3 className='font-medium text-sm mb-2 text-center'>
				{product.name}
			</h3>
			<div className='flex items-center justify-center gap-2'>
				<span className='text-orange-500 font-bold'>
					${product.salePrice.toFixed(2)}
				</span>
				<span className='text-gray-500 line-through text-sm'>
					${product.regularPrice.toFixed(2)}
				</span>
			</div>
		</Link>
	)
}
