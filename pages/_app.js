import "../styles/globals.css"
import Head from "next/head"
import { MoralisProvider } from "react-moralis"
import { Header } from "../components/Header"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="Buy and sell NFTs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <Header />
                <Component {...pageProps} />
            </MoralisProvider>
        </>
    )
}

export default MyApp
