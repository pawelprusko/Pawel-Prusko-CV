import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  Lock
} from 'lucide-react';

/**
 * =========================================================================
 * 🔗 LINKI DO PREZENTACJI I PROGRAMÓW (TUTAJ MOŻESZ WKLEIĆ SWOJE LINKI):
 * Każdy z poniższych adresów URL otworzy się bezpośrednio w nowej karcie / nowym oknie
 * po kliknięciu odpowiedniego odnośnika w widoku Portfolio.
 * =========================================================================
 */
export const PROJECT_LINKS = {
  // 1. Komercyjne projekty Data Experience:
  // Lyondell - Pulpity nawigacyjne do monitorowania w czasie rzeczywistym dla przemysłu ciężkiego
  lyondell: 'https://drive.google.com/file/d/1UXUfP5OrcCDV7kBNtjGTz9HdABhoxtfX/view',

  // Newag - Pulpity nawigacyjne zarządzania zapasami dla produkcji
  newag: 'https://drive.google.com/file/d/1PaTUxt4HGPGnLaTWg-N2h5wM45LTto6S/view',

  // Finops Cloud Intelligence - Finansowe pulpity nawigacyjne dla ekosystemów chmurowych
  finops: 'https://drive.google.com/file/d/1SQpZMhshXDdSwAnOsq979A8VadZKavoL/view',

  // AWS CUDOS - Analityka rozliczeń chmurowych dla strategii kadry zarządzającej
  awsCudos: 'https://drive.google.com/file/d/14B2Jqb4epv-GSTmjocLK7lsiMvwmhwTm/view',

  // 2. Wewnętrzne inicjatywy w organizacjach:
  // STX Next - Link do materiałów platformy
  stxPlatform: 'https://drive.google.com/drive/folders/17vklSSRUc3n7D74YRIushkUpZkCcwqPT',

  // 3. Autorskie międzynarodowe programy edukacyjne i mentoringowe:
  // Blog Data Alchemist - Link do bloga
  dataAlchemistBlog: 'https://data-experience-alchemist.vercel.app/',

  // Dataviz AI Advocate - Link do Agenta AI
  datavizAiAgent: 'https://gemini.google.com/gem/b11ef61d47dd?usp=sharing',
};

