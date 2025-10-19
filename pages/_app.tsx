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
