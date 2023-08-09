import '../styles/globals.css';
import '../styles/layout.css';
import Head from 'next/head';
import Layout from '../components/layout';
import config from '../config';
import { useEffect, useState } from 'react';
import { AiFillGamepad } from 'react-icons/ai';

import { AiFillHeart } from 'react-icons/ai';

export default function render({ Component, pageProps }) {
    const [light, setLight] = useState(false);
    return (
        <>
            <Head>
                <script async src="https://arc.io/widget.min.js#j5S43cTu"></script>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />

                <meta property='title' content={config.metadata.title} />
                <meta property='description' content={config.metadata.description} />
                <meta name='keywords' content={config.metadata.keywords?.join(`, `)?.toLowerCase()} />

                <meta name="twitter:site" content={config.metadata.domainName} />
                <meta name="twitter:title" content={config.metadata.title} />
                <meta name="twitter:description" content={config.metadata.description} />
                <meta name="twitter:image" content={config.metadata.image} />

                <meta property='og:title' content={config.metadata.title} />
                <meta property='og:description' content={config.metadata.description} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={config.metadata.image} />

                <meta name='theme-color' content={config.metadata.color} />
                <title>{config.metadata.title}</title>
                <link rel='shortcut icon' type='image/x-icon' href={config.metadata.image} />
            </Head>
            <body>
                <Layout light={light} setLight={setLight} />
                <div className='set-dolphin'>
                    <button onClick={() => window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}>
                    <div>Website coded by Dolphin&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5h2v2H2V5zm4 4H4V7h2v2zm2 0H6v2H4v2H2v6h20v-6h-2v-2h-2V9h2V7h2V5h-2v2h-2v2h-2V7H8v2zm0 0h8v2h2v2h2v4H4v-4h2v-2h2V9zm2 4H8v2h2v-2zm4 0h2v2h-2v-2z"/></svg>&nbsp;!!!</div>
                    </button>
                </div>
                <Component {...pageProps} light={light} /> 
            </body>
        </>
    );
};
