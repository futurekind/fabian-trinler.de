import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from 'utils/styles';

const GlobalStyle = createGlobalStyle`
     html {
        font-size: 100%;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        margin: 0;
        background-color: ${colors.pink};
        font-family: ${fonts.primary};
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
`;

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Source+Serif+Pro:wght@300;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
