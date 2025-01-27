import { useState, useEffect } from 'react';

type AnimationState = 'typing' | 'deleting';

export const useTypingAnimation = (
  words: string[], 
  typingSpeed = 150, 
  deletingSpeed = 50,
  pauseDuration = 2000
) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [animationState, setAnimationState] = useState<AnimationState>('typing');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const animateText = () => {
      const currentWord = words[wordIndex];
      
      if (animationState === 'typing') {
        if (displayText === currentWord) {
          // 無限の待機時間が指定されている場合は削除フェーズに移行しない
          if (pauseDuration === Infinity) {
            return;
          }
          timeout = setTimeout(() => {
            setAnimationState('deleting');
          }, pauseDuration);
          return;
        }

        setDisplayText(currentWord.slice(0, displayText.length + 1));
        timeout = setTimeout(animateText, typingSpeed);
      } else {
        if (displayText === '') {
          setAnimationState('typing');
          setWordIndex((prev) => (prev + 1) % words.length);
          timeout = setTimeout(animateText, typingSpeed);
          return;
        }

        setDisplayText(currentWord.slice(0, displayText.length - 1));
        timeout = setTimeout(animateText, deletingSpeed);
      }
    };

    timeout = setTimeout(animateText, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, wordIndex, animationState, words, typingSpeed, deletingSpeed, pauseDuration]);

  return { text: displayText, isTyping: animationState === 'typing' };
};