export default function App() {
  const [currentView, setCurrentView] = useState<'cv' | 'portfolio'>(() => {
    if (typeof window !== 'undefined' && window.location.hash.toLowerCase() === '#portfolio') {
      return 'portfolio';
    }
    return 'cv';
  });
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Synchronize view state with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#cv') {
        setCurrentView('cv');
      } else if (hash === '#portfolio') {
        setCurrentView('portfolio');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const switchView = (view: 'cv' | 'portfolio') => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#2b2f38] font-sans antialiased py-6 sm:py-10 px-3 sm:px-6 md:px-8 selection:bg-slate-200">
      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1e232d] text-white text-xs font-medium px-4 py-2.5 rounded-md shadow-xl flex items-center gap-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Skopiowano {copiedText} do schowka</span>
        </div>
      )}

      {/* Main Sheet: identical layout, typography, and vertical spacing */}
      <main className="max-w-[820px] mx-auto bg-white rounded-lg shadow-sm sm:shadow md:shadow-md border border-slate-200/90 px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14 print-page">
        {/* ========================================================================= */}
        {/* SHARED HEADER: IDENTICAL POSITIONING, STYLES, DATA & BIO                   */}
        {/* ========================================================================= */}
        <section className="mb-6">
          <h1 className="text-[28px] sm:text-[34px] md:text-[36px] font-bold text-[#111827] tracking-tight leading-tight mb-1">
            {currentView === 'cv' ? 'Paweł Prusko CV' : 'Paweł Prusko Portfolio'}
          </h1>
          <p className="text-[17px] sm:text-[19px] text-[#4b5563] font-normal tracking-tight mb-4">
            Senior User &amp; Data Experience Designer
          </p>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[12.5px] sm:text-[13px] text-[#4b5563] border-b border-slate-100 pb-5">
            <span className="inline-flex items-center gap-1">
              <span className="font-normal text-[#374151]">Tel.:</span>
              <a
                href="tel:693600920"
                className="text-[#111827] hover:underline transition-colors"
              >
                693 600 920
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard('693 600 920', 'numer telefonu')}
                className="no-print p-0.5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                title="Kopiuj telefon"
                aria-label="Kopiuj telefon"
              >
                <Copy className="w-3 h-3" />
              </button>
            </span>

            <span className="text-slate-300 select-none">|</span>

            <span className="inline-flex items-center gap-1">
              <span className="font-normal text-[#374151]">E-mail:</span>
              <a
                href="mailto:pruskopawel@gmail.com"
                className="text-[#111827] hover:underline transition-colors"
              >
                pruskopawel@gmail.com
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard('pruskopawel@gmail.com', 'e-mail')}
                className="no-print p-0.5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                title="Kopiuj e-mail"
                aria-label="Kopiuj e-mail"
              >
                <Copy className="w-3 h-3" />
              </button>
            </span>

            <span className="text-slate-300 select-none">|</span>

            <span className="inline-flex items-center gap-1">
              <span className="font-normal text-[#374151]">Lokalizacja:</span>
              <span className="text-[#111827]">Warszawa</span>
            </span>

            {/* In CV view: Button "Zobacz Portfolio". In Portfolio view: Button "Zobacz CV" */}
            {currentView === 'cv' ? (
              <button
                type="button"
                onClick={() => switchView('portfolio')}
                className="px-3.5 py-1.5 bg-[#111827] hover:bg-slate-800 text-white text-[12px] font-medium rounded-md shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer ml-1 sm:ml-2 no-print"
                title="Przejdź do portfolio"
              >
                <span>Zobacz Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-90" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => switchView('cv')}
                className="px-3.5 py-1.5 bg-[#111827] hover:bg-slate-800 text-white text-[12px] font-medium rounded-md shadow-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer ml-1 sm:ml-2 no-print"
                title="Przejdź do CV"
              >
                <ArrowLeft className="w-3.5 h-3.5 opacity-90" />
                <span>Zobacz CV</span>
              </button>
            )}
          </div>
        </section>

        {/* Lead Bio Paragraph: IDENTICAL AS REQUESTED */}
        <section className="mb-7">
          <p className="text-[13px] sm:text-[13.5px] leading-[1.65] text-[#374151] font-normal text-justify sm:text-left">
            Senior UX Designer i Architekt Data Experience z ponad 7-letnim doświadczeniem w przekształcaniu złożonych danych biznesowych w intuicyjne, przejrzyste interfejsy. Specjalizuję się w wizualizacji danych, systemach Business Intelligence oraz Explainable UX. Łączę inżynierię danych z potrzebami użytkowników – redukuję obciążenie poznawcze, waliduję logikę danych przed etapem wdrażania i tworzę skalowalne pulpity nawigacyjne dla klientów globalnych (Pharma, FinTech, przemysł).
          </p>
        </section>

        {/* ========================================================================= */}
        {/* VIEW A: PORTFOLIO VIEW (ALL CONTENT TRANSLATED TO POLISH)                 */}
        {/* ========================================================================= */}
        {currentView === 'portfolio' ? (
          <div>
            {/* Section 1: Komercyjne projekty Data Experience */}
            <section className="mb-7">
              <h2 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827] mb-3">
                Komercyjne projekty Data Experience
              </h2>

              <div className="space-y-4 text-[12.5px] sm:text-[13px] leading-[1.6]">
                {/* 1. Lyondell */}
                <div>
                  <h3 className="font-bold text-[#111827]">Lyondell</h3>
                  <p className="text-[#4b5563]">
                    Pulpity nawigacyjne do monitorowania w czasie rzeczywistym dla przemysłu ciężkiego
                  </p>
                  <a
                    href={PROJECT_LINKS.lyondell}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111827] hover:text-blue-600 underline underline-offset-2 text-[12px] font-medium inline-flex items-center gap-1 cursor-pointer transition-colors mt-0.5"
                  >
                    <span>Link do prezentacji projektu</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
                  </a>
                </div>

                {/* 2. Newag */}
                <div>
                  <h3 className="font-bold text-[#111827]">Newag</h3>
                  <p className="text-[#4b5563]">
                    Pulpity nawigacyjne zarządzania zapasami dla sektora produkcyjnego
                  </p>
                  <a
                    href={PROJECT_LINKS.newag}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111827] hover:text-blue-600 underline underline-offset-2 text-[12px] font-medium inline-flex items-center gap-1 cursor-pointer transition-colors mt-0.5"
                  >
                    <span>Link do prezentacji projektu</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
                  </a>
                </div>

                {/* 3. Finops Cloud Intelligence */}
                <div>
                  <h3 className="font-bold text-[#111827]">Finops Cloud Intelligence</h3>
                  <p className="text-[#4b5563]">
                    Finansowe pulpity nawigacyjne dla ekosystemów chmurowych
                  </p>
                  <a
                    href={PROJECT_LINKS.finops}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111827] hover:text-blue-600 underline underline-offset-2 text-[12px] font-medium inline-flex items-center gap-1 cursor-pointer transition-colors mt-0.5"
                  >
                    <span>Link do prezentacji projektu</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
                  </a>
                </div>

                {/* 4. AWS CUDOS */}
                <div>
                  <h3 className="font-bold text-[#111827]">AWS CUDOS</h3>
                  <p className="text-[#4b5563]">
                    Analityka rozliczeń chmurowych dla strategii kadry zarządzającej
                  </p>
                  <a
                    href={PROJECT_LINKS.awsCudos}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111827] hover:text-blue-600 underline underline-offset-2 text-[12px] font-medium inline-flex items-center gap-1 cursor-pointer transition-colors mt-0.5"
                  >
                    <span>Link do prezentacji projektu</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
                  </a>
                </div>
              </div>
            </section>

            {/* Section 2: Wewnętrzne inicjatywy Data Experience w organizacjach */}
            <section className="mb-7">
              <h2 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827] mb-3.5">
                Wewnętrzne inicjatywy Data Experience w organizacjach
              </h2>

              <div className="space-y-5">
                {/* 5. STX Next */}
                <div>
                  <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827] mb-1.5">
                    STX Next
                  </h3>
                  <div className="space-y-1.5 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Międzydyscyplinarny ład i standardy (Cross-Functional Governance &amp; Standards):</strong>{' '}
                        Tworzenie globalnych, międzyfunkcyjnych wytycznych standaryzujących współpracę projektantów, programistów i analityków we wszystkich projektach ukierunkowanych na dane.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Korporacyjne systemy projektowe dla danych (Enterprise Data Design Systems):</strong>{' '}
                        Projektowanie unikalnych ścieżek użytkownika i wysoce dopasowanych układów wizualizacji danych dla systemów raportowania korporacyjnego, przy jednoczesnym tworzeniu kluczowych komponentów wewnętrznego Design Systemu, aby zapewnić skalowalność i doskonałość wizualną.
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <a
                      href={PROJECT_LINKS.stxPlatform}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111827] hover:text-blue-600 underline underline-offset-2 text-[12px] font-medium inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Link do materiałów platformy</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
                    </a>
                  </div>
                </div>

                {/* Astek (Farmacja i Biotechnologia) */}
                <div>
                  <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827] mb-1.5">
                    Astek (Farmacja i Biotechnologia)
                  </h3>
                  <div className="space-y-1.5 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Design System:</strong>{' '}
                        Tworzenie pogłębionych, spersonalizowanych materiałów edukacyjnych oraz bibliotek projektowych (Figma) w pełni dedykowanych wizualizacji danych.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Tableau:</strong>{' '}
                        We współpracy z Product Ownerem Tableau – tworzenie oficjalnego szablonu dashboardów Tableau oraz zestawu palet kolorystycznych zorientowanych na wykresy, dostępnych bezpośrednio z poziomu platformy Tableau dla deweloperów BI.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Zespół Brandowy (Brand Team):</strong>{' '}
                        Opracowanie dedykowanych palet kolorów wyłącznie dla wizualizacji danych, spójnych z identyfikacją wizualną marki (Brand look &amp; feel).
                      </div>
                    </div>
                  </div>

                  {/* Confidentiality Notice */}
                  <p className="text-[12px] text-[#6b7280] italic mt-2.5 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-slate-400 no-print shrink-0" />
                    <span>Brak możliwości udostępnienia linków ze względu na klauzulę poufności (NDA).</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Autorskie międzynarodowe programy edukacyjne i mentoringowe */}
            <section className="mb-7">
              <h2 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827] mb-3">
                Autorskie programy edukacyjne i mentoringowe
              </h2>

              <div className="space-y-5">
                {/* 6. Blog Data Alchemist */}
                <div>
                  <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827] mb-1">
                    Blog Data Alchemist
                  </h3>
                  <div className="flex items-start gap-2 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                    <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                    <div>
                      Na moim blogu Data Alchemist dzielę się pogłębioną wiedzą z zakresu projektowania doświadczeń danych (Data Experience Design), psychologii poznawczej oraz architektury analitycznej. Poprzez dedykowane działy, takie jak Data Alchemist Journal, Data Architecture Scrolls czy Data Psychology Notes, blog dostarcza refleksji technicznych i architektonicznych skupionych na eliminacji szumu poznawczego, ochronie ludzkiej uwagi oraz budowaniu rezonujących, zorientowanych na człowieka produktów danych.
                    </div>
                  </div>
                  <div className="mt-2 pl-4">
                    <a
                      href={PROJECT_LINKS.dataAlchemistBlog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111827] hover:text-blue-600 underline underline-offset-2 text-[12px] font-medium inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Link do bloga</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
                    </a>
                  </div>
                </div>

                {/* 7. Dataviz AI Advocate */}
                <div>
                  <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827] mb-1">
                    Dataviz AI Advocate
                  </h3>
                  <div className="flex items-start gap-2 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                    <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                    <div>
                      Twój osobisty asystent projektowania doświadczeń danych (Data Experience Design Assistant), łączący pięć wyspecjalizowanych ról w jeden płynny, strategiczny interfejs. Zaprojektowany, aby przyspieszyć rozwój produktów opartych na danych poprzez szybkie badania, całościowe audyty oraz procesy współpracy end-to-end. Od pogłębionej analizy danych i perswazyjnego storytellingu po projektowanie precyzyjnych wizualizacji i interaktywne szybkie prototypy – prowadzi Cię przez każdą fazę, walidując finalne rozwiązania, takie jak pulpity nawigacyjne, by zapewnić intuicyjność dla użytkowników końcowych, przejrzystość strategiczną i realny wpływ biznesowy.
                    </div>
                  </div>
                  <div className="mt-2 pl-4">
                    <a
                      href={PROJECT_LINKS.datavizAiAgent}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111827] hover:text-blue-600 underline underline-offset-2 text-[12px] font-medium inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Link do Agenta AI</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60 no-print" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* ========================================================================= */
          /* VIEW B: CV VIEW (EXACT 1:1 CONTENT AS ORIGINAL PDF)                       */
          /* ========================================================================= */
          <div>
            {/* Section 1: Kluczowe kompetencje i narzędzia */}
            <section className="mb-7">
              <h2 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827] mb-3">
                Kluczowe kompetencje i narzędzia
              </h2>
              <div className="space-y-2 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    <strong className="font-bold text-[#111827]">Data Experience Design &amp; Wizualizacja Danych:</strong>{' '}
                    Architektura pulpitów menedżerskich (dashboards), architektura informacji (IA), logika intencji do wizualizacji, Data Storytelling, redukcja obciążenia poznawczego, przekładanie metryk na akcje.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    <strong className="font-bold text-[#111827]">Projektowanie UX/UI:</strong>{' '}
                    Ekspert Figma, interfejsy złożonych systemów, procesy Human-in-the-Loop, dostępność cyfrowa WCAG 2.1+.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    <strong className="font-bold text-[#111827]">Explainable AI &amp; Logika Danych:</strong>{' '}
                    Wyjaśnialne UI (XAI), analityka konwersacyjna, architektura promptów, okna kontekstowe.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    <strong className="font-bold text-[#111827]">Prototypowanie i wykonalność techniczna:</strong>{' '}
                    Szybkie prototypowanie (Figma Make, Cursor, Google AI Studio), Vibe Coding, możliwości UI w React/Tailwind, współpraca z inżynierami danych i zespołami frontendowymi.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    <strong className="font-bold text-[#111827]">Metodyki i wdrożenie:</strong>{' '}
                    Faza Discovery, walidacja Pre-Engineering, synteza badań, przekazywanie prac w zespołach Agile.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Doświadczenie zawodowe */}
            <section className="mb-7">
              <h2 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827] mb-3.5">
                Doświadczenie zawodowe
              </h2>

              <div className="space-y-5">
                {/* STX Next */}
                <div>
                  <div className="mb-1.5">
                    <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827]">
                      Senior Data Product Designer &amp; AI Specialist
                    </h3>
                    <p className="text-[12.5px] text-[#6b7280]">
                      STX Next | Wrzesień 2025 – Obecnie
                    </p>
                  </div>
                  <div className="space-y-1.5 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">User &amp; Data Experience i prototypowanie:</strong>{' '}
                        Przekształcanie statycznych procesów analitycznych w dynamiczne interakcje z danymi; kierowanie projektowaniem nowoczesnych interfejsów BI i modułów raportowych.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Procesy wspierane przez AI:</strong>{' '}
                        Projektowanie modułowych promptów systemowych i dedykowanych narzędzi („Gems”) do automatyzacji syntezy badań z użytkownikami oraz walidacji logiki danych przed developmentem.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Szybkie testowanie wykonalności:</strong>{' '}
                        Tworzenie funkcjonalnych Proof of Concept łączących Figmę z prototypami w kodzie (Cursor, Google AI Studio), skracając czas wdrożenia narzędzi analitycznych.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Design Systems dla danych:</strong>{' '}
                        Standaryzacja komponentów UI i wytycznych wizualnych dla wykresów oraz pulpitów telemetrycznych w projektach korporacyjnych.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Paweł Prusko (Freelance/Consulting) */}
                <div>
                  <div className="mb-1.5">
                    <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827]">
                      Founder &amp; Principal Data Experience Architect
                    </h3>
                    <p className="text-[12.5px] text-[#6b7280]">
                      Paweł Prusko (Freelance/Consulting) | Luty 2026 – Obecnie
                    </p>
                  </div>
                  <div className="space-y-1.5 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Audyty i architektura wizualizacji danych:</strong>{' '}
                        Wsparcie kadry zarządzającej w walidacji logiki danych, spójności metryk i hierarchii wizualnej przed napisaniem kodu, chroniąc budżety R&amp;D.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Systemy intencji do wizualizacji:</strong>{' '}
                        Projektowanie kompleksowego UX dla platform audytujących wizualizacje danych, zapobiegających utracie kontekstu i dbających o osadzenie danych w modelach LLM.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Gotowość organizacji na AI:</strong>{' '}
                        Przeprowadzanie audytów architektury informacji w celu optymalizacji surowych struktur danych pod kątem okien kontekstowych LLM, analityki konwersacyjnej i pulpitów menedżerskich.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Astek */}
                <div>
                  <div className="mb-1.5">
                    <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827]">
                      Senior UX &amp; Data Designer (Business Intelligence &amp; Complex Systems)
                    </h3>
                    <p className="text-[12.5px] text-[#6b7280]">
                      Astek | Luty 2022 – Sierpień 2025
                    </p>
                  </div>
                  <div className="space-y-1.5 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Logika danych i architektura badań:</strong>{' '}
                        Współprowadzenie fazy badawczej oraz ścisła współpraca z deweloperami BI i analitykami biznesowymi (BA) w celu wyciągania złożonej logiki biznesowej i przekładania metryk na intuicyjne struktury zgodne z WCAG.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Systemy projektowe dla danych:</strong>{' '}
                        Tworzenie dedykowanych ścieżek użytkownika i układów wizualizacji danych dla systemów raportowych oraz rozwijanie komponentów wewnętrznego Design Systemu.
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        <strong className="font-bold text-[#111827]">Standardy interdyscyplinarne:</strong>{' '}
                        Tworzenie globalnych wytycznych standaryzujących współpracę projektantów, deweloperów i analityków we wszystkich projektach związanych z danymi.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Experience */}
                <div className="pt-1">
                  <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#111827] mb-2">
                    Additional Experience
                  </h3>
                  <div className="space-y-1 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        Senior UX Designer | Centralny Ośrodek Informatyki | Październik 2020 – Styczeń 2022
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        UX &amp; UI Designer | Reckitt Benckiser | Luty 2019 – Wrzesień 2020
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                      <div>
                        Web Designer | Groupon | Sierpień 2016 – Listopad 2018
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Selected AI & Interaction Projects */}
            <section className="mb-7">
              <h2 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827] mb-3">
                Selected AI &amp; Interaction Projects
              </h2>
              <div className="space-y-2.5 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    <strong className="font-bold text-[#111827]">Platforma analityki konwersacyjnej:</strong>{' '}
                    Zaprojektowanie logiki interakcji dla aplikacji AI przekształcającej język naturalny (NLP) w dynamiczne wykresy. Opracowanie logiki intencji do wizualizacji zastępującej statyczne raporty eksploracją danych w czasie rzeczywistym.
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    <strong className="font-bold text-[#111827]">Kompleksowa aplikacja finansowa:</strong>{' '}
                    Prowadzenie fazy discovery z wykorzystaniem badań wspieranych przez AI, szybkiego prototypowania i warsztatów ze interesariuszami. Priorytetyzacja funkcji, współtworzenie architektury i zbieranie feedbacku. Zarządzanie etapem rozwoju poprzez iteracyjne wdrażanie funkcji w stałej współpracy z użytkownikami i klientem.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    <strong className="font-bold text-[#111827]">System AI wielo-personowy (Data AI Advocate):</strong>{' '}
                    Zaprojektowanie UX i łańcucha logiki dla systemu przyjmującego wyspecjalizowane persony (Walidator, Projektant) do audytu danych wyjściowych, zapobiegających utracie kontekstu i zapewniając profesjonalne doradztwo biznesowe.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Education */}
            <section className="mb-7">
              <h2 className="text-[14.5px] sm:text-[15px] font-bold text-[#111827] mb-3">
                Education
              </h2>
              <div className="space-y-1 text-[12.5px] sm:text-[13px] leading-[1.6] text-[#374151]">
                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    Web Digital UX Designer (320h) | Coders Lab | 2024
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    Javascript &amp; React Developer (320h) | Coders Lab | 2018
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-[#111827] select-none text-[13px] leading-relaxed">•</span>
                  <div>
                    M.Sc. in Chemistry &amp; Biology | University of Gdansk | 2009 – 2015
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Section: RODO Clause (Identical for both views) */}
        <footer className="pt-5 border-t border-slate-200">
          <p className="text-[10.5px] sm:text-[11px] leading-[1.55] text-[#9ca3af] font-normal text-justify sm:text-left">
            Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz Ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych.
          </p>
        </footer>
      </main>

    </div>
  );
}
