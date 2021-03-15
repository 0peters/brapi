import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID } from '../utils/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.svg" />
          <meta
            name="keywords"
            content="API, Desenvolvimento, Bovespa, Ibovespa, Negócios, Informações financeiras, Investimento, Investidor, Notícias de mercado, Pesquisa de ações, Avaliação de ações, notícias de negócios, economia, finanças, ferramentas de investimento, hipotecas, fundos mútuos, finanças pessoais, cotação, imóveis, aposentadoria, ações, ações, impostos , monitorar portfólio"
          />
          <meta name="theme-color" content="#52B788" />
          <meta name="og:title" content="brapi" />
          <meta name="og:type" content="website" />
          <meta name="og:image" content="https://brapi.ga/favicon.ico" />
          <meta
            name="og:description"
            lang="pt-BR"
            content="API ilimitada da IBOVESPA. Ajudamos desenvolvedores a construir o futuro das fintechs democratizando o acesso aos dados do mercado financeiro brasileiro."
          />
          <meta name="og:locale" content="pt-BR" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="google-site-verification"
            content="Gy5EFTeucGOTohOucovRJIzCaWPkQ1qWs3mktuSNyGw"
          />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
