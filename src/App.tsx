/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, Printer, BookOpen, CheckCircle2, Users, Star, 
  Download, ChevronDown, Check, X, ShieldCheck, Clock, 
  Heart, Layout, FileText, Gift, Award, HelpCircle
} from "lucide-react";

const ImagePlaceholder = ({ text = "IMAGEM AQUI", className = "" }) => (
  <div className={`bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center p-8 text-slate-400 font-bold text-[10px] text-center uppercase tracking-widest ${className}`}>
    [ESPAÇO RESERVADO PARA {text}]
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-orange-500 transition-colors group"
      >
        <span className="font-bold text-slate-800 group-hover:text-orange-600 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const today = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1) Barra Superior de Urgência */}
      <div className="bg-[#FF6B00] py-1.5 px-4 text-center shadow-md z-50">
        <p className="text-white font-bold text-sm md:text-base tracking-wide flex items-center justify-center gap-2">
          <span>Desconto somente <span className="bg-white text-[#FF6B00] px-2 py-0.5 rounded animate-pulse">HOJE</span> nesta página</span>
          <span className="hidden sm:inline opacity-90">— {today}</span>
        </p>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-1 pb-20 relative z-10">
          {/* 2) Logo Centralizado */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-1"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-xl shadow-orange-100 flex items-center justify-center mb-3 border border-orange-50">
              <div className="relative">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Sparkles className="text-white w-4 h-4" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">❤</span>
                </div>
              </div>
            </div>
            <h2 className="font-display font-extrabold text-xl text-slate-800 tracking-tight">
              Sementes <span className="text-orange-500">do Reino</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold mt-0.5">Ministério Infantil</p>
          </motion.div>

          {/* 3) Selo / Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-100 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs md:text-sm font-bold text-slate-600 uppercase tracking-wider">
                Oferta Especial – Tempo Limitado
              </span>
            </div>
          </motion.div>

          {/* 4) Headline Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-10"
          >
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
              O Kit Completo com Mais de <span className="text-orange-500">650 Atividades Bíblicas</span> Prontas para Imprimir e Aplicar
            </h1>
          </motion.div>

          {/* 6) Mockup 3D (Imagem Fornecida) - Movido para baixo da Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative max-w-4xl mx-auto flex justify-center mb-12"
          >
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-orange-200/20 rounded-[3rem] blur-3xl group-hover:bg-orange-200/30 transition-colors duration-500" />
              
              <img 
                src="https://i.imgur.com/uGqPV1m.jpeg" 
                alt="Mockup Sementes do Reino" 
                className="relative z-10 w-full h-auto max-w-3xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle reflection/shadow at the bottom */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-slate-900/10 blur-2xl rounded-[100%] z-0" />
            </div>
          </motion.div>

          {/* 5) Subheadline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Criado para transformar suas aulas e encantar crianças com a Palavra de Deus. Atividades prontas para imprimir e usar quantas vezes quiser.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <Printer className="w-4 h-4 text-green-500" />
                <span>PDF de Alta Qualidade</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <BookOpen className="w-4 h-4 text-green-500" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Bônus Exclusivos</span>
              </div>
            </div>
          </motion.div>

          {/* NOVO: Bloco 2 - Prova Social e Estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-orange-100/20 border border-white mb-20"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <span className="font-display text-2xl md:text-3xl font-black text-slate-900 tracking-tight">12.000+</span>
                <span className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider mt-2">Famílias Satisfeitas</span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-orange-500" />
                </div>
                <span className="font-display text-2xl md:text-3xl font-black text-slate-900 tracking-tight">450+</span>
                <span className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider mt-2">Atividades Prontas</span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-orange-500" />
                </div>
                <span className="font-display text-2xl md:text-3xl font-black text-slate-900 tracking-tight">4.9/5</span>
                <span className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider mt-2">Avaliação Média</span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-6 h-6 text-orange-500" />
                </div>
                <span className="font-display text-2xl md:text-3xl font-black text-slate-900 tracking-tight">100%</span>
                <span className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider mt-2">Digital e Imediato</span>
              </div>
            </div>
          </motion.div>

          {/* NOVO: Bloco 3 - Depoimentos */}
          <section className="bg-white py-20 -mx-6 px-6">
            <div className="max-w-4xl mx-auto">
              {/* Título e Subtítulo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                  O Que Dizem Mães e Professoras
                </h2>
                <p className="text-lg text-slate-500 font-medium">
                  Histórias reais de transformação no ministério infantil
                </p>
              </motion.div>

              {/* Depoimentos em Imagem */}
              <div className="flex flex-col items-center gap-12">
                {[
                  "https://i.imgur.com/RSrV08x.jpeg",
                  "https://i.imgur.com/py8OHL8.jpeg",
                  "https://i.imgur.com/G0MbEG3.jpeg"
                ].map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full max-w-2xl"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-b from-orange-100 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={src}
                        alt={`Depoimento ${index + 1}`}
                        className="relative z-10 w-full h-auto rounded-2xl shadow-lg border border-slate-100 transform transition-transform duration-500 hover:scale-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 1️⃣ Veja Exemplos do Material */}

          {/* 4️⃣ Bônus Exclusivos Inclusos */}
          <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Receba Mais Gratuitamente</span>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
                  Bônus Exclusivos Inclusos
                </h2>
                <div className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg shadow-green-200">
                  Valor total dos bônus: R$ 127,00 - GRÁTIS
                </div>
              </div>

              <div className="space-y-8">
                {[
                  { id: "01", title: "Guia de Versículos Para Memorização", value: "R$ 27,00", desc: "50 versículos ilustrados prontos para impressão, organizados por temas e idades", image: "https://i.imgur.com/youvFIW.jpeg" },
                  { id: "02", title: "Calendário Bíblico Anual Infantil", value: "R$ 37,00", desc: "12 meses de atividades temáticas seguindo histórias bíblicas cronologicamente", image: "https://i.imgur.com/NBmuHix.jpeg" },
                  { id: "03", title: "Kit de Jogos Educativos Bíblicos", value: "R$ 27,00", desc: "Quebra-cabeças, caça-palavras e jogos da memória com temas bíblicos", image: "https://i.imgur.com/Epvoblv.jpeg" },
                  { id: "04", title: "Como Ensinar a Bíblia Para Crianças", value: "R$ 19,00", desc: "Guia completo com estratégias pedagógicas e dicas práticas para educadores", image: "https://i.imgur.com/6YyKR6t.jpeg" },
                  { id: "05", title: "Certificados de Conclusão Personalizáveis", value: "R$ 17,00", desc: "Modelos prontos para reconhecer o progresso das crianças no aprendizado", image: "https://i.imgur.com/9KDXdK7.jpeg" }
                ].map((bonus, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-slate-50 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center border border-slate-100"
                  >
                    <div className="w-full md:w-1/3 shrink-0">
                      {bonus.image ? (
                        <img 
                          src={bonus.image} 
                          alt={bonus.title} 
                          className="w-full h-auto rounded-2xl shadow-md"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <ImagePlaceholder text={`MOCKUP BÔNUS ${bonus.id}`} className="aspect-[4/3] shadow-inner" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{bonus.id}</span>
                        <h4 className="font-display text-xl font-extrabold text-slate-900">{bonus.title}</h4>
                      </div>
                      <p className="text-slate-600 mb-6 leading-relaxed">{bonus.desc}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-slate-400 line-through text-sm">Valor: {bonus.value}</span>
                        <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Hoje: Grátis</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* NOVO: Este Kit É Ideal Para Você? */}
          <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                  Este kit é ideal para você?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Ideal Para */}
                <div className="bg-green-50/50 rounded-[2.5rem] p-8 md:p-10 border border-green-100">
                  <h3 className="font-display text-xl font-bold text-green-700 mb-8 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" />
                    Este kit é para você se:
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Você trabalha no ministério infantil e precisa de material de qualidade",
                      "Deseja ensinar a Bíblia para seus filhos de forma divertida e eficaz",
                      "Não tem tempo para criar atividades do zero toda semana",
                      "Quer aproximar as crianças da Palavra de Deus com criatividade"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm md:text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Não É Para Você */}
                <div className="bg-red-50/50 rounded-[2.5rem] p-8 md:p-10 border border-red-100 opacity-80">
                  <h3 className="font-display text-xl font-bold text-red-700 mb-8 flex items-center gap-2">
                    <X className="w-6 h-6" />
                    Não É Para Você Se:
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Você não se importa com o crescimento espiritual das crianças",
                      "Não possui 10 minutos por dia para aplicar as atividades",
                      "Prefiro deixar as crianças em frente às telas sem supervisão",
                      "Não valoriza o ensino bíblico estruturado e de qualidade",
                      "Espera resultados sem tempo dedicado com as crianças",
                      "Busca material secular sem fundamento bíblico"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-500">
                        <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 5️⃣ Planos */}
          <section className="py-20 px-6 bg-slate-900 text-white -mx-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
                  Temos dois Planos. Escolha com Sabedoria!
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Plano Básico */}
                <div className="bg-white/5 backdrop-blur-sm rounded-[3rem] p-10 border border-white/10 flex flex-col">
                  <h3 className="font-display text-2xl font-bold mb-6">Plano Básico</h3>
                  <div className="mb-8">
                    <p className="text-white/60 text-sm uppercase font-bold tracking-widest mb-4">O que você vai receber:</p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                        <span>Atividades Bíblicas prontas para imprimir</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-auto pt-8 border-t border-white/10">
                    <p className="text-white/40 line-through mb-1">De R$ 147,00</p>
                    <p className="text-sm text-white/60 mb-1">Por apenas</p>
                    <p className="text-4xl font-black text-white mb-8">R$ 5,00</p>
                    <a 
                      href="https://pay.lowify.com.br/checkout?product_id=rvIQ1L"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/20 flex items-center justify-center cursor-pointer"
                    >
                      Quero o Básico
                    </a>
                  </div>
                </div>

                {/* Plano Premium */}
                <div className="bg-white rounded-[3rem] p-10 border-4 border-orange-500 flex flex-col relative transform md:scale-105 shadow-2xl shadow-orange-500/20">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-1.5 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
                    Mais Popular
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Oferta Premium</h3>
                  <p className="text-orange-500 font-bold text-sm mb-4">Kit completo com todos os bônus</p>
                  
                  <div className="mb-6">
                    <img 
                      src="https://i.imgur.com/uGqPV1m.jpeg" 
                      alt="Kit Premium Completo" 
                      className="w-full h-auto rounded-2xl shadow-lg border border-slate-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="mb-8 flex-grow">
                    <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-4">Tudo do Plano Básico +</p>
                    <ul className="space-y-3 text-slate-700 text-sm">
                      {[
                        "Produto principal e bônus - 650+ Atividades Bíblicas",
                        "+650 Atividades Bíblicas prontas para imprimir",
                        "+350 Atividades Bíblicas Extras para o ano todo",
                        "Histórias desde a Criação até os ensinamentos de Jesus",
                        "Guia de Versículos Para Memorização (50 versículos ilustrados)",
                        "Calendário Bíblico Anual Infantil (12 meses de atividades)",
                        "Kit de Jogos Educativos Bíblicos",
                        "Como Ensinar a Bíblia Para Crianças",
                        "Certificados de Conclusão Personalizáveis",
                        "Acesso vitalício com atualizações gratuitas",
                        "Suporte via email para tirar dúvidas"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-slate-100">
                    <p className="text-slate-400 line-through mb-1">De R$ 247,00</p>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm text-slate-500">Por apenas</p>
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded">ECONOMIZE 88%</span>
                    </div>
                    <p className="text-5xl font-black text-slate-900 mb-8">R$ 19,90</p>
                    <a 
                      href="https://pay.lowify.com.br/checkout?product_id=gy6LEB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition-all shadow-xl shadow-orange-200 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      QUERO O KIT PREMIUM COMPLETO
                      <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-50 grayscale contrast-125">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro</div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Award className="w-4 h-4" /> Dados Protegidos</div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Clock className="w-4 h-4" /> Acesso Instantâneo</div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><CheckCircle2 className="w-4 h-4" /> Garantia de 30 dias</div>
              </div>
            </div>
          </section>

          {/* 6️⃣ Garantia */}
          <section className="py-24 px-6 bg-white">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-10 flex justify-center">
                <img 
                  src="https://i.imgur.com/V1KtQSL.png" 
                  alt="Selo de Garantia 30 Dias" 
                  className="w-48 h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Garantia Incondicional de 30 Dias
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Se você não ficar 100% satisfeito com o material, devolvemos seu dinheiro sem perguntas. Simples assim.
              </p>
            </div>
          </section>

          {/* 7️⃣ Perguntas Frequentes */}
          <section className="py-20 px-6 bg-slate-50">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                  Perguntas Frequentes
                </h2>
                <p className="text-slate-500 font-medium">Tire todas as suas dúvidas</p>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-100">
                <FAQItem 
                  question="Como vou receber o material após a compra?" 
                  answer="O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar todo o material em formato PDF. Você pode salvar no seu computador, celular ou tablet e imprimir quando quiser." 
                />
                <FAQItem 
                  question="As atividades são adequadas para qual faixa etária?" 
                  answer="O material foi desenvolvido estrategicamente para crianças de 4 a 10 anos. As atividades possuem diferentes níveis de complexidade, permitindo que você adapte o ensino de acordo com a maturidade de cada criança." 
                />
                <FAQItem 
                  question="Posso imprimir quantas vezes eu quiser?" 
                  answer="Sim! O material é seu para sempre. Você pode imprimir as atividades quantas vezes forem necessárias para seus filhos, alunos da escola dominical ou pequenos grupos." 
                />
                <FAQItem 
                  question="O material é biblicamente fundamentado?" 
                  answer="Com certeza. Todo o conteúdo foi cuidadosamente elaborado com base nas Escrituras Sagradas, focando nas histórias e ensinamentos centrais da Bíblia de forma fiel e pedagógica." 
                />
                <FAQItem 
                  question="Funciona para ministério infantil grande?" 
                  answer="Sim, o material é perfeito tanto para uso individual em casa quanto para grupos maiores em igrejas, escolas cristãs ou colônias de férias bíblicas." 
                />
                <FAQItem 
                  question="E se eu não gostar do material?" 
                  answer="Não se preocupe. Oferecemos uma garantia incondicional de 30 dias. Se por qualquer motivo você achar que o material não é para você, basta nos enviar um e-mail e devolveremos 100% do seu investimento." 
                />
                <FAQItem 
                  question="Preciso de algum programa especial para usar?" 
                  answer="Não. Você só precisa de um leitor de PDF comum (que já vem na maioria dos dispositivos) e uma impressora. O material está pronto para uso imediato." 
                />
                <FAQItem 
                  question="Vou receber atualizações do material?" 
                  answer="Sim! Quem adquire o Plano Premium tem acesso vitalício e receberá todas as futuras atualizações e novos materiais adicionados ao kit sem custo extra." 
                />
              </div>
            </div>
          </section>

          {/* 8️⃣ Seção Final (Call To Action) */}
          <section className="py-24 px-6 bg-orange-500 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-black mb-8 leading-tight">
                Não Deixe Suas Crianças Sem Este Recurso Precioso
              </h2>
              <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
                Milhares de famílias já estão usando este kit para transformar o aprendizado bíblico. Faça parte desta comunidade e veja a diferença na vida das suas crianças!
              </p>
              
              <div className="mb-12 flex justify-center">
                <img 
                  src="https://i.imgur.com/kAi7sbK.jpeg" 
                  alt="Mockup Final Sementes do Reino" 
                  className="w-full max-w-2xl h-auto rounded-3xl shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>

              <motion.a 
                href="https://pay.lowify.com.br/checkout?product_id=gy6LEB"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-12 py-6 rounded-3xl font-black text-xl md:text-2xl shadow-2xl shadow-orange-900/20 hover:shadow-orange-900/40 transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer"
              >
                GARANTIR MEU ACESSO
                <CheckCircle2 className="w-8 h-8" />
              </motion.a>
              
              <p className="mt-8 text-white/60 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Compra 100% Segura • Acesso Vitalício
              </p>
            </div>
          </section>

          {/* 5) Subheadline (Removido daqui pois foi movido para cima) */}
        </div>
      </main>

      {/* Floating CTA for Mobile (Optional but good for conversion) */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <a 
          href="https://pay.lowify.com.br/checkout?product_id=gy6LEB"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#FF6B00] text-white font-extrabold py-4 rounded-2xl shadow-2xl shadow-orange-500/40 flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer"
        >
          QUERO O MEU KIT AGORA
          <Sparkles className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
