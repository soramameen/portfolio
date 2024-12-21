// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/lib/projects";
import { Project } from "@/app/types/types";
type tParams = Promise<{ slug: string }>;
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(props: { params: tParams }) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { name, description, techStack, demoLink, githubLink, image } =
    project as Project;

  return (
    <div className="space-y-6 ">
      <h1 className="text-4xl font-bold">{name}</h1>
      {image && (
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-md object-contain"
          />
        </div>
      )}
      <p className="text-lg">{description}</p>
      {/* <div>
        <h2 className="text-2xl font-semibold">Role</h2>
        <p>{role}</p>
      </div> */}
      <div>
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      {/* {achievements.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <ul className="list-disc list-inside">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )} */}
      <div className="flex space-x-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Demo
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
          >
            View GitHub
          </a>
        )}
      </div>
      {project.slug === "newsquiz" && (
        <div>
          <article className="space-y-10 bg-gray-100 p-6 rounded-lg shadow-md">
            {/* 記事タイトル */}
            <header className="mb-4">
              <h1 className="text-3xl font-extrabold text-gray-800">
                Newsクイズアプリ - 開発ストーリー
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                近頃急速に進化する技術情報を効率よくキャッチアップするためのクイズアプリ
              </p>
            </header>

            {/* なぜ作ろうと思ったか？ */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-indigo-600">
                なぜ作ろうと思ったか？
              </h2>
              <p className="text-gray-700 leading-relaxed">
                近頃、技術の移り変わりや発達があまりにも早く、新しい技術に追いつくのが困難に感じていました。
                そこで、ニュース記事をクイズ形式で楽しみながら学習できる仕組みがあれば、日々のアップデートを効率よくできるのではと考えました。
              </p>
              <blockquote className="border-l-4 border-indigo-300 pl-4 italic text-gray-600">
                「新しい技術のキャッチアップを、いかに楽しく効率よく行うか？」
              </blockquote>
            </section>

            {/* 何の技術で作ったか？ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-600">
                何の技術で作ったか？
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                <li>
                  <strong>Next.js</strong>：
                  最近学んだ技術であり、APIの統合に慣れているため選択。SSR・SSGにより、高速で最適なUXを提供可能。
                </li>
                <li>
                  <strong>Vercel</strong>：
                  Next.jsとの相性が良く、デプロイもシンプルに行えるため採用。
                </li>
                <li>
                  <strong>OpenAI API</strong>：
                  以前から興味があり、クイズ生成など高度な処理を簡単に実現できるため。
                </li>
                <li>
                  <strong>NewsAPI</strong>：
                  有名なAPIであり、正確なニュース情報を取得可能。
                  ただし、無料プランではローカル環境のみの使用が前提であるため、現状は一部制限あり。
                </li>
                <li>
                  <strong>TypeScript</strong>：
                  型定義により、コードの可読性と保守性が向上。大規模化しても安心して開発を進められる。
                </li>
              </ul>
            </section>

            {/* 困難は？ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-indigo-600">
                困難は？
              </h2>
              <div className="space-y-2 text-gray-700 leading-relaxed">
                <p>
                  <strong>API①：APIキーの管理</strong>
                  <br />
                  最初はコード内にAPIキーを書き込んでしまい、公開リポジトリで危険性が発覚。
                  環境変数や<code>.gitignore</code>
                  による秘匿管理の大切さを学びました。
                </p>
                <p>
                  <strong>API②：Next.jsの特性</strong>
                  <br />
                  通常、APIでのデータ取得は<code>/api</code>
                  ディレクトリを利用するのがベストプラクティス。
                  しかし、libフォルダから直接fetchしておりエラー多発。
                  これを機にNext.jsのフォルダ構成を学び直し、次回からスムーズに進められるようになりました。
                </p>
                <p>
                  <strong>NewsAPI</strong>
                  <br />
                  デプロイ後に動作しない不具合が発生。
                  理由は無料版NewsAPIがローカル環境専用であったため。事前の情報収集の重要性を痛感しました。
                </p>
              </div>
            </section>

            {/* 学んだこと */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-indigo-600">
                学んだこと
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700 leading-relaxed">
                <li>APIの正しい使い方と、秘匿情報の管理方法</li>
                <li>Next.jsのフォルダ構成やベストプラクティス</li>
                <li>無料プランのAPI制約を事前に把握する重要性</li>
              </ul>
            </section>

            {/* こだわりポイント */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-indigo-600">
                こだわりポイント
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>OpenAI API</strong>
                を活用することで、リアルタイムに最新の情報をクイズ形式に生成。
                単なるニュース取得にとどまらず、最後には補足情報も加えることで
                学習効果をさらに高められるよう工夫しました。
              </p>
            </section>

            {/* これからやっていくポイント */}
            <section className="space-y-2">
              <h2 className="text-2xl font-semibold text-indigo-600">
                これからやっていくポイント
              </h2>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1">
                <li>
                  <strong>APIの検討：</strong>
                  NewsAPI無料プランの制約があるため、他のAPIへの移行を検討中。
                </li>
                <li>
                  <strong>ユーザーログイン機能：</strong>
                  クイズ履歴の保存・管理により、継続的な学習や振り返りが可能になるよう改善したい。
                </li>
              </ul>
            </section>
          </article>
        </div>
      )}
      <Link href="/" className="text-blue-500 hover:underline">
        ← Back to Projects
      </Link>
    </div>
  );
}
