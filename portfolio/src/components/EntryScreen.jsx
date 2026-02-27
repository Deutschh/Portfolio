import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import LightPillars from './LightPillars'; // <--- Importe o novo componente

export default function EntryScreen({ onEnter }) {
  // ... (Lógica do mouse continua a mesma) ...
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 bg-deep-black flex flex-col items-center justify-center overflow-hidden font-sans">
        <LightPillars
    topColor="#5227FF"
    bottomColor="#FF9FFC"
    intensity={0.9}
    rotationSpeed={0.5}
    glowAmount={0.0025}
    pillarWidth={8}
    pillarHeight={0.6}
    noiseIntensity={0.5}
    pillarRotation={0}
    interactive={false}
    mixBlendMode="screen"
    quality="high"
/>

     <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(transparent_50%,rgba(0,0,0,0.6)_100%)]" />

      {/* 3. CURSOR SPOTLIGHT (Agora com 'overlay' para iluminar a fumaça) */}
      <motion.div 
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none z-20 mix-blend-overlay"
      />

      {/* 4. CONTEÚDO CENTRAL */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="z-30 text-center flex flex-col items-center relative"
      >
        {/* Subtítulo em Pílula Escura (Melhor leitura) */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 px-6 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-lg"
        >
          <span className="text-cyber-green text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
            Systems Architecture & IoT
          </span>
        </motion.div>

        {/* Título Principal (Com sombra pesada para não sumir no branco) */}
        <h1 className="text-white text-7xl md:text-9xl font-extrabold tracking-tighter mb-12 select-none drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Deutschh<span className="text-cyber-green drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]">.</span>
        </h1>

        {/* Botão "Solid Glass" (Mais opaco para contraste) */}
        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-16 py-6 rounded-full overflow-hidden cursor-pointer border border-white/20 bg-black/60 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          {/* Brilho hover */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span className="relative text-white font-bold tracking-[0.3em] text-xs uppercase group-hover:text-cyber-green transition-colors">
            Initialize Core
          </span>
        </motion.button>
      </motion.div>

      {/* 5. RODAPÉ (Com fundo gradiente para leitura) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/90 to-transparent z-20 pointer-events-none" />
      
      <div className="absolute bottom-8 w-full px-12 flex justify-between items-end text-[10px] text-white/60 font-mono tracking-widest z-30 pointer-events-none">
        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-pulse"></span>
            LOC: SÃO PAULO, BR
          </p>
          <p>STU: 2ND YEAR HS [2026]</p>
        </div>

        <div className="text-right flex flex-col gap-1">
          <p>STATUS: FREELANCE AVAILABLE</p>
          <p className="text-cyber-green">SYSTEM: ONLINE 🟢</p>
        </div>
      </div>
    </div>
  );
}