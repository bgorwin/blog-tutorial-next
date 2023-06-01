import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Date from "../components/date";
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

			<section className='container '>
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
