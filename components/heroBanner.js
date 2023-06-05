import Image from "next/image";

export default function HeroBanner() {
	return (
		<div className='h-[550px]'>
			<Image
				width={1300}
				height={550}
				src='/../public/images/joshua-sortino-71vAb1FXB6g-unsplash.jpg'
				className='w-100'
			></Image>
		</div>
	);
}
