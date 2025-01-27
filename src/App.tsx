import { useEffect, useRef, useState } from 'react';
import { Github, Twitter } from 'lucide-react';

const useIntersectionObserver = (options = {}): [React.RefObject<HTMLDivElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const [targetRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px',
  });

  return (
    <div
      ref={targetRef}
      className={`transform transition-all duration-1000 ${
        isIntersecting
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  // ナビゲーション状態の管理

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* サイドナビゲーション */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 space-y-6 z-50">
        <a
          href="#home"
          className={`block w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === 'home'
              ? 'bg-cyan-400 scale-150'
              : 'bg-white/50 hover:scale-150'
          }`}
        />
        <a
          href="#about"
          className={`block w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === 'about'
              ? 'bg-cyan-400 scale-150'
              : 'bg-white/50 hover:scale-150'
          }`}
        />
        <a
          href="#skills"
          className={`block w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === 'skills'
              ? 'bg-cyan-400 scale-150'
              : 'bg-white/50 hover:scale-150'
          }`}
        />
      </nav>

      {/* メインコンテンツ */}
      <div className="relative">
        {/* ヒーローセクション */}
        <section id="home" className="h-screen flex items-center relative overflow-hidden px-4 md:px-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
          
          <AnimatedSection className="max-w-5xl mx-auto w-full">
            <div className="space-y-4">
              <p className="text-cyan-400 text-xl tracking-wider">Hello_</p>
              <h1 className="text-4xl md:text-8xl font-bold tracking-tight">
                I am
                <span className="block mt-2">yblockchain_</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-lg">
               16歳 / ブロックチェーン / システム開発
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* プロフィールセクション */}
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
                    ブロックチェーン技術に魅了され、日々新しい技術を学んでいます。
                    若くして暗号通貨とブロックチェーンの世界に飛び込み、
                    Web3の未来を創造することに情熱を注いでいます。
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* スキルセクション */}
        <section id="skills" className="min-h-screen flex items-center px-4 md:px-8 relative">
          <AnimatedSection className="max-w-5xl mx-auto w-full">
            <h2 className="text-3xl font-bold text-cyan-400 mb-12">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {['Solidity', 'JavaScript', 'React', 'Node.js', 'Web3.js', 'Ethereum'].map((skill) => (
                <div 
                  key={skill}
                  className="group relative overflow-hidden bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="relative text-xl font-light">{skill}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* ソーシャルリンク */}
        <div className="fixed bottom-8 right-8 flex space-x-6">
          <a 
            href="https://github.com/yblockcha1n" 
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://twitter.com/yblockchain_" 
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;