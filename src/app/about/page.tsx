// pages/about.tsx

import Head from "next/head";
import Image from "next/image";
import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaDatabase,
  FaPlane,
  FaSwimmer,
  FaChess,
  FaCogs,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

export default function About() {
  return (
    <>
      <Head>
        <title>About | My Portfolio</title>
        <meta
          name="description"
          content="Learn more about me, my skills, interests, and what drives me."
        />
      </Head>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          {/* プロフィール画像 */}
          <div className="flex-shrink-0">
            <Image
              src="/images/profile.jpg" // 実際の画像パスに置き換えてください
              alt="Profile Image"
              width={200}
              height={200}
              className="rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* プロフィール情報 */}
          <div className="flex-grow">
            <p className="text-lg text-gray-700 mb-4">
              現在，岡山大学で情報工学を専攻しており，Web開発に情熱を持っています．特にNext.jsを用いたフロントエンド開発に熱中しており，最新の技術を駆使してユーザーフレンドリーなアプリケーションを作成することを目指しています．
              chatGPT Plus，GitHubCopilot
              Proユーザーであり，フルに活用してアプリ開発をしております．
            </p>
            {/* 興味分野 */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                興味分野
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="flex items-center mb-1">
                  <FaReact className="text-blue-500 mr-2" />
                  Webアプリ開発（特にフロントエンド）
                </li>
                <li className="flex items-center mb-1">
                  <FaCogs className="text-green-500 mr-2" />
                  機械学習、AI
                </li>
              </ul>
            </div>
            {/* プログラミング言語 */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                プログラミング言語
              </h2>
              <div className="flex space-x-4">
                <span className="flex items-center">
                  <FaJsSquare className="text-yellow-500 mr-1" />
                  JavaScript
                </span>
                <span className="flex items-center">
                  <SiTypescript className="text-blue-600 mr-1" />
                  TypeScript
                </span>
                <span className="flex items-center">
                  <FaPython className="text-blue-400 mr-1" />
                  Python
                </span>
              </div>
            </div>
            {/*フレームワーク*/}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                フレームワーク
              </h2>
              <div className="flex space-x-4">
                <span className="flex items-center">
                  <FaJsSquare className="text-yellow-500 mr-1" />
                  React(ライブラリ)
                </span>
                <span className="flex items-center">
                  <SiNextdotjs className="text-blue-600 mr-1" />
                  Next.js
                </span>
                <span className="flex items-center">Tailwind CSS</span>
                <span className="flex items-center">
                  Django (触ったことがある程度)
                </span>
              </div>
            </div>
            {/* これからしたいこと */}
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                これからしたいこと
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="flex items-center mb-1">
                  <FaDatabase className="text-purple-500 mr-2" />
                  データベース
                </li>
                <li className="flex items-center mb-1">
                  <FaCogs className="text-green-500 mr-2" />
                  AIを用いたアプリ開発
                </li>
              </ul>
            </div>
            {/* 趣味 */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                趣味
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li className="flex items-center mb-1">
                  <FaCogs className="text-indigo-500 mr-2" />
                  アプリ開発
                </li>
                <li className="flex items-center mb-1">
                  <FaPlane className="text-blue-300 mr-2" />
                  海外旅行
                </li>
                <li className="flex items-center mb-1">
                  <FaSwimmer className="text-blue-600 mr-2" />
                  サウナ
                </li>
                <li className="flex items-center mb-1">
                  <FaChess className="text-gray-600 mr-2" />
                  麻雀
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
