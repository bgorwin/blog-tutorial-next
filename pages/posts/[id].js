import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import HeroBanner from "../../components/HeroBanner";

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export default function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title className='text-lg font-bold'>{postData.title}</title>
			</Head>
			<HeroBanner title={postData.title} />
			<article>
				<h1 className='text-white text-xl font-bold'>
					{postData.title}
				</h1>
				<div className='text-slate-500'>
					<Date dateString={postData.date} />
				</div>
				<div
					className='pt-5 text-white'
					dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
				/>
			</article>
		</Layout>
	);
}
