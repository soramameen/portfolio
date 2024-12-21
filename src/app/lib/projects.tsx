// lib/projects.ts

import { Project } from "../types/types";

export const projects: Project[] = [
  {
    slug: "newsquiz",
    name: "ニュースクイズアプリ",
    description: "最新のニュース記事をクイズ形式で提供するアプリケーション。",
    techStack: ["Next.js", "NewsAPI", "OpenAI API", "Tailwind CSS", "Vercel"],
    demoLink: "https://www.snapquiz.jp/",
    githubLink: "https://github.com/soramameen/it-quiz-app",
    image: "/images/news.png",
  },
  {
    slug: "affiliatebook",
    name: "UniStudyGuide!",
    description: "おすすめの参考書を紹介するアフィリエイトアプリ。",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoLink: "hhttps://www.unistudyguide.com/",
    githubLink: "https://github.com/soramameen/my-study-app",
    image: "/images/book.png",
  },

  {
    slug: "profile-management-system",
    name: "名簿管理プログラム",
    description:
      "このプログラムは、大学の授業で作成したものです。ユーザーのプロフィールを読み込み、保存、検索、ソート、削除などの機能を提供します。",
    techStack: [
      "C",
      "Standard Library",
      "File I/O",
      "Dynamic Memory Allocation",
    ],
    demoLink: "https://example.com/profile-management-system-demo", // 必要に応じて実行例のURLを追加
    githubLink: "https://github.com/soramameen/c_profile", // GitHubリポジトリのURLを追加
    image: "/images/cprogramming.png", // プロジェクトのスクリーンショットや関連画像を追加
  },
];
