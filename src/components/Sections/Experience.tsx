import { FC } from 'react';
import { AnimatedSection } from '../UI/AnimatedSection';

interface ExperienceItem {
  year: string;
  items: { text: string; indent?: boolean }[];
}

const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    year: '2025',
    items: [{ text: '基幹システムバックエンド開発(業務委託)', indent: false }],
  },
  {
    year: '2024',
    items: [
      { text: '暗号資産系システムの開発', indent: false },
      { text: '自動化ツール開発(業務委託)', indent: true },
    ],
  },
  {
    year: '2023',
    items: [
      { text: '某プロトコルのコントラ開発', indent: false },
      { text: 'MEVbot開発(準委任)', indent: true },
    ],
  },
];

const PERSONAL_EXPERIENCE: ExperienceItem[] = [
  {
    year: '2024',
    items: [
      { text: 'OSS AIモデルを用いてSNSマーケ支援', indent: false },
      { text: 'DEX/CEX botterとして市場探求と実践', indent: true },
    ],
  },
  {
    year: '2023',
    items: [{ text: 'Discord APIを用いた小規模コミュニティへ技術提供', indent: false }],
  },
];

export const Experience: FC = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center px-4 md:px-8 relative py-20">
      <AnimatedSection className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-cyan-400 mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-8">実務経験</h3>
            <div className="space-y-6">
              {PROFESSIONAL_EXPERIENCE.map((exp) => (
                <div 
                  key={exp.year} 
                  className="bg-zinc-950/50 rounded-2xl p-6 hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-2">{exp.year}</div>
                  <div className="space-y-2">
                    {exp.items.map((item, index) => (
                      <div 
                        key={index} 
                        className={`text-gray-300 ${item.indent ? 'ml-6' : ''}`}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-8">個人活動</h3>
            <div className="space-y-6">
              {PERSONAL_EXPERIENCE.map((exp) => (
                <div 
                  key={exp.year} 
                  className="bg-zinc-950/50 rounded-2xl p-6 hover:bg-zinc-900/50 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-2">{exp.year}</div>
                  <div className="space-y-2">
                    {exp.items.map((item, index) => (
                      <div 
                        key={index} 
                        className={`text-gray-300 ${item.indent ? 'ml-6' : ''}`}
                      >
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};