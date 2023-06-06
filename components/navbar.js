import Link from "next/link";

export default function Navbar() {
	return (
		<nav className='bg-black border-b-2 border-gray-800 '>
			{/* Mobile Menu */}
			<div>
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
