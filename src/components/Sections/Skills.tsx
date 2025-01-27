import { FC } from 'react';
import { AnimatedSection } from '../UI/AnimatedSection';

interface SkillCategory {
  title: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'フロントエンド',
    skills: ['Vite', 'Next.js', 'React', 'TypeScript'],
  },
  {
    title: 'バックエンド',
    skills: ['Python', 'Node.js (ts-node)', 'Rust', 'C++'],
  },
  {
    title: 'クラウド/DB',
    skills: [
      'Gov Cloud (AWS)',
      'GCP',
      'Supabase',
      'Firebase',
    ],
  },
];

export const Skills: FC = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center px-4 md:px-8 relative py-20">
      <AnimatedSection className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div 
              key={category.title} 
              className="backdrop-blur-md bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 space-y-4"
            >
              <h3 className="text-xl font-semibold text-white/90">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="py-2 px-4 bg-white/5 rounded-lg text-gray-300 hover:text-white transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};