import { Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
    function TypewriterText({ text }: { text: string }) {
        const [displayText, setDisplayText] = useState('');
        
        useEffect(() => {
          let currentIndex = 0;
          const interval = setInterval(() => {
            if (currentIndex <= text.length) {
              setDisplayText(text.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(interval);
            }
          }, 100);
      
          return () => clearInterval(interval);
        }, [text]);
      
        return (
          <>
            {displayText}
            <span className="border-r-2 border-blue-400 animate-pulse-fast">&nbsp;</span>
          </>
        );
      }
    return (
        <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
            </div>
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-64 h-64 rounded-full border-4 border-blue-400 drop-shadow-[0_0px_30px_rgba(255,255,255,0.35)]" data-aos="fade-right">
                    <img
                    src="src/assets/hero-photo.jpg"
                    alt="Juan Manuel Sakkal"
                    className="w-full h-full object-cover rounded-full"
                    />
                </div>
                <div className="text-center md:text-left" data-aos="fade-left">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Juan Manuel Sakkal</h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        <TypewriterText text="Fullstack Software Engineer" />
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mb-12">
                    <a href="https://github.com/JuanManuelSakkal" target='_blank' className="hover:text-blue-400 transition-colors">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/juan-manuel-sakkal-80574414a/" target='_blank' className="hover:text-blue-400 transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:jmsakkal@hotmail.com" target='_blank' className="hover:text-blue-400 transition-colors">
                        <Mail size={24} />
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}

export default HeroSection