import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/kaguyalogo.png"></link>
        <meta
          name="description"
          content="Portfólio de Desenvolvedor web FullStack na stack javascript/Tyescript. Acompanhe as experiências profissionais, formações e saiba mais sobre Tiago Gonçalves."
        />
        <meta
          name="keywords"
          content="ReactJS, NodeJS, Typescript, JavaScript, NestJS, NextJS, ChakraUI, Graphql"
        />
        <meta name="author" content="Tiago Gonçalves de Castro" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
