import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

export default function Posts() {
    return(
        <>
        <Head>
            <title>Posts | ignews</title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>28 de março de 2021</time>
                    <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
                    <p>
                    Neste post vamos mostrar como desenvolver um app no React Native para trabalhar 
                    com Mapas e Geolocalização.
                    </p>
                </a>
                <a href="#">
                    <time>28 de março de 2021</time>
                    <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
                    <p>
                    Neste post vamos mostrar como desenvolver um app no React Native para trabalhar 
                    com Mapas e Geolocalização.
                    </p>
                </a>
                <a href="#">
                    <time>28 de março de 2021</time>
                    <strong>Construindo App com Mapa usando React Native Maps e MapBox</strong>
                    <p>
                    Neste post vamos mostrar como desenvolver um app no React Native para trabalhar 
                    com Mapas e Geolocalização.
                    </p>
                </a>
            </div>
        </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post'),
    ], {
        fetch: ['post.title','post.content'],
        pageSize: 100,
        lang: 'pt-br'
    })

    console.log(response);

    return {
        props:{}
    }
}