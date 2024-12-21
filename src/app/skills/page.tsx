// pages/skills.tsx
import Head from "next/head";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | My Portfolio</title>
      </Head>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold mb-4">Skills</h1>
        <ul className="list-disc ml-6 space-y-2">
          <li>JavaScript, TypeScript, C</li>
          <li>React.js, Next.js, Node.js, Express.js</li>
          <li>MongoDB</li>
          <li>Git, GitHub, Vercel, Netlify</li>
          <li>API統合, UI/UXデザイン, テスト・デバッグ</li>
        </ul>
      </div>
    </>
  );
}
