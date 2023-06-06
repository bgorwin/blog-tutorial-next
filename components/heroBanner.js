import Image from "next/image";

export default function HeroBanner({ title }) {
	return (
		<div className='relative'>
			<Image
				src='/../public/images/joshua-sortino-71vAb1FXB6g-unsplash.jpg'
				width={1300}
				height={330}
				className='w-full h-96'
			></Image>
			<div className='absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
						{title}
					</h1>
				</div>
			</div>
		</div>
	);
}
