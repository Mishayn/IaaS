import React, { useState } from 'react';
import { 
  Cloud, 
  Server, 
  Cpu, 
  Layers, 
  FileText, 
  Figma, 
  Edit3, 
  ShieldCheck, 
  Lock, 
  FolderTree, 
  FileCheck, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  Users, 
  GitBranch, 
  Clock, 
  Copy, 
  Check, 
  ChevronRight, 
  ChevronDown,
  ArrowRight,
  Terminal,
  Shield,
  Folder,
  File
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('models');

  // Generator state
  const [projectCode, setProjectCode] = useState('MAG2026');
  const [docType, setDocType] = useState('TXT');
  const [docName, setDocName] = useState('Article-AI-Trends');
  const [docDate, setDocDate] = useState('20261115');
  const [docVersion, setDocVersion] = useState('v1.2');
  const [docStatus, setDocStatus] = useState('APPROVED');
  const [copied, setCopied] = useState(false);

  // Folder tree state
  const [expandedFolders, setExpandedFolders] = useState({
    root: true,
    editorial: true,
    assets: false,
    design: false,
    export: false
  });

  // Security checklist state
  const [securityChecklist, setSecurityChecklist] = useState({
    offlineMode: true,
    backup321: false,
    tfaEnabled: true,
    restrictedSharing: true,
    assetLicenses: false,
    fontLicenses: true
  });

  // Workspace selector state
  const [selectedWorkspaceTool, setSelectedWorkspaceTool] = useState('docs');
  const [selectedStageFilter, setSelectedStageFilter] = useState('all');

  const generatedFileName = `${projectCode}_${docType}_${docName.replace(/\s+/g, '-')}_${docDate}_${docVersion}_${docStatus}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${generatedFileName}.docx`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleFolder = (folder) => {
    setExpandedFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  const toggleChecklist = (key) => {
    setSecurityChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const navItems = [
    { id: 'models', label: '1. Хмарні моделі (IaaS/PaaS/SaaS)' },
    { id: 'workspace', label: '2. Робочий простір (Docs + Figma)' },
    { id: 'organization', label: '3. Організація даних & Файли' },
    { id: 'security', label: '4. Ризики & Безпека' },
    { id: 'references', label: '5. Джерела & Ліцензії' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased border-t-4 border-cyan-500 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Dark Futuristic Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-cyan-400 uppercase mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Cloud Architecture Lab</span>
              <span>•</span>
              <span>Видавничі Системи 2026</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight">
              Порівняльний аналіз хмарних моделей та концепція робочого простору
            </h1>
          </div>
          <div className="text-right hidden md:block border-l border-slate-800 pl-6 text-xs text-slate-400 font-mono">
            <p className="text-slate-500">СИСТЕМНИЙ ЗВІТ</p>
            <p className="font-bold text-cyan-400">IaaS / PaaS / SaaS</p>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 py-3 min-w-max">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-mono font-medium transition-all rounded-lg ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content Body */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        
        {/* TAB 1: MODELS ANALYSIS */}
        {activeTab === 'models' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Section Header */}
            <div className="border-b border-slate-800 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Розділ I</span>
                <h2 className="text-2xl font-bold text-white mt-0.5">
                  Порівняльний аналіз моделей хмарних сервісів
                </h2>
              </div>

              {/* Stage Filter Pills */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                <span className="text-xs text-slate-400 font-mono px-2">Етап:</span>
                {[
                  { id: 'all', label: 'Усі' },
                  { id: 'write', label: 'Написання' },
                  { id: 'design', label: 'Дизайн' },
                  { id: 'publish', label: 'Публікація' }
                ].map(stage => (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedStageFilter(stage.id)}
                    className={`px-3 py-1 text-xs font-medium rounded transition-all ${
                      selectedStageFilter === stage.id
                        ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Comparison Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* IaaS */}
              <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-xl transition-all">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-slate-800 text-cyan-400 border border-slate-700 rounded">
                      IaaS
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Infrastructure</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Infrastructure as a Service</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Оренда віртуалізованих обчислювальних ресурсів (серверів, дискових сховищ, мереж). Повний контроль системного рівня.
                  </p>

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-1.5 text-xs mb-6 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Контроль:</span>
                      <span className="font-semibold text-cyan-400">Максимальний</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Користувач:</span>
                      <span className="text-slate-300">DevOps / Сисадмін</span>
                    </div>
                  </div>

                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-800 pb-1">
                    Інструменти видавництва:
                  </h4>
                  <div className="space-y-2 text-xs">
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'write') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">AWS EC2 / DigitalOcean</span>
                        <span className="text-slate-400">Хостинг власної Headless CMS (Strapi).</span>
                      </div>
                    )}
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'design') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">AWS S3 / Google Storage</span>
                        <span className="text-slate-400">Сховище важких графічних вихідників.</span>
                      </div>
                    )}
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'publish') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">Cloudflare CDN / CloudFront</span>
                        <span className="text-slate-400">Швидка доставка важкого контенту.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* PaaS */}
              <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-xl transition-all">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-indigo-950 text-indigo-400 border border-indigo-800/50 rounded">
                      PaaS
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Platform</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Platform as a Service</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Готове середовище для розгортання та керування додатками без адміністрування фізичних серверів.
                  </p>

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-1.5 text-xs mb-6 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Контроль:</span>
                      <span className="font-semibold text-indigo-400">Середній (код/дані)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Користувач:</span>
                      <span className="text-slate-300">Веб-розробники</span>
                    </div>
                  </div>

                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-800 pb-1">
                    Інструменти видавництва:
                  </h4>
                  <div className="space-y-2 text-xs">
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'write') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">WordPress.com / WP Engine</span>
                        <span className="text-slate-400">Платформа підготовки та верстки текстів.</span>
                      </div>
                    )}
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'design') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">Adobe Experience Platform</span>
                        <span className="text-slate-400">Сервіс обробки та збірки мультимедіа.</span>
                      </div>
                    )}
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'publish') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">Vercel / Firebase / Heroku</span>
                        <span className="text-slate-400">Хостинг інтерактивних PWA-видань.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* SaaS */}
              <div className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-xl transition-all">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800/50 rounded">
                      SaaS
                    </span>
                    <span className="text-xs text-slate-500 font-mono">Software</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Software as a Service</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Готове ПЗ у хмарі, доступне через веб-браузер. Усі технічні завдання та безпеку забезпечує провайдер.
                  </p>

                  <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-1.5 text-xs mb-6 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Контроль:</span>
                      <span className="font-semibold text-emerald-400">Лише власні дані</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Користувач:</span>
                      <span className="text-slate-300">Редактори / Дизайнери</span>
                    </div>
                  </div>

                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 border-b border-slate-800 pb-1">
                    Інструменти видавництва:
                  </h4>
                  <div className="space-y-2 text-xs">
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'write') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">Google Docs / MS 365 Online</span>
                        <span className="text-slate-400">Спільне написання та правка в реальному часі.</span>
                      </div>
                    )}
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'design') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">Figma / Canva / Readymag</span>
                        <span className="text-slate-400">Хмарне проєктування макетів.</span>
                      </div>
                    )}
                    {(selectedStageFilter === 'all' || selectedStageFilter === 'publish') && (
                      <div className="p-2.5 bg-slate-950 border border-slate-800/60 rounded">
                        <span className="font-semibold text-slate-200 block">Issuu / Amazon KDP</span>
                        <span className="text-slate-400">Цифрова дистрибуція готового видання.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Matrix Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl overflow-x-auto">
              <h3 className="text-base font-bold text-white mb-1">
                Зведена матриця розподілу відповідальності
              </h3>
              <p className="text-xs text-slate-400 mb-4 font-mono">
                Зони відповідальності клієнта та провайдера у хмарних стеків
              </p>
              
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="py-3 px-3">Компонент інфраструктури</th>
                    <th className="py-3 px-3 text-center bg-slate-950/50">On-Premise</th>
                    <th className="py-3 px-3 text-center">IaaS</th>
                    <th className="py-3 px-3 text-center">PaaS</th>
                    <th className="py-3 px-3 text-center">SaaS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono">
                  {[
                    { component: 'Контент & Дані видання', onPrem: 'Ви', iaas: 'Ви', paas: 'Ви', saas: 'Ви' },
                    { component: 'Застосунки & Редактори', onPrem: 'Ви', iaas: 'Ви', paas: 'Ви', saas: 'Провайдер' },
                    { component: 'Операційна система (ОС)', onPrem: 'Ви', iaas: 'Ви', paas: 'Провайдер', saas: 'Провайдер' },
                    { component: 'Середовище виконання (Runtime)', onPrem: 'Ви', iaas: 'Ви', paas: 'Провайдер', saas: 'Провайдер' },
                    { component: 'Віртуалізація & Сервери', onPrem: 'Ви', iaas: 'Провайдер', paas: 'Провайдер', saas: 'Провайдер' },
                    { component: 'Мережа & Фізичні сховища', onPrem: 'Ви', iaas: 'Провайдер', paas: 'Провайдер', saas: 'Провайдер' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="py-3 px-3 font-medium text-slate-200">{row.component}</td>
                      <td className="py-3 px-3 text-center bg-slate-950/30 text-slate-500">Користувач</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[11px] ${row.iaas === 'Ви' ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/50 font-bold' : 'text-slate-500'}`}>
                          {row.iaas === 'Ви' ? 'Користувач' : 'Провайдер'}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[11px] ${row.paas === 'Ви' ? 'bg-indigo-950 text-indigo-400 border border-indigo-800/50 font-bold' : 'text-slate-500'}`}>
                          {row.paas === 'Ви' ? 'Користувач' : 'Провайдер'}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[11px] ${row.saas === 'Ви' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50 font-bold' : 'text-slate-500'}`}>
                          {row.saas === 'Ви' ? 'Користувач' : 'Провайдер'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: WORKSPACE CONCEPT */}
        {activeTab === 'workspace' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Розділ II</span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Концепція хмарного робочого простору (Google Docs + Figma)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Інтегрована модель підготовки інтерактивного видання від вичитки тексту до інтерактивного макетування
              </p>
            </div>

            {/* Step Flow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-lg relative">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1">Етап 01</span>
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" /> Google Docs
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Текстовий етап: написання матеріалів, робота редактора у режимі пропозицій, коректура та затвердження тексту.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-lg relative">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-400 block mb-1">Етап 02</span>
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <Figma className="w-4 h-4 text-purple-400" /> Figma Studio
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Візуальний етап: імпорт тексту, створення розворотів, анімацій, кнопок та прототипування інтерактиву.
                </p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-lg relative">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">Етап 03</span>
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-emerald-400" /> Публікація
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Фінальний реліз: експорт у Readymag / Web / ePub інтерактивне видання та кросплатформенний тест.
                </p>
              </div>
            </div>

            {/* Interactive Tool Selector Tabs */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
              <div className="flex space-x-2 border-b border-slate-800 pb-4 mb-6">
                <button
                  onClick={() => setSelectedWorkspaceTool('docs')}
                  className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all ${
                    selectedWorkspaceTool === 'docs'
                      ? 'bg-cyan-500 text-slate-950'
                      : 'bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  Гугл Документи (Google Docs)
                </button>
                <button
                  onClick={() => setSelectedWorkspaceTool('figma')}
                  className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all ${
                    selectedWorkspaceTool === 'figma'
                      ? 'bg-purple-500 text-slate-950'
                      : 'bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  Графічний редактор (Figma)
                </button>
              </div>

              {selectedWorkspaceTool === 'docs' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400" /> Механізми спільної роботи
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-cyan-400 font-bold">•</span>
                        <span><strong>Режим "Пропозиції" (Suggesting):</strong> Редактор вносить правки, які автор приймає або відхиляє.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-cyan-400 font-bold">•</span>
                        <span><strong>Контекстні коментарі:</strong> Обговорення конкретних фрагментів із тегуванням через <code>@email</code>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-cyan-400 font-bold">•</span>
                        <span><strong>Рівні доступу:</strong> Диференціація прав на "Переглядач", "Коментатор" та "Редактор".</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400" /> Контроль версій (Version History)
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-cyan-400 font-bold">•</span>
                        <span><strong>Автоматична історія змін:</strong> Покрокове збереження дій усіх користувачів.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-cyan-400 font-bold">•</span>
                        <span><strong>Іменовані контрольні точки:</strong> Фіксація ключових етапів (напр. <em>"Текст_після_правки_головреда"</em>).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-cyan-400 font-bold">•</span>
                        <span><strong>Відновлення версій:</strong> Миттєвий відкат до будь-якого збереженого стану.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-400" /> Командна верстка у Figma
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-purple-400 font-bold">•</span>
                        <span><strong>Multi-cursor mode:</strong> Одночасна робота кількох дизайнерів над різними розворотами.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-purple-400 font-bold">•</span>
                        <span><strong>Pinned Comments:</strong> Точкові візуальні коментарі арт-директора прямо на компонентах.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-purple-400 font-bold">•</span>
                        <span><strong>Design System & Tokens:</strong> Централізована бібліотека стилів та інтерактивних елементів.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-950 p-5 rounded-lg border border-slate-800">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-purple-400" /> Branching & Merging
                    </h4>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-purple-400 font-bold">•</span>
                        <span><strong>Гілки (Branches):</strong> Розробка нових варіантів дизайну в ізольованій копії файлу.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-purple-400 font-bold">•</span>
                        <span><strong>Злиття (Merging):</strong> Безпечне впровадження затверджених змін у main-макет.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-purple-400 font-bold">•</span>
                        <span><strong>Visual Compare:</strong> Порівняльний перегляд конфліктних правок до злиття.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: DATA ORGANIZATION */}
        {activeTab === 'organization' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Розділ III</span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Організація даних та стандарти іменування
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Правила систематизації видавничого контенту в хмарі
              </p>
            </div>

            {/* File Naming Generator */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Генератор імен файлів (Naming Convention)
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">ПРОЄКТ</label>
                  <input
                    type="text"
                    value={projectCode}
                    onChange={(e) => setProjectCode(e.target.value.toUpperCase())}
                    className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">ТИП</label>
                  <select
                    value={docType}
                    onChange={(e) => setDocType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="TXT">TXT (Текст)</option>
                    <option value="IMG">IMG (Графіка)</option>
                    <option value="FIG">FIG (Макет)</option>
                    <option value="AUDIO">AUDIO (Аудіо)</option>
                    <option value="PUB">PUB (Реліз)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">НАЗВА СТАТТІ</label>
                  <input
                    type="text"
                    value={docName}
                    onChange={(e) => setDocName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">ДАТА (YYYYMMDD)</label>
                  <input
                    type="text"
                    value={docDate}
                    onChange={(e) => setDocDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">ВЕРСІЯ</label>
                  <input
                    type="text"
                    value={docVersion}
                    onChange={(e) => setDocVersion(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">СТАТУС</label>
                  <select
                    value={docStatus}
                    onChange={(e) => setDocStatus(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded px-2.5 py-1.5 text-xs font-mono text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="DRAFT">DRAFT</option>
                    <option value="REVIEW">REVIEW</option>
                    <option value="APPROVED">APPROVED</option>
                    <option value="FINAL">FINAL</option>
                  </select>
                </div>
              </div>

              {/* Output Result */}
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block">Результат стандартизації:</span>
                  <code className="text-xs sm:text-sm font-mono font-bold text-cyan-400">
                    {generatedFileName}.docx
                  </code>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded text-xs font-mono font-bold transition-all"
                >
                  {copied ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Скопійовано' : 'Копіювати ім\'я'}</span>
                </button>
              </div>
            </div>

            {/* Folder Tree Hierarchy */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <FolderTree className="w-4 h-4" /> Ієрархічна структура хмарного каталогу
              </h3>

              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-1.5">
                <div>
                  <div 
                    onClick={() => toggleFolder('root')}
                    className="flex items-center gap-2 cursor-pointer font-bold text-white py-1 hover:text-cyan-400 transition-colors"
                  >
                    {expandedFolders.root ? <ChevronDown className="w-4 h-4 text-cyan-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
                    <span>📂 MAG_2026_Interactive_Issue/</span>
                  </div>

                  {expandedFolders.root && (
                    <div className="pl-6 border-l border-slate-800 ml-2 space-y-1.5 mt-1">
                      <div>
                        <div 
                          onClick={() => toggleFolder('editorial')}
                          className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white py-0.5"
                        >
                          {expandedFolders.editorial ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          <span>📂 01_EDITORIAL/</span>
                        </div>
                        {expandedFolders.editorial && (
                          <div className="pl-6 border-l border-slate-800 ml-2 text-slate-400 space-y-1 py-1">
                            <p>📂 Drafts/</p>
                            <p className="text-cyan-400 font-semibold">📄 {generatedFileName}.docx</p>
                          </div>
                        )}
                      </div>

                      <div>
                        <div 
                          onClick={() => toggleFolder('assets')}
                          className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white py-0.5"
                        >
                          {expandedFolders.assets ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          <span>📂 02_ASSETS/</span>
                        </div>
                        {expandedFolders.assets && (
                          <div className="pl-6 border-l border-slate-800 ml-2 text-slate-400 space-y-1 py-1">
                            <p>📂 Raw_Images/</p>
                            <p>📂 Fonts_Licensing/</p>
                            <p className="text-amber-400">📄 LICENSE.txt</p>
                          </div>
                        )}
                      </div>

                      <div>
                        <div 
                          onClick={() => toggleFolder('design')}
                          className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white py-0.5"
                        >
                          {expandedFolders.design ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          <span>📂 03_DESIGN_FIGMA/</span>
                        </div>
                        {expandedFolders.design && (
                          <div className="pl-6 border-l border-slate-800 ml-2 text-slate-400 space-y-1 py-1">
                            <p className="text-purple-400">🎨 MAG2026_FIG_Layout_20261115_v2.0.fig</p>
                          </div>
                        )}
                      </div>

                      <div>
                        <div 
                          onClick={() => toggleFolder('export')}
                          className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white py-0.5"
                        >
                          {expandedFolders.export ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                          <span>📂 04_EXPORT_FINAL/</span>
                        </div>
                        {expandedFolders.export && (
                          <div className="pl-6 border-l border-slate-800 ml-2 text-slate-400 space-y-1 py-1">
                            <p className="text-emerald-400">📦 Web_Release_v1.0.zip</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RISK ASSESSMENT & SECURITY */}
        {activeTab === 'security' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Розділ IV</span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Оцінка ризиків, безпека та авторські права
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Мінімізація загроз доступності, конфіденційності та правових ризиків
              </p>
            </div>

            {/* Risk Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-xl">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-400 uppercase mb-3">
                  <AlertTriangle className="w-4 h-4 text-amber-400" /> 1. Доступність
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Втрата доступу до хмари під час дедлайну або відсутність інтернет-з'єднання.
                </p>
                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-300">
                  <strong>Мінімізація:</strong> Офлайн-режим Google Docs + бекап 3-2-1.
                </div>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-xl">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-red-400 uppercase mb-3">
                  <Lock className="w-4 h-4 text-red-400" /> 2. Конфіденційність
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Витік ексклюзивних матеріалів до офіційного релізу через неіменовані посилання.
                </p>
                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-300">
                  <strong>Мінімізація:</strong> 2FA + доступ суворо за email-адресами.
                </div>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-xl">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-indigo-400 uppercase mb-3">
                  <Shield className="w-4 h-4 text-indigo-400" /> 3. Авторські права
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Позови через неліцензовану графіку або шрифти в інтерактивному виданні.
                </p>
                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-xs text-slate-300">
                  <strong>Мінімізація:</strong> Папка <code>LICENSE.txt</code> та Web/ePub-ліцензії.
                </div>
              </div>
            </div>

            {/* Security Checklist */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Практичний інспекційний чек-лист безпеки
              </h3>

              <div className="space-y-2.5">
                {[
                  { key: 'offlineMode', title: 'Активовано офлайн-режим у Google Docs', desc: 'Захист від раптового вимкнення інтернет-з\'єднання.' },
                  { key: 'backup321', title: 'Впроваджено правило бекапу 3-2-1', desc: 'Локальна копія вихідних файлів на незалежному накопичувачі.' },
                  { key: 'tfaEnabled', title: 'Двофакторна автентифікація (2FA) увімкнена', desc: 'Захист профілів Figma та Google Workspace.' },
                  { key: 'restrictedSharing', title: 'Вимкнено доступ за публічними посиланнями', desc: 'Надання доступу лише конкретним корпоративним поштам.' },
                  { key: 'assetLicenses', title: 'Перевірено ліцензії стокового мультимедіа', desc: 'Наявність підтверджуючих документів на фото та відео.' },
                  { key: 'fontLicenses', title: 'Наявність Web/Digital Publishing ліцензій на шрифти', desc: 'Офіційний дозвіл на вбудовування гарнітур у макет.' },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                      securityChecklist[item.key]
                        ? 'bg-emerald-950/30 border-emerald-800/60'
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className={`mt-0.5 rounded p-0.5 ${securityChecklist[item.key] ? 'bg-emerald-500 text-slate-950' : 'border border-slate-600 text-transparent'}`}>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold ${securityChecklist[item.key] ? 'text-emerald-400' : 'text-slate-200'}`}>
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: REFERENCES */}
        {activeTab === 'references' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Розділ V</span>
              <h2 className="text-2xl font-bold text-white mt-0.5">
                Джерела інформації та нормативні стандарти
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Список використаних специфікацій та матеріалів
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'NIST Special Publication 800-145',
                  subtitle: 'The NIST Definition of Cloud Computing',
                  desc: 'Офіційний стандарт Національного інституту стандартів і технологій США з класифікацією хмарних моделей IaaS, PaaS, SaaS.',
                  link: 'https://csrc.nist.gov/publications/detail/sp/800-145/final',
                  tag: 'Стандарт NIST'
                },
                {
                  title: 'Figma Help Center Documentation',
                  subtitle: 'Version History & Branching Guide',
                  desc: 'Офіційна документація щодо контролю версій, розгалуження проєктів (Branching) та командного макетування.',
                  link: 'https://help.figma.com',
                  tag: 'Figma Docs'
                },
                {
                  title: 'Google Workspace Learning Center',
                  subtitle: 'Collaborate in Google Docs',
                  desc: 'Керівництво з налаштування спільних режимів редагування, коментування та історії версій.',
                  link: 'https://support.google.com/a/users',
                  tag: 'Google Docs'
                },
                {
                  title: 'AWS Architecture Center',
                  subtitle: 'Cloud Publishing Patterns',
                  desc: 'Архітектурні патерни та рекомендації Amazon Web Services щодо побудови видавничих контент-платформ.',
                  link: 'https://aws.amazon.com/architecture',
                  tag: 'AWS Cloud'
                }
              ].map((ref, i) => (
                <div key={i} className="bg-slate-900 p-5 rounded-xl border border-slate-800 shadow-xl flex flex-col justify-between hover:border-slate-700 transition-all">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 bg-slate-950 text-cyan-400 border border-slate-800 rounded">
                        {ref.tag}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{ref.title}</h3>
                    <h4 className="text-xs text-slate-500 font-mono italic mb-2">{ref.subtitle}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{ref.desc}</p>
                  </div>
                  <a
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Переглянути джерело</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* Dark Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/60 py-6 mt-16 text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 CloudPub Architecture Lab. Звіт з хмарних видавничих моделей.
          </div>
          <div className="flex items-center gap-3 text-slate-400">
            <span>Dark Theme Standard</span>
            <span>•</span>
            <span className="text-cyan-400">IaaS / PaaS / SaaS</span>
          </div>
        </div>
      </footer>

    </div>
  );
}