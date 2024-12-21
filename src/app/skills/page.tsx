// pages/skills.tsx

import Head from "next/head";

import { IconType } from "react-icons";
import { Skill } from "../types/types";
import { skills } from "../lib/skills";

export default function Skills() {
  // カテゴリごとにスキルをグループ化
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: Skill[] });

  return (
    <>
      <Head>
        <title>Skills | My Portfolio</title>
        <meta name="description" content="私のスキルセットを紹介します。" />
      </Head>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Skills</h1>
        {Object.keys(groupedSkills).map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="space-y-4">
              {groupedSkills[category].map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  const Icon: IconType = skill.icon;
  return (
    <div className="flex items-center space-x-4">
      {/* アイコン */}
      <Icon className="text-3xl text-indigo-600" />
      {/* スキル名とプログレスバー */}
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-lg font-medium text-gray-700">
            {skill.name}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-700"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
