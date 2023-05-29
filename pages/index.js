import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className='flex'>
				<div className='columns-2'>
					<Image
						src='/../public/images/profile.jpg'
						width={400}
						height={400}
					/>
				</div>
				<p>Hi, I'm Brent and I'm a Software Engineer!</p>
				<p>
					(This is a sample website - you’ll be building a site like
					this on{" "}
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>
					.)
				</p>
			</section>
		</Layout>
	);
}
