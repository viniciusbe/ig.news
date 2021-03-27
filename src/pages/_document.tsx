import Document, { Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document{
    
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
                </Head>
                <body> 
                <Main></Main>
                <NextScript></NextScript>
                </body>
            </Html>
            )
    }
}


// É carregado apenas uma vez (comparável ao public/index no CRA)