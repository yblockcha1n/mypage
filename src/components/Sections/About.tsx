import { FC } from 'react';
import { AnimatedSection } from '../UI/AnimatedSection';

export const About: FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 md:px-8 relative">
      <AnimatedSection className="max-w-5xl mx-auto w-full">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-cyan-400">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-400">年齢</label>
                <p className="text-2xl font-light">16歳</p>
              </div>
              <div className="space-y-2">
                <label className="text-gray-400">興味分野</label>
                <p className="text-2xl font-light">ブロックチェーン<br />生成AI<br />基幹技術</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                13歳からブロックチェーン業界に参入し、
                複数プロジェクトへの参加と開発経験を積んだ後、
                最近は基幹技術について学習中
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};