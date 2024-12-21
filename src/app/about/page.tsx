// pages/about.tsx
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About | My Portfolio</title>
      </Head>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">About Me</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
          <Image
            src="/images/profile.jpg"
            alt="Profile Image"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div>
            <p className="mb-2">
              大学で情報工学を専攻し、Web開発に情熱を持っています。特にReact.jsやNext.jsを用いたフロントエンド開発が得意です。
            </p>
            <p className="mb-2">
              興味分野：Webアプリ開発、UI/UXデザイン、API統合
            </p>
            <p>プログラミング言語: JavaScript, TypeScript, C</p>
          </div>
        </div>
      </div>
    </>
  );
}
