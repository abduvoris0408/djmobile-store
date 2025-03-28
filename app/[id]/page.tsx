'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProductDetail = () => {
	const { id } = useParams()
	const [product, setProduct] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!id) return
		fetch(`https://dummyjson.com/products/${id}`)
			.then(res => res.json())
			.then(data => {
				setProduct(data)
				setLoading(false)
			})
			.catch(error => {
				console.error('Error fetching product:', error)
				setLoading(false)
			})
	}, [id])

	if (loading) return <p className='text-center py-10'>Loading...</p>
	if (!product) return <p className='text-center py-10'>Product not found.</p>

	return (
		<section className='py-12 px-4 md:px-8'>
			<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'>
				{/* Mahsulot rasmi */}
				<div className='relative w-full h-96'>
					<Image
						src={product?.thumbnail || '/placeholder.svg'}
						alt={product?.title || 'Product Image'}
						fill
						className='object-contain rounded-lg shadow-md'
					/>
				</div>

				{/* Mahsulot tafsilotlari */}
				<div>
					<h1 className='text-3xl font-bold mb-4'>
						{product?.title}
					</h1>
					<p className='text-gray-600 mb-4'>{product?.description}</p>

					<div className='mb-6'>
						<p className='text-lg'>
							<strong>Brand:</strong> {product?.brand}
						</p>
						<p className='text-lg'>
							<strong>Category:</strong> {product?.category}
						</p>
						<p className='text-lg'>
							<strong>SKU:</strong> {product?.sku}
						</p>
						<p className='text-lg text-orange-500 font-semibold'>
							${product?.price}{' '}
							<span className='text-gray-500 text-sm'>
								({product?.discountPercentage}% off)
							</span>
						</p>
						<p
							className={`text-lg font-semibold ${
								product?.availabilityStatus === 'Low Stock'
									? 'text-red-500'
									: 'text-green-600'
							}`}
						>
							{product?.availabilityStatus}
						</p>
					</div>

					{/* Kafolat va Yetkazib berish */}
					<div className='bg-gray-100 p-4 rounded-lg mb-6'>
						<p>
							<strong>Warranty:</strong>{' '}
							{product?.warrantyInformation}
						</p>
						<p>
							<strong>Shipping:</strong>{' '}
							{product?.shippingInformation}
						</p>
						<p>
							<strong>Return Policy:</strong>{' '}
							{product?.returnPolicy}
						</p>
					</div>

					{/* Buyurtma tugmasi */}
					<button className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg'>
						Add to Cart
					</button>
				</div>
			</div>

			{/* Sharhlar */}
			<div className='max-w-7xl mx-auto mt-12'>
				<h2 className='text-2xl font-semibold mb-4'>
					Customer Reviews
				</h2>
				<div className='bg-white p-6 rounded-lg shadow-md'>
					{product?.reviews?.length > 0 ? (
						product.reviews.map((review, index) => (
							<div
								key={index}
								className='border-b border-gray-200 py-4'
							>
								<p className='font-semibold'>
									{review.reviewerName} ⭐ {review.rating}/5
								</p>
								<p className='text-gray-600'>
									{review.comment}
								</p>
							</div>
						))
					) : (
						<p className='text-gray-500'>No reviews yet.</p>
					)}
				</div>
			</div>
		</section>
	)
}

export default ProductDetail
