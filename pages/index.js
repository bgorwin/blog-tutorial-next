import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className='flex flex-wrap items-center justify-around container h-[25rem]'>
				<div className='w-full lg:w-1/2 md:text-center sm:text-center'>
					<h1 className='text-4xl'>
						<span className='text-7xl'>B</span>rents<br></br> Blog
					</h1>
				</div>
				<div className='w-full lg:w-1/2'>
					<Image
						src='/../public/images/joshua-sortino-71vAb1FXB6g-unsplash.jpg'
						width={700}
						height={700}
						class='w-full'
					></Image>
				</div>
			</section>

			<section className='container'>
				<h2 className='text-xl pb-4'>Blog</h2>
				<ul className='list-inside '>
					{allPostsData.map(({ id, date, title }) => (
						<li className='mb-3 list-inside' key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							<small className='text-gray-500'>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
