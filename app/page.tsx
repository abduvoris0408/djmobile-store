'use client'
import ProductCard from '@/components/product-card'
import { categories1 } from '@/lib/utils'
import {
	ArrowRight,
	ChevronRight,
	Heart,
	Search,
	ShoppingBag,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('https://dummyjson.com/products?limit=20')
			.then(res => res.json())
			.then(data => setProducts(data.products))
			.catch(error => console.error('Error fetching products:', error))
	}, [])

	return (
		<div className='min-h-screen flex flex-col '>
			<div className='hidden md:flex justify-between items-center py-2 px-4 text-sm border-b container mx-auto w-[87%]'>
				<div className='flex items-center gap-4'>
					<span>+99 891 101 11 11</span>
					<span>|</span>
					<span>Store location</span>
				</div>
				<div>
					<span>Tell a friend about DJI & get 20% off</span>
				</div>
				<div className='flex items-center gap-2'>
					<select className='bg-transparent border-none text-sm focus:outline-none'>
						<option>USD</option>
						<option>EUR</option>
						<option>GBP</option>
					</select>
					<span>|</span>
					<Link href='/' className='hover:underline'>
						Log in
					</Link>
					<span>/</span>
					<Link href='/' className='hover:underline'>
						Sign up
					</Link>
				</div>
			</div>

			<header className='py-4 px-4 md:px-8 border-b'>
				<div className='max-w-7xl mx-auto flex justify-between items-center'>
					<Link href='/' className='flex items-center gap-2'>
						<div className='relative w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center'>
							<div className='absolute w-7 h-7 rounded-full border-2 border-white'></div>
						</div>
						<div className='font-bold text-xl'>
							<span className='text-orange-500'>DJI</span>
							<div className='text-xs font-normal text-gray-600'>
								MOBILE STORE
							</div>
						</div>
					</Link>

					<nav className='hidden md:flex items-center gap-6'>
						<Link href='/' className='font-medium'>
							HOME
						</Link>
						<Link
							href='/'
							className='font-medium flex items-center'
						>
							ELECTRONICS{' '}
							<ChevronRight className='w-4 h-4 ml-1' />
						</Link>
						<Link
							href='/'
							className='font-medium flex items-center'
						>
							BLOG <ChevronRight className='w-4 h-4 ml-1' />
						</Link>
						<Link
							href='/'
							className='font-medium flex items-center'
						>
							PAGES <ChevronRight className='w-4 h-4 ml-1' />
						</Link>
						<Link href='/' className='font-medium'>
							CONTACT
						</Link>
					</nav>

					<div className='flex items-center gap-4'>
						<button aria-label='Search'>
							<Search className='w-5 h-5' />
						</button>
						<button aria-label='Wishlist'>
							<Heart className='w-5 h-5' />
						</button>
						<button aria-label='Cart' className='relative'>
							<ShoppingBag className='w-5 h-5' />
							<span className='absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
								3
							</span>
						</button>
						<button className='md:hidden' aria-label='Menu'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<line x1='3' y1='12' x2='21' y2='12'></line>
								<line x1='3' y1='6' x2='21' y2='6'></line>
								<line x1='3' y1='18' x2='21' y2='18'></line>
							</svg>
						</button>
					</div>
				</div>
			</header>

			<main>
				{/* Hero Section */}
				<section className='relative py-8 md:py-16 px-4 md:px-8 overflow-hidden'>
					<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center'>
						<div className='space-y-6'>
							<div className='inline-block px-4 py-1 bg-orange-100 text-orange-500 font-medium rounded-full'>
								SALE UP TO 30% OFF
							</div>
							<h1 className='text-4xl md:text-5xl font-bold text-gray-900'>
								Apple Watch Series
							</h1>
							<p className='text-gray-600'>
								Featured packed at a better value than ever
								powerful sensors to monitor your fitness
							</p>
							<Link
								href='/'
								className='inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors'
							>
								Shop Now <ChevronRight className='w-4 h-4' />
							</Link>
						</div>
						<div className='relative h-[300px] md:h-[400px]'>
							<Image
								src='/Apple watch.png'
								alt='Apple Watch Collection'
								fill
								className='object-contain'
								priority
							/>
						</div>
					</div>

					{/* Pagination Dots */}
					<div className='flex justify-center gap-2 mt-8'>
						<button className='w-2 h-2 rounded-full bg-orange-500'></button>
						<button className='w-2 h-2 rounded-full bg-gray-300'></button>
					</div>
				</section>

				{/* Trending Categories */}
				<section className='py-12 px-4 md:px-8'>
					<div className='max-w-7xl mx-auto'>
						<h2 className='text-2xl font-bold mb-8'>
							Trending Categories
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
							{categories1.map((category, id) => (
								<Link
									key={id}
									href={'/'}
									className='flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow'
								>
									<div className='w-24 h-24 relative mb-4'>
										<Image
											src={
												category.image ||
												'/placeholder.svg'
											}
											alt={category.name}
											fill
											className='object-contain'
										/>
									</div>
									<span className='text-sm font-medium'>
										{category.name}
									</span>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Featured Products */}
				<section className='py-12 px-4 md:px-8 bg-gray-50'>
					<h2 className='text-2xl font-bold mb-8 text-center'>
						Products
					</h2>
					<div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-6'>
						{products.map(product => (
							<Link
								key={product.id}
								href={`/${product.id}`}
								className='bg-white p-6 rounded-lg flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition'
							>
								<div className='uppercase text-sm font-medium text-gray-500 mb-2'>
									{product.category.toUpperCase()}
								</div>
								<h3 className='text-xl font-medium mb-4'>
									{product.title}
								</h3>
								<div className='relative h-40 w-full'>
									<Image
										src={
											product.thumbnail ||
											'/placeholder.svg'
										}
										alt={product.title}
										fill
										className='object-contain'
									/>
								</div>
								<span className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors mt-4'>
									View Details
								</span>
							</Link>
						))}
					</div>
				</section>
				{/* Latest Products */}
				<section className='py-12 px-4 md:px-8'>
					<div className='max-w-7xl mx-auto'>
						<div className='flex justify-between items-center mb-8'>
							<h2 className='text-2xl font-bold'>
								Latest Products
							</h2>
							<Link
								href='/'
								className='text-gray-600 hover:text-orange-500 flex items-center gap-1'
							>
								View all products{' '}
								<ArrowRight className='w-4 h-4' />
							</Link>
						</div>

						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
							{latestProducts.map(product => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					</div>
				</section>

				{/* Discount Banner */}
				<section className='py-12 px-4 md:px-8 bg-gray-50'>
					<div className='max-w-7xl mx-auto'>
						<div className='grid md:grid-cols-2 gap-8 items-center'>
							<div className='text-center md:text-left'>
								<div className='inline-block px-4 py-1 bg-orange-500 text-white font-medium rounded-md mb-4'>
									Hurry Up!
								</div>
								<h2 className='text-3xl md:text-4xl font-bold mb-6'>
									Up To 20% Discount
									<br />
									Check it Out
								</h2>

								{/* Countdown Timer */}
								<div className='flex justify-center md:justify-start gap-4 mb-8'>
									<div className='bg-white p-3 rounded-md w-16 text-center'>
										<div className='text-xl font-bold'>
											310
										</div>
										<div className='text-xs text-gray-500'>
											DAYS
										</div>
									</div>
									<div className='bg-white p-3 rounded-md w-16 text-center'>
										<div className='text-xl font-bold'>
											06
										</div>
										<div className='text-xs text-gray-500'>
											HRS
										</div>
									</div>
									<div className='bg-white p-3 rounded-md w-16 text-center'>
										<div className='text-xl font-bold'>
											34
										</div>
										<div className='text-xs text-gray-500'>
											MINS
										</div>
									</div>
									<div className='bg-white p-3 rounded-md w-16 text-center'>
										<div className='text-xl font-bold'>
											08
										</div>
										<div className='text-xs text-gray-500'>
											SEC
										</div>
									</div>
								</div>

								<Link
									href='/'
									className='inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors'
								>
									Shop Now
								</Link>
							</div>

							<div className='relative h-[300px] md:h-[400px]'>
								<Image
									src='/Big iphone.png'
									alt='iPhone Discount'
									fill
									className='object-contain'
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Popular Products */}
				<section className='py-12 px-4 md:px-8'>
					<div className='max-w-7xl mx-auto'>
						<div className='flex justify-between items-center mb-8'>
							<h2 className='text-2xl font-bold'>
								Popular Products
							</h2>
							<div className='flex gap-4'>
								<button className='text-orange-500 font-medium hover:underline'>
									Accessories
								</button>
								<button className='text-gray-600 hover:text-orange-500 hover:underline'>
									iPhone
								</button>
								<button className='text-gray-600 hover:text-orange-500 hover:underline'>
									Laptop
								</button>
							</div>
						</div>

						{/* Top Row */}
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6'>
							{popularProducts.slice(0, 4).map(product => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>

						{/* Bottom Row */}
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
							{popularProducts.slice(4, 8).map(product => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					</div>
				</section>

				{/* Blog & Events */}
				<section className='py-12 px-4 md:px-8 bg-gray-50'>
					<div className='max-w-7xl mx-auto'>
						<div className='flex justify-between items-center mb-8'>
							<h2 className='text-2xl font-bold'>
								Blog & Events
							</h2>
							<Link
								href='/blog'
								className='text-gray-600 hover:text-orange-500 flex items-center gap-1'
							>
								View all Events{' '}
								<ArrowRight className='w-4 h-4' />
							</Link>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
							{blogPosts.map(post => (
								<Link
									key={post.id}
									href={`/blog/${post.slug}`}
									className='block bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow'
								>
									<div className='relative h-60'>
										<Image
											src={
												post.image || '/placeholder.svg'
											}
											alt={post.title}
											fill
											className='object-cover'
										/>
									</div>
									<div className='p-4'>
										<div className='flex items-center gap-2 text-sm text-gray-500 mb-2'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-4 w-4'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
												/>
											</svg>
											<span>{post.date}</span>
										</div>
										<h3 className='font-medium'>
											{post.title}
										</h3>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Apple Devices Banner */}
				<section className='py-12 px-4 md:px-8'>
					<div className='max-w-7xl mx-auto'>
						<div className='bg-gray-50 rounded-lg p-8'>
							<div className='grid md:grid-cols-2 gap-8 items-center'>
								<div className='relative h-[250px]'>
									<Image
										src='/device.png'
										alt='Apple Devices'
										fill
										className='object-contain'
									/>
								</div>
								<div className='text-center md:text-left'>
									<div className='text-sm font-medium text-gray-500 mb-2'>
										BIG DISCOUNT
									</div>
									<h2 className='text-2xl md:text-3xl font-bold mb-4'>
										Must Buying Apple Devices
									</h2>
									<div className='text-xl font-bold text-orange-500 mb-6'>
										$450.00
									</div>
									<Link
										href='/shop/apple'
										className='inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors'
									>
										Shop Now
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className='py-12 px-4 md:px-8 bg-white border-t'>
					<div className='max-w-7xl mx-auto'>
						<div className='grid md:grid-cols-3 gap-8'>
							{/* Free Delivery */}
							<div className='flex flex-col items-center text-center'>
								<div className='w-16 h-16 mb-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='1'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-full h-full'
									>
										<path d='M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z'></path>
										<path d='M3 6V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2'></path>
										<path d='M12 10v8'></path>
										<path d='M8 14h8'></path>
									</svg>
								</div>
								<h3 className='text-lg font-bold mb-2'>
									Free Delivery
								</h3>
								<p className='text-gray-600 text-sm'>
									And free returns. Checkout for delivery
									date.
								</p>
							</div>

							{/* Pay Monthly */}
							<div className='flex flex-col items-center text-center'>
								<div className='w-16 h-16 mb-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='1'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-full h-full'
									>
										<circle cx='12' cy='12' r='10'></circle>
										<path d='M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8'></path>
										<path d='M12 18V6'></path>
									</svg>
								</div>
								<h3 className='text-lg font-bold mb-2'>
									Pay monthly at 0% APR
								</h3>
								<p className='text-gray-600 text-sm'>
									Choose to checkout with Apple Card monthly
									installments.
								</p>
							</div>

							{/* Personalize It */}
							<div className='flex flex-col items-center text-center'>
								<div className='w-16 h-16 mb-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='1'
										strokeLinecap='round'
										strokeLinejoin='round'
										className='w-full h-full'
									>
										<circle cx='12' cy='12' r='10'></circle>
										<path d='M12 16v-4'></path>
										<path d='M12 8h.01'></path>
									</svg>
								</div>
								<h3 className='text-lg font-bold mb-2'>
									Personalize It
								</h3>
								<p className='text-gray-600 text-sm'>
									Engrave your device with your name or a
									personal note.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className='bg-white border-t pt-12 pb-6'>
				<div className='max-w-7xl mx-auto px-4 md:px-8'>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
						{/* Contact Us */}
						<div>
							<h3 className='font-bold text-lg mb-4'>
								Contact Us
							</h3>
							<ul className='space-y-3 text-sm'>
								<li>Uzbekistan</li>
								<li>+998 91 01 01 01</li>
								<li>
									<a
										href='mailto:demo@exampledemo.com'
										className='hover:text-orange-500'
									>
										demo@exampledemo.com
									</a>
								</li>
								<li>DJI Demo Store</li>
								<li>No. 12345 Freedom Tashkent</li>
							</ul>
						</div>

						{/* Information */}
						<div>
							<h3 className='font-bold text-lg mb-4'>
								Information
							</h3>
							<ul className='space-y-3 text-sm'>
								<li>
									<Link
										href='/support'
										className='hover:text-orange-500'
									>
										Product Support
									</Link>
								</li>
								<li>
									<Link
										href='/checkout'
										className='hover:text-orange-500'
									>
										Checkout
									</Link>
								</li>
								<li>
									<Link
										href='/license'
										className='hover:text-orange-500'
									>
										License Policy
									</Link>
								</li>
								<li>
									<Link
										href='/affiliate'
										className='hover:text-orange-500'
									>
										Affiliate
									</Link>
								</li>
							</ul>
						</div>

						{/* Customer Service */}
						<div>
							<h3 className='font-bold text-lg mb-4'>
								Customer Service
							</h3>
							<ul className='space-y-3 text-sm'>
								<li>
									<Link
										href='/help'
										className='hover:text-orange-500'
									>
										Help Centre
									</Link>
								</li>
								<li>
									<Link
										href='/redeem'
										className='hover:text-orange-500'
									>
										Redeem Voucher
									</Link>
								</li>
								<li>
									<Link
										href='/contact'
										className='hover:text-orange-500'
									>
										Contact us
									</Link>
								</li>
								<li>
									<Link
										href='/policies'
										className='hover:text-orange-500'
									>
										Policies & Rules
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className='font-bold text-lg mb-4'>
								Download Our App
							</h3>
							<p className='text-sm mb-4'>
								Download our App & get extra 20% Discount on
								your first Order...!
							</p>
							<div className='flex flex-wrap gap-2'>
								<Link
									href='https://play.google.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Image
										src='/googleplay.svg'
										alt='Google Play'
										width={120}
										height={40}
										className='h-10 w-auto'
									/>
								</Link>
								<Link
									href='https://apps.apple.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Image
										src='/applestore.svg'
										alt='App Store'
										width={120}
										height={40}
										className='h-10 w-auto'
									/>
								</Link>
							</div>
						</div>
					</div>

					{/* Bottom Footer */}
					<div className='pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4'>
						<div className='flex items-center gap-2'>
							<div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='w-4 h-4'
								>
									<path d='M12 2L2 7l10 5 10-5-10-5z'></path>
									<path d='M2 17l10 5 10-5'></path>
									<path d='M2 12l10 5 10-5'></path>
								</svg>
							</div>
							<span className='text-sm text-gray-500'>
								Copyright © Team90Degree | Built with ❤️ by
								Team90Degree.
							</span>
						</div>

						<div className='flex gap-2'>
							<Image
								src='/placeholder.svg?height=30&width=40'
								alt='Visa'
								width={40}
								height={30}
								className='h-6 w-auto'
							/>
							<Image
								src='/placeholder.svg?height=30&width=40'
								alt='American Express'
								width={40}
								height={30}
								className='h-6 w-auto'
							/>
							<Image
								src='/placeholder.svg?height=30&width=40'
								alt='PayPal'
								width={40}
								height={30}
								className='h-6 w-auto'
							/>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

const latestProducts = [
	{
		id: 1,
		name: 'Latest Smart Watch',
		image: '/Latest watch.png',
		rating: 5,
		salePrice: 90.0,
		regularPrice: 100.0,
	},
	{
		id: 2,
		name: 'Apple MacBook Air M3',
		image: '/Mac.png',
		rating: 5,
		salePrice: 1099.0,
		regularPrice: 1199.0,
	},
	{
		id: 3,
		name: 'Homepod mini',
		image: '/speakers.png',
		rating: 4,
		salePrice: 54.0,
		regularPrice: 68.0,
	},
	{
		id: 4,
		name: 'Drou safe charger',
		image: '/charger.png',
		rating: 4,
		salePrice: 34.0,
		regularPrice: 52.0,
	},
	{
		id: 5,
		name: 'Home Entertainment',
		image: '/Entertainment.png',
		rating: 5,
		salePrice: 94.0,
		regularPrice: 113.0,
	},
]

const popularProducts = [
	{
		id: 1,
		name: 'Drou safe charger',
		image: '/charger.png',
		rating: 5,
		salePrice: 34.0,
		regularPrice: 52.0,
	},
	{
		id: 2,
		name: 'Security smart camera',
		image: '/Camera.png',
		rating: 5,
		salePrice: 850.0,
		regularPrice: 900.0,
	},
	{
		id: 3,
		name: 'iPhone 15 pro max',
		image: '/15pro.png',
		rating: 5,
		salePrice: 1099.0,
		regularPrice: 1199.0,
	},
	{
		id: 4,
		name: 'Latest Smart Watch',
		image: '/Latest watch.png',
		rating: 5,
		salePrice: 90.0,
		regularPrice: 100.0,
	},
	{
		id: 5,
		name: 'iPhone 14 pro max',
		image: '/14pro.png',
		rating: 5,
		salePrice: 999.0,
		regularPrice: 1499.0,
	},
	{
		id: 6,
		name: 'iPad mini Pro',
		image: '/Ipad.png',
		rating: 5,
		salePrice: 599.0,
		regularPrice: 750.0,
	},
	{
		id: 7,
		name: 'iPhone Lighting Cable',
		image: '/cabel.png',
		rating: 5,
		salePrice: 65.0,
		regularPrice: 80.0,
	},
	{
		id: 8,
		name: 'Homepod mini',
		image: '/mini speakers.png',
		rating: 5,
		salePrice: 54.0,
		regularPrice: 68.0,
	},
]

const blogPosts = [
	{
		id: 1,
		title: 'Music magnate headphone',
		slug: 'music-magnate-headphone',
		date: 'March 19 2025',
		image: '/Rectangle 17.png',
	},
	{
		id: 2,
		title: 'Macbook air labore at dolore',
		slug: 'macbook-air-labore-at-dolore',
		date: 'March 19 2025',
		image: '/Rectangle 18.png',
	},
	{
		id: 3,
		title: 'Ipsum available but the majority',
		slug: 'ipsum-available-but-the-majority',
		date: 'March 19 2025',
		image: '/Rectangle 19.png',
	},
]
