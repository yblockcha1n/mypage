import { FC, useState, useEffect } from 'react';
import { AnimatedSection } from '../UI/AnimatedSection';
import { useTypingAnimation } from '../../hooks/useTypingAnimation';

export const Hero: FC = () => {
  const [iAmDone, setIAmDone] = useState(false);
  const { text: iAmText, isTyping: isTypingIAm } = useTypingAnimation(
    ['I am'],
    30,
    50,
    Infinity
  );

  const { text: nameText, isTyping: isTypingName } = useTypingAnimation(
    ['yblockchain_', 'Y2'],
    50,
    1,
    2000
  );

  useEffect(() => {
    if (iAmText === 'I am') {
      const timer = setTimeout(() => setIAmDone(true), 500);
      return () => clearTimeout(timer);
    }
  }, [iAmText]);

  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden px-4 md:px-8">
      <AnimatedSection className="max-w-5xl mx-auto w-full md:translate-y-0">
        <div className="space-y-4">
          <p className="text-cyan-400 text-xl tracking-wider">Hello_</p>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tight">
            <div className="flex items-center">
              <span>{iAmText}</span>
              {!iAmDone && (
                <span className={`ml-1 inline-block w-[3px] h-12 md:h-16 bg-cyan-400 ${
                  isTypingIAm ? 'animate-blink' : ''
                }`}></span>
              )}
            </div>
            {iAmDone && (
              <div className="flex items-center mt-2">
                <span>{nameText}</span>
                <span className={`ml-1 inline-block w-[3px] h-12 md:h-16 bg-cyan-400 ${
                  isTypingName ? 'animate-blink' : ''
                }`}></span>
              </div>
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg">
            16歳 / ブロックチェーン / システム開発
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};