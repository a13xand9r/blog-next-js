import Head from 'next/head'

type PropsType = {
    title?: string
    keywords?: string
    description?: string
}

export const CustomHead = ({title = 'Next App', keywords, description}: PropsType) => {
    return(
        <Head>
            <title>{title} | Blog</title>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
        </Head>
    )
}