// pages/index.tsx

import Head from "next/head";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ProjectCard from "./components/layout/ProjectCard";
import { projects } from "./lib/projects";
import { Project } from "./types/types";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | My Portfolio</title>
        <meta
          name="description"
          content="Discover my projects and skills in web development, machine learning, and more."
        />
      </Head>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl mb-8">
            私のプロジェクトとスキルを紹介しています。最新の技術を駆使して、ユーザーに価値を提供するアプリケーションを作成しています。
          </p>
          <Link href="/contact">
            お問い合わせ
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* プロジェクトセクション */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: Project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* フッターセクション（オプション） */}
      <footer className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
