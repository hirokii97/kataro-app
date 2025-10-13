import Layout from "@/lib/components/layout/Layout";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import ModalLayout from "@/lib/components/layout/ModalLayout";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  const isModalPage = router.pathname === "/[topic]";

  const ModalComponent = isModalPage ? Component : React.Fragment;

  const HomeComponent = !isModalPage ? Component : React.Fragment;

  return (
    <>
      <Head>
        <title>KATARO - あなたの心を語るための質問集</title>
        <meta
          name="description"
          content="仕事、恋愛、趣味など、9つの話題から選ばれた質問で、会話を深めるきっかけを提供します。何から話せばいいかわからない時に。"
        />

        {/* Open Graph Protocol (SNSシェア用) の設定 */}
        <meta
          property="og:title"
          content="KATARO - あなたの心を語るための質問集"
        />
        <meta
          property="og:description"
          content="仕事、恋愛、趣味など、9つの話題から選ばれた質問で、会話を深めるきっかけを提供します。"
        />
        <meta property="og:url" content="https://kataro-app.vercel.app/og-image.png" />
        <meta property="og:site_name" content="KATARO" />
        {/* OGP画像の設定（/publicフォルダにog-image.pngを配置） */}
        <meta
          property="og:image"
          content="https://kataro-app.vercel.app/og-image.png"
        />
      </Head>
      <Layout>
        {/* 画面1 (HomeComponent) の表示 */}
        {/* 画面1は常に裏側でレンダリングされている状態にする */}
        {isModalPage && <HomeComponent {...pageProps} key={router.route} />}
        {!isModalPage && <Component {...pageProps} key={router.route} />}

        {/* Modal の表示 */}
        <ModalLayout isOpen={isModalPage}>
          <ModalComponent {...pageProps} key={router.route} />
        </ModalLayout>
      </Layout>
    </>
  );
}

export default MyApp;
