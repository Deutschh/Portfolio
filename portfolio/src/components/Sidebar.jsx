import { useState } from "react";
import {
  LayoutDashboard,
  Code2,
  Cpu,
  Settings,
  Github,
  Linkedin,
  Terminal,
  ChevronRight,
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  // Estado para controlar se a sidebar está aberta ou fechada
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "projects", label: "Projetos", icon: Code2 },
    { id: "iot", label: "IoT Lab", icon: Cpu },
    { id: "arsenal", label: "Arsenal", icon: Settings },
  ];

  return (
    // AQUI ESTÁ A MÁGICA DO VIDRO LÍQUIDO + LARGURA DINÂMICA:
    <aside
      className={`relative h-full flex flex-col border-r border-white/10 
       bg-white/5 shadow-[inset_-5px_0_30px_rgba(0,0,0,0.5)] 
       shrink-0 z-50 transition-all duration-500 ease-in-out rounded-br-4xl rounded-tr-4xl bg-white/8 backdrop-blur-md
       ${isExpanded ? "w-80" : "w-20"}`}
    >
      {/* BOTÃO DE ABRIR/FECHAR */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-4 top-12 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:bg-cyber-purple hover:scale-110 transition-all duration-300 cursor-pointer group"
      >
        <ChevronRight
          size={18}
          className={`transition-transform duration-500 text-gray-300 group-hover:text-white ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* 1. HEADER (LOGO & STATUS) */}
      <div className={`h-24 relative flex items-center overflow-hidden group bg-gradient-to-b from-zinc-900/70 to-transparent rounded-tr-4xl pt-2 transition-all duration-500 ${isExpanded ? "justify-start px-8" : "justify-center px-0"}`}>
        <div className="absolute h-0.5 w-40 bg-white/60 bottom-0 left-1/2 -translate-x-1/2 "></div>
        {/* Efeito de brilho passando no vidro do header */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />

        {/* Logo Icon */}
        <div className="relative w-12 h-12 flex shrink-0 items-center justify-center bg-cyber-purple/10 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all duration-500 backdrop-blur-md">
          <Terminal
            size={24}
            className="text-cyber-purple drop-shadow-[0_0_5px_rgba(139,92,246,0.8)]"
          />
        </div>

        {/* Texto (Desktop) */}
        <div 
          className={`flex flex-col ml-4 z-10 overflow-hidden whitespace-nowrap transition-all duration-500 ${
            isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}
        >
          <h1 className="font-extrabold text-xl tracking-tight text-white drop-shadow-md">
            DEUTSCHH<span className="text-cyber-purple">.</span>
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            <span className="text-[11px] font-mono text-gray-400 tracking-widest uppercase">
              System Online
            </span>
          </div>
        </div>
      </div>

      {/* 2. NAVEGAÇÃO */}
      <nav className="flex-1 py-8 px-3 space-y-4 overflow-y-auto custom-scrollbar overflow-x-hidden">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative w-full flex items-center py-4 rounded-xl transition-all duration-300 group overflow-hidden cursor-pointer ${
                isExpanded ? "justify-start px-5" : "justify-center px-0"
              } ${
                isActive
                  ? "text-white"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {/* Fundo Ativo (Luz Vidrada) */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-transparent border-l-2 border-cyber-purple shadow-[inset_10px_0_20px_rgba(139,92,246,0.1)] backdrop-blur-sm" />
              )}

              {/* Ícone */}
              <item.icon
                size={22}
                className={`z-10 shrink-0 transition-colors duration-300 ${isActive ? "text-cyber-purple drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" : "group-hover:text-white"}`}
              />

              {/* Label */}
              <span
                className={`ml-4 text-base font-semibold tracking-wide z-10 whitespace-nowrap transition-all duration-500 overflow-hidden ${
                  isExpanded ? "w-32 opacity-100" : "w-0 opacity-0 ml-0"
                } ${isActive ? "text-white drop-shadow-sm" : ""}`}
              >
                {item.label}
              </span>

              {/* Brilho hover sutil */}
              {!isActive && (
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              )}
            </button>
          );
        })}
      </nav>

      {/* 3. FOOTER */}
      <div className={`p-6 border-t border-white/5 bg-black/20 backdrop-blur-md shadow-[0_-10px_20px_rgba(0,0,0,0.2)] rounded-br-4xl transition-all duration-500 ${isExpanded ? "items-start" : "items-center"}`}>
        <div className={`flex flex-col gap-4 ${isExpanded ? "items-start" : "items-center"}`}>
          
          {/* Social Links */}
          <div className={`flex gap-3 ${isExpanded ? "flex-row" : "flex-col"}`}>
            <a
              href="https://github.com/Deutschh"
              className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Telemetria - some quando fechado */}
          <div className={`w-full overflow-hidden transition-all duration-500 ${isExpanded ? "opacity-100 max-h-20" : "opacity-0 max-h-0"}`}>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3" />
            <div className="flex justify-between items-end text-[9px] font-mono text-gray-500 whitespace-nowrap">
              <span className="uppercase">Loc: SP_BR</span>
              <span className="text-cyber-green/80">v2.0.26</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}