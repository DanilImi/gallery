import Head from "next/head"

type Props = {
	title: string
	pageUrl: string
	pageDescription: string
	keywords: string
}

export const SEO = ({ title, pageDescription, pageUrl, keywords }: Props) => {
	const seoUrl = `https://gallery.com${pageUrl}`

	return (
		<Head>
			<title>
				{title}
			</title>
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="description" content={pageDescription} property='og:description' />
			<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=2' />
			<meta name="keywords" content={keywords} />
			<meta content={seoUrl} property='og:url' />
			<meta content='website' property='og:type' />
		</Head>
	)
}