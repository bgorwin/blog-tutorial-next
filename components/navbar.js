import Link from "next/link";

export default function Navbar() {
	return (
		<nav className='bg-black border-b-2 border-gray-800'>
			<div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
				<div className='relative flex items-center justify-between h-16'>
					<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
						<button
							type='button'
							className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
						>
							<span className='sr-only'>Open main menu</span>
							{/* Add your menu icon */}
						</button>
					</div>
					<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
						<div className='flex-shrink-0 flex items-center'>
							{/* Add your logo or brand */}
						</div>
						<div className='hidden sm:block sm:ml-6'>
							<div className='flex space-x-4'>
								<Link
									href='/'
									className='text-white hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
								>
									Home
								</Link>
								{/* Add more navigation links as needed */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Mobile Menu */}
			<div className='sm:hidden'>
				<div className='px-2 pt-2 pb-3 space-y-1'>
					<Link
						href='/'
						className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
					>
						Home
					</Link>
					{/* Add more mobile menu links as needed */}
				</div>
			</div>
		</nav>
	);
}
