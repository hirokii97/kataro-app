import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="仕事、恋愛、趣味など、9つの話題から選ばれた質問で、会話を深めるきっかけを提供します。何から話せばいいかわからない時に。"
        />
        <meta name="apple-mobile-web-app-title" content="KATARO" />
        {/* Open Graph Protocol (SNSシェア用) の設定 */}
        <meta
          property="og:title"
          content="KATARO"
        />
        <meta
          property="og:description"
          content="仕事、恋愛、趣味など、9つの話題から選ばれた質問で、会話を深めるきっかけを提供します。"
        />
        <meta
          property="og:url"
          content="https://kataro-app.vercel.app/og-image.png"
        />
        <meta property="og:site_name" content="KATARO" />
        {/* OGP画像の設定（/publicフォルダにog-image.pngを配置） */}
        <meta
          property="og:image"
          content="https://kataro-app.vercel.app/og-image.png"
        />

        {/* favicon.icoへのリンク */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicons/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
