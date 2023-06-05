import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import HeroBanner from "./heroBanner";

const name = "Brent Gorwin";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
	return (
		<>
			<Navbar />
			<div className='bg-gray-950 h-screen'>
				<Head>
					<link rel='icon' href='/favicon.ico' />
					<meta
						name='description'
						content='Learn how to build a personal website using Next.js'
					/>
					<meta
						property='og:image'
						content={`https://og-image.vercel.app/${encodeURI(
							siteTitle
						)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					/>
					<meta name='og:title' content={siteTitle} />
					<meta name='twitter:card' content='summary_large_image' />
				</Head>
				<HeroBanner />
				<main className='container mx-auto'>{children}</main>
				{!home && (
					<div className='container mx-auto mt-[50px]'>
						<Link className='text-gray-300' href='/'>
							← Back to home
						</Link>
					</div>
				)}
			</div>
		</>
	);
}
