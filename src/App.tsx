import React, { useState } from 'react';

const LogoEgreMatch = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
    <path d="M50 85L25 70V40L50 30L75 40V70L50 85Z" fill="#1e3a5f" />
    <path d="M50 85L50 30L75 40V70L50 85Z" fill="#00a8b5" />
    <path d="M15 35L50 20L85 35L50 50L15 35Z" fill="#1e3a5f" />
    <path d="M50 50L85 35V45L50 60L15 45V35L50 50Z" fill="#1e3a5f" opacity="0.8"/>
    <rect x="83" y="35" width="2" height="15" fill="#1e3a5f" />
    <circle cx="84" cy="52" r="3" fill="#1e3a5f" />
    <path d="M45 45L60 38V52L45 58V45Z" fill="white" />
  </svg>
);

const Icons = {
  Back: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>,
  Check: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
  Building: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  GradCap: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
  Menu: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>,
  Pencil: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>,
  User: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  NavExplore: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  NavHeart: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  NavMatch: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  NavHistory: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  NavProfile: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  Reject: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>,
  SuperLike: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>,
  Like: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  Briefcase: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Rocket: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5L21 3m-7.5 7.5v-3.5a1.5 1.5 0 00-1.5-1.5h-3.5L3 21l8-2 2.5 2.5a1.5 1.5 0 002.12-2.12l-2-2.5 2-8z" /></svg>,
  Calendar: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00a8b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  MapPin: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00a8b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
};

const mockJobs = [
  { id: 1, title: 'Analista de Datos', company: 'InfoCorp', location: 'Remoto', salary: 'S/. 3500.00', match: 60, tags: ['Python', 'SQL', 'Tableau', 'Excel'] },
  { id: 2, title: 'Desarrollador Backend', company: 'NovaCorp', location: 'Híbrido', salary: 'S/. 4500.00', match: 98, tags: ['Node.js', 'Express', 'MongoDB'] },
  { id: 3, title: 'Base de Datos', company: 'InJob', location: 'Presencial', salary: 'S/. 2800.00', match: 92, tags: ['MySQL', 'Oracle', 'PL/SQL'] },
  { id: 4, title: 'Desarrollador Frontend', company: 'DevCT', location: 'Remoto', salary: 'S/. 3200.00', match: 45, tags: ['React', 'CSS', 'HTML'] },
];

const mockCandidatos = [
  { id: 1, name: 'Karla Verónica Cornejo Pari', career: 'Cs. de la Computación', match: 98, color: 'bg-green-100', borderColor: 'border-green-400', tags: ['Python', 'C++', 'Java', 'React'] },
  { id: 2, name: 'Lizardo Manuel Castillo Lluza', career: 'Cs. de la Computación', match: 85, color: 'bg-[#d0eaeb]', borderColor: 'border-[#00a8b5]', tags: ['Python', 'Angular'] },
  { id: 3, name: 'Juan Jose Perez Perez', career: 'Ing. Civil', match: 50, color: 'bg-yellow-100', borderColor: 'border-yellow-400', tags: ['AutoCAD', 'Excel'] },
];

const ProgressBar = ({ current, total = 4 }) => (
  <div className="flex items-center justify-center w-full mb-8 shrink-0">
    {Array.from({ length: total }).map((_, index) => (
      <React.Fragment key={index}>
        <div className={`w-3 h-3 rounded-full ${index + 1 === current ? 'bg-[#1e3a5f] scale-125' : index + 1 < current ? 'bg-[#00a8b5]' : 'bg-gray-300'} transition-all`} />
        {index < total - 1 && (
          <div className={`h-[2px] w-8 ${index + 1 < current ? 'bg-[#00a8b5]' : 'bg-gray-300'} transition-all`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

const Header = ({ onBack, showBack = true, title = null }) => (
  <div className="w-full flex items-center justify-between mb-4 shrink-0 h-10">
    {showBack ? (
      <button onClick={onBack} className="p-2 -ml-2 text-[#1e3a5f] hover:bg-gray-100 rounded-full transition-colors">
        <Icons.Back />
      </button>
    ) : title ? (
      <button className="p-2 -ml-2 text-[#1e3a5f] hover:bg-gray-100 rounded-full transition-colors">
        <Icons.Menu />
      </button>
    ) : <div className="w-10"></div>}
    
    {title && <h1 className="text-xl font-bold text-[#1e3a5f] flex-1 text-center truncate">{title}</h1>}
    
    {title ? <div className="w-10"></div> : <div className="w-10"></div>}
  </div>
);

export default function App() {
  const [currentView, setCurrentView] = useState('HOME');
  const [userType, setUserType] = useState(null); 
  const [history, setHistory] = useState([]);
  
  // Dashboard States (Egresado)
  const [dashTab, setDashTab] = useState('PERFIL'); // EXPLORAR, FAVORITOS, MATCH, HISTORIAL, PERFIL
  const [perfilSubTab, setPerfilSubTab] = useState('INFO');
  const [favSubTab, setFavSubTab] = useState('FAVORITOS');
  const [explorarExpanded, setExplorarExpanded] = useState(false);

  // Dashboard States (Empresa)
  const [empresaDashTab, setEmpresaDashTab] = useState('EMPRESA'); // EMPRESA, CONVOCATORIA, MATCH, CANDIDATOS, PERFIL
  const [selectedCandidato, setSelectedCandidato] = useState(null);

  // Navigation Logic
  const navigate = (view) => {
    setHistory([...history, currentView]);
    setCurrentView(view);
  };

  const goBack = () => {
    if (history.length === 0) return;
    const newHistory = [...history];
    const previousView = newHistory.pop();
    setHistory(newHistory);
    setCurrentView(previousView);
  };

  const renderHome = () => (
    <div className="flex flex-col items-center w-full mt-10 p-6">
      <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">Ingresar</h2>
      <p className="text-[#00a8b5] font-medium mb-12">¿Cómo?</p>

      <button onClick={() => { setUserType('EGRESADO'); navigate('LOGIN'); }} className="w-full flex items-center justify-center gap-4 bg-[#e6f4f5] border-2 border-[#00a8b5] text-[#1e3a5f] font-bold py-4 px-6 rounded-2xl mb-6 hover:bg-[#d0eaeb] transition-colors shadow-sm">
        <Icons.GradCap />
        <span className="text-lg">Egresado</span>
      </button>

      <button onClick={() => { setUserType('EMPRESA'); navigate('LOGIN'); }} className="w-full flex items-center justify-center gap-4 bg-[#e6f4f5] border-2 border-[#00a8b5] text-[#1e3a5f] font-bold py-4 px-6 rounded-2xl hover:bg-[#d0eaeb] transition-colors shadow-sm">
        <Icons.Building />
        <span className="text-lg">Empresa</span>
      </button>
    </div>
  );

  const renderLogin = () => (
    <div className="flex flex-col items-center w-full p-6 h-full relative pb-10">
      <Header onBack={goBack} />
      <div className="mb-8 flex flex-col items-center">
        <LogoEgreMatch />
        <h1 className="text-3xl font-bold tracking-tight text-[#1e3a5f]">Egre<span className="text-[#00a8b5]">Match</span></h1>
        <p className="text-gray-500 text-[10px] mt-1 font-medium">Conectando graduados al éxito</p>
      </div>
      <button onClick={() => navigate(userType === 'EGRESADO' ? 'EG_PHONE' : 'EM_INFO')} className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl py-3 px-4 shadow-sm hover:bg-gray-50 transition-colors mb-6">
        <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Continuar con google
        </span>
      </button>
      <div className="w-full flex items-center justify-center mb-6">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-gray-400 text-xs px-2 font-medium">o</span>
          <div className="h-px bg-gray-200 flex-1"></div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="relative">
            <div className="absolute left-4 top-3.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <input type="email" placeholder="Dirección de correo" className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#00a8b5] bg-white text-center font-medium placeholder-gray-400" />
        </div>
        <button onClick={() => navigate(userType === 'EGRESADO' ? 'EG_PHONE' : 'EM_INFO')} className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl shadow-sm">Continuar</button>
      </div>
      <div className="absolute bottom-6 w-full text-center text-xs text-gray-500">
        ¿Ya tienes cuenta? <span className="text-[#00a8b5] font-bold cursor-pointer">Inicia sesión</span>
      </div>
    </div>
  );

  const renderEgPhone = () => (
    <div className="flex flex-col items-center w-full p-6 h-full">
        <Header onBack={goBack} />
        <ProgressBar current={1} total={4} />
        <div className="w-full text-left mb-2">
            <h2 className="text-2xl font-bold text-[#1e3a5f]">Numero Telefónico</h2>
        </div>
        <p className="text-xs text-gray-500 mb-6 w-full text-left font-medium">Ingresa tu número de teléfono para continuar</p>
        <div className="w-full flex flex-col gap-6 mb-auto">
            <div className="flex items-center bg-[#e6f4f5] border border-[#00a8b5] rounded-xl px-3 py-1 shadow-sm">
                <span className="text-xl mr-2">📞</span>
                <span className="text-[#1e3a5f] border-r border-[#00a8b5] pr-3 py-2 font-bold">+51</span>
                <input type="tel" placeholder="--- --- ---" className="w-full px-3 py-2 bg-transparent outline-none font-bold text-gray-700 tracking-widest" />
            </div>
        </div>
        <button onClick={() => navigate('EG_VERIFY')} className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl mt-auto shadow-sm">Continuar →</button>
    </div>
  );

  const renderVerify = (nextRoute, step) => (
    <div className="flex flex-col items-center w-full p-6 h-full">
        <Header onBack={goBack} />
        <ProgressBar current={step} total={4} />
        <div className="w-full text-left mb-2 mt-2">
            <h2 className="text-2xl font-bold text-[#1e3a5f] leading-tight">Ingresa tu Codigo<br/>de Verificacion</h2>
        </div>
        <p className="text-[10px] text-gray-500 mb-8 w-full text-left pr-4 leading-relaxed">Hemos enviado un codigo de 4 digitos al<br/>numero +51 xxx xxx xxx</p>
        
        <div className="flex justify-center gap-3 mb-3 w-full">
            {[1, 2, 3, 4].map(i => <input key={i} type="text" maxLength="1" placeholder="0" className="w-14 h-16 border-2 border-[#00a8b5] rounded-xl text-center text-3xl font-bold text-[#1e3a5f] bg-[#f8fcfc] focus:outline-none placeholder-gray-300" />)}
        </div>
        <p className="text-[10px] font-semibold text-gray-400 mb-8 w-full text-center">Reenviar Codigo (00:40)</p>
        
        <button onClick={() => navigate(nextRoute)} className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl mt-auto shadow-sm">Continuar →</button>
    </div>
  );

  const renderEgWelcome = () => (
    <div className="flex flex-col items-center w-full p-6 h-full">
        <Header onBack={goBack} />
        <div className="w-full text-center mb-6 mt-4">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">!Bienvenida!</h2>
            <p className="text-[#00a8b5] font-bold text-lg leading-tight">Karla Verónica<br/>Cornejo Pari</p>
        </div>
        <div className="w-40 h-40 bg-[#e6f4f5] rounded-full flex items-center justify-center mb-8 border-4 border-[#00a8b5] shadow-lg overflow-hidden relative">
            <div className="w-full h-full flex flex-col items-center justify-end pt-5">
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-full mb-1"></div>
                <div className="w-32 h-16 bg-[#1e3a5f] rounded-t-full"></div>
            </div>
        </div>
        <p className="text-[10px] text-gray-500 text-center mb-8 px-8 leading-relaxed font-medium">Completa tu perfil y encuentra las<br/>mejores oportunidades para ti.</p>
        <button onClick={() => navigate('EG_CAREER')} className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl mt-auto shadow-sm">Comenzar →</button>
    </div>
  );

  const renderEgCareer = () => (
    <div className="flex flex-col items-center w-full p-6 h-full">
        <Header onBack={goBack} />
        <ProgressBar current={3} total={4} />
        <div className="w-full text-left mb-2">
            <h2 className="text-2xl font-bold text-[#1e3a5f]">Carrera Profesional</h2>
            <p className="text-xs text-gray-500 mb-4 font-medium mt-1">Selecciona tu Carrera Profesional</p>
        </div>
        <div className="w-full mb-6 relative">
            <input type="text" placeholder="Buscar Carrera..." className="w-full px-4 py-3 border-2 border-[#00a8b5] rounded-xl pl-10 focus:outline-none font-medium placeholder-gray-400" />
            <div className="absolute left-3 top-3.5 text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
        </div>
        <div className="w-full flex flex-col gap-3 mb-auto">
            <div className="flex items-center justify-between border-2 border-[#00a8b5] rounded-xl p-3 bg-[#e6f4f5] shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#c4e8eb] rounded border border-[#00a8b5] flex items-center justify-center text-lg">💻</div>
                    <span className="font-bold text-[#1e3a5f] text-sm">Cs. de la Computación</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white"><Icons.Check /></div>
            </div>
            <div className="flex items-center justify-between border-2 border-gray-200 rounded-xl p-3 bg-white">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded border border-gray-200 flex items-center justify-center text-lg">🏗️</div>
                    <span className="font-semibold text-gray-400 text-sm">Ing. Civil</span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
            </div>
        </div>
        <button onClick={() => navigate('EG_MODALITY')} className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl mt-auto shadow-sm">Siguiente →</button>
    </div>
  );

  const renderEgModality = () => (
    <div className="flex flex-col items-center w-full p-6 h-full pb-8">
        <Header onBack={goBack} />
        <ProgressBar current={4} total={4} />
        <div className="w-full text-left mb-3">
            <h2 className="text-2xl font-bold text-[#1e3a5f]">Modalidad de Trabajo</h2>
        </div>
        
        <div className="w-full flex-1 overflow-y-auto no-scrollbar">
            <p className="text-[11px] font-semibold text-gray-500 mb-2">¿Qué tipo de trabajo estás buscando?</p>
            <div className="flex flex-col gap-2 mb-4">
                {['Full Time', 'Part Time', 'Freelance', 'Recibo por Honorarios', 'Practicas'].map((item, i) => (
                    <label key={i} className={`flex items-center justify-between border-2 ${i === 0 ? 'border-[#00a8b5] bg-[#f0f9fa]' : 'border-gray-300 bg-white'} rounded-xl p-3`}>
                        <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 border-2 rounded-md ${i === 0 ? 'border-[#00a8b5] bg-[#00a8b5]' : 'border-gray-400 bg-gray-100'} flex items-center justify-center`}>
                                {i === 0 && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>}
                            </div>
                            <span className={`text-sm font-bold ${i === 0 ? 'text-[#1e3a5f]' : 'text-gray-500'}`}>{item}</span>
                        </div>
                    </label>
                ))}
            </div>

            <p className="text-[11px] font-semibold text-gray-500 mb-2">¿Dónde te gustaría trabajar?</p>
            <div className="flex flex-col gap-2">
                 {['Presencial', 'Remoto', 'Híbrido'].map((item, i) => (
                    <label key={i} className={`flex items-center justify-between border-2 ${i === 0 ? 'border-[#00a8b5] bg-[#f0f9fa]' : 'border-gray-300 bg-white'} rounded-xl p-3`}>
                        <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 border-2 rounded-md ${i === 0 ? 'border-[#00a8b5] bg-[#00a8b5]' : 'border-gray-400 bg-gray-100'} flex items-center justify-center`}>
                                {i === 0 && <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>}
                            </div>
                            <span className={`text-sm font-bold ${i === 0 ? 'text-[#1e3a5f]' : 'text-gray-500'}`}>{item}</span>
                        </div>
                    </label>
                ))}
            </div>
        </div>

        <div className="w-full flex gap-3 mt-4 shrink-0">
            <button onClick={() => navigate('DONE')} className="w-1/3 bg-white border-2 border-gray-400 text-gray-600 font-bold py-3 rounded-xl shadow-sm">Omitir</button>
            <button onClick={() => navigate('DONE')} className="w-2/3 bg-[#00a8b5] text-white font-bold py-3 rounded-xl shadow-sm">Siguiente →</button>
        </div>
    </div>
  );

  const renderEmInfo = () => (
    <div className="flex flex-col items-center w-full p-6 h-full">
        <Header onBack={goBack} />
        <ProgressBar current={1} total={4} />
        <div className="w-full text-left mb-2">
            <h2 className="text-2xl font-bold text-[#1e3a5f] leading-tight">Información de<br/>la Empresa</h2>
            <p className="text-[10px] text-gray-500 mb-6 mt-2 font-medium">Ingrese los datos de la empresa.</p>
        </div>
        <div className="w-full flex flex-col gap-4 mb-auto">
            <input type="text" placeholder="Nro de Ruc..." className="w-full px-4 py-3.5 bg-[#e6f4f5] border-2 border-[#00a8b5] rounded-xl focus:outline-none font-semibold text-sm placeholder-gray-500" />
            <input type="text" placeholder="Razón Social..." className="w-full px-4 py-3.5 bg-[#e6f4f5] border-2 border-[#00a8b5] rounded-xl focus:outline-none font-semibold text-sm placeholder-gray-500" />
            <input type="text" placeholder="Ubicación de Cede..." className="w-full px-4 py-3.5 bg-[#e6f4f5] border-2 border-[#00a8b5] rounded-xl focus:outline-none font-semibold text-sm placeholder-gray-500" />
        </div>
        <button onClick={() => navigate('EM_CONTACT')} className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl mt-6 shadow-sm">Continuar →</button>
    </div>
  );

  const renderEmContact = () => (
    <div className="flex flex-col items-center w-full p-6 h-full">
        <Header onBack={goBack} />
        <ProgressBar current={2} total={4} />
        <div className="w-full text-left mb-6">
            <h2 className="text-2xl font-bold text-[#1e3a5f] leading-tight mt-2">Contacto de la<br/>Empresa</h2>
        </div>
        <div className="w-full flex flex-col gap-4 mb-2">
            <input type="text" placeholder="Nombre completo del contacto..." className="w-full px-4 py-3.5 border-2 border-[#00a8b5] rounded-xl focus:outline-none font-semibold text-sm placeholder-gray-400" />
            <input type="text" placeholder="Cargo en la Empresa..." className="w-full px-4 py-3.5 border-2 border-[#00a8b5] rounded-xl focus:outline-none font-semibold text-sm placeholder-gray-400" />
            <div className="flex items-center bg-[#e6f4f5] border-2 border-[#00a8b5] rounded-xl px-3 py-0.5">
                <span className="text-xl mr-2">📞</span>
                <span className="text-[#1e3a5f] border-r border-[#00a8b5] pr-3 py-2.5 font-bold">+51</span>
                <input type="tel" placeholder="--- --- ---" className="w-full px-3 py-2.5 bg-transparent outline-none font-bold tracking-widest text-gray-700" />
            </div>
        </div>
        <p className="text-[10px] text-gray-400 w-full text-left mb-auto pl-1 font-medium">Este número será verificado para<br/>autenticar.</p>
        <button onClick={() => navigate('EM_VERIFY')} className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl mt-6 shadow-sm">Continuar →</button>
    </div>
  );

  const renderEmWelcome = () => (
    <div className="flex flex-col items-center w-full p-6 h-full">
        <Header onBack={goBack} />
        <ProgressBar current={4} total={4} />
        <div className="w-full text-center mb-8 mt-4">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-2">!Bienvenido!</h2>
            <p className="text-[#00a8b5] font-bold text-lg">Nombre de la<br/>Empresa</p>
        </div>
        <div className="relative mb-8">
            <div className="w-36 h-36 bg-[#e6f4f5] rounded-2xl flex items-center justify-center border-4 border-[#00a8b5] shadow-lg">
                {/* Simplified SVG Building Icon based on wireframe */}
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="25" y="30" width="50" height="70" fill="#1e3a5f" rx="4"/>
                    <rect x="35" y="45" width="10" height="15" fill="#c4e8eb" rx="2"/>
                    <rect x="55" y="45" width="10" height="15" fill="#c4e8eb" rx="2"/>
                    <rect x="35" y="70" width="10" height="15" fill="#c4e8eb" rx="2"/>
                    <rect x="55" y="70" width="10" height="15" fill="#c4e8eb" rx="2"/>
                    <path d="M15 35L50 15L85 35H15Z" fill="#00a8b5" />
                </svg>
            </div>
        </div>
        <p className="text-[10px] text-gray-500 text-center mb-8 px-6 leading-relaxed font-medium">Completa tu perfil y encuentra las<br/>mejores oportunidades para ti.</p>
        <button onClick={() => navigate('DONE')} className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl mt-auto shadow-sm">Comenzar →</button>
    </div>
  );

  const renderDone = () => (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 min-h-[500px]">
      <div className="text-center mb-10 mt-10">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">!Listo!</h2>
          <p className="text-[#4caf50] font-bold text-lg leading-tight">Todo esta<br/>preparado para<br/>comenzar</p>
      </div>
      <div className="w-40 h-40 bg-[#e8f5e9] rounded-full flex items-center justify-center mb-16 border-[6px] border-[#4caf50] shadow-xl">
          <svg className="h-24 w-24 text-[#4caf50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
      </div>
      <button onClick={() => setCurrentView('DASHBOARD')} className="w-full border-2 border-[#4caf50] text-[#4caf50] bg-white hover:bg-[#4caf50] hover:text-white transition-colors font-bold py-3.5 rounded-xl">Comenzar →</button>
    </div>
  );

  const renderDashboardPerfil = () => (
    <div className="flex flex-col h-full w-full">
      {/* Sub-tabs menu */}
      <div className="w-full overflow-x-auto no-scrollbar border-b border-gray-200 shrink-0">
        <div className="flex px-4 gap-4 pb-2">
          {['INFO', 'FORMACION', 'EXPERIENCIA', 'PROYECTOS', 'CERTIFICACIONES'].map((tab) => (
            <button key={tab} onClick={() => setPerfilSubTab(tab)} 
              className={`text-xs font-semibold whitespace-nowrap pb-1 border-b-2 transition-colors ${perfilSubTab === tab ? 'border-[#00a8b5] text-[#00a8b5]' : 'border-transparent text-gray-400'}`}>
              {tab === 'INFO' ? 'Información' : tab === 'FORMACION' ? 'Formación' : tab === 'EXPERIENCIA' ? 'Experiencia' : tab === 'PROYECTOS' ? 'Proyectos' : 'Certificaciones y Logros'}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {perfilSubTab === 'INFO' && (
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 bg-[#e6f4f5] rounded-full flex items-center justify-center border-2 border-[#1e3a5f] mb-4">
              <Icons.User />
              <button className="absolute -right-1 -bottom-1 bg-[#1e3a5f] rounded-full p-1.5 border border-white"><Icons.Pencil /></button>
            </div>
            <h2 className="text-xl font-bold text-[#1e3a5f]">Karla Cornejo</h2>
            <p className="text-sm text-gray-500 mb-6">Cs. de la Computación</p>

            <div className="w-full border border-gray-200 rounded-xl p-4 mb-4 bg-white">
              <h3 className="text-[#00a8b5] font-semibold text-sm mb-2 border-b border-gray-100 pb-1">Información Básica</h3>
              <p className="text-sm text-gray-700 mb-1"><span className="font-medium">Email:</span> karla.cornejo@email.com</p>
              <p className="text-sm text-gray-700"><span className="font-medium">Teléfono:</span> +51 987654321</p>
            </div>

            <div className="w-full border border-gray-200 rounded-xl p-4 mb-4 bg-white">
              <h3 className="text-[#00a8b5] font-semibold text-sm mb-3 border-b border-gray-100 pb-1">Preferencias</h3>
              <div className="flex flex-wrap gap-2">
                {['Part Time', 'Full Time', 'Presencial', 'Híbrido', 'Virtual'].map(tag => (
                  <span key={tag} className="text-xs border border-[#00a8b5] text-[#00a8b5] px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {perfilSubTab === 'FORMACION' && (
          <div className="flex flex-col">
            <div className="flex justify-end mb-4">
              <button className="text-xs text-[#00a8b5] border border-[#00a8b5] px-3 py-1 rounded-full flex items-center gap-1">+ Agregar</button>
            </div>
            <div className="border border-gray-200 rounded-xl p-4 flex items-start gap-4 bg-white mb-6">
              <div className="bg-gray-100 p-2 rounded-lg text-gray-500 text-2xl">🎓</div>
              <div>
                <h3 className="font-bold text-[#1e3a5f] text-sm leading-tight">Titulación en Ciencia<br/>de la Computación</h3>
                <p className="text-xs text-gray-500 mt-1">Universidad Nacional...</p>
                <p className="text-[10px] text-gray-400">2018 - 2023</p>
              </div>
            </div>
            <div className="bg-[#e6f4f5] border border-[#00a8b5] rounded-xl p-3 flex items-start gap-3 mt-auto">
              <div className="text-[#00a8b5] text-lg mt-1">💡</div>
              <div>
                <h4 className="text-xs font-bold text-[#1e3a5f]">Consejo</h4>
                <p className="text-[10px] text-gray-600 mt-1">Añadir tu formación académica aumenta tus posibilidades de match en un 40%.</p>
              </div>
            </div>
          </div>
        )}

        {perfilSubTab === 'EXPERIENCIA' && (
          <div className="flex flex-col">
             <div className="flex justify-end mb-4">
              <button className="text-xs text-[#00a8b5] border border-[#00a8b5] px-3 py-1 rounded-full flex items-center gap-1">+ Agregar</button>
            </div>
            {[
              { role: 'Analista de Datos', co: 'Tech Solutions SAC', time: '2022 - Actualidad', icon: '📊' },
              { role: 'Inteligencia Artificial', co: 'Data Minds', time: '2021 - 2022', icon: '🤖' }
            ].map((exp, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-4 flex items-start gap-4 bg-white mb-3">
                <div className="bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center text-xl">{exp.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1e3a5f] text-sm">{exp.role}</h3>
                  <p className="text-xs text-gray-500 mt-1">{exp.co}</p>
                  <p className="text-[10px] text-gray-400">{exp.time}</p>
                </div>
              </div>
            ))}
            <div className="bg-[#e6f4f5] border border-[#00a8b5] rounded-xl p-3 flex items-start gap-3 mt-4">
              <div className="text-[#00a8b5] text-lg mt-1">💡</div>
              <div><h4 className="text-xs font-bold text-[#1e3a5f]">Consejo</h4><p className="text-[10px] text-gray-600">Destaca tus logros principales en cada experiencia.</p></div>
            </div>
          </div>
        )}

        {perfilSubTab === 'PROYECTOS' && (
          <div className="flex flex-col">
            <div className="flex justify-end mb-4">
              <button className="text-xs text-[#00a8b5] border border-[#00a8b5] px-3 py-1 rounded-full flex items-center gap-1">+ Agregar</button>
            </div>
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <div className="h-24 bg-gray-200 w-full flex items-center justify-center text-gray-400 text-xs">Imagen del Proyecto</div>
              <div className="p-4">
                <h3 className="font-bold text-[#1e3a5f] text-sm">Sistema de Recomendación</h3>
                <p className="text-[10px] text-gray-500 mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.</p>
                <div className="flex justify-end">
                  <button className="text-xs bg-[#00a8b5] text-white px-4 py-1.5 rounded-lg">Visitar</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {perfilSubTab === 'CERTIFICACIONES' && (
           <div className="flex flex-col">
            <div className="flex justify-end mb-4"><button className="text-xs text-[#00a8b5] border border-[#00a8b5] px-3 py-1 rounded-full flex items-center gap-1">+ Agregar</button></div>
            <div className="border border-gray-200 rounded-xl p-2 bg-white flex flex-col gap-2 mb-6">
              {['AWS Cloud Practitioner', 'Scrum Fundamentals', 'Python for Data Science'].map((cert, i) => (
                <div key={i} className="flex items-center gap-3 p-2 border-b border-gray-100 last:border-0">
                  <div className="bg-gray-100 p-2 rounded-lg text-lg">📜</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1e3a5f] text-xs">{cert}</h3>
                    <div className="flex gap-1 mt-1">
                      <div className="h-1 w-6 bg-red-400 rounded-full"></div>
                      <div className="h-1 w-6 bg-green-400 rounded-full"></div>
                      <div className="h-1 w-6 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                  <button className="text-gray-400 px-2">⋮</button>
                </div>
              ))}
            </div>
            <div className="bg-[#e6f4f5] border border-[#00a8b5] rounded-xl p-3 flex items-start gap-3 mt-auto">
              <div className="text-[#00a8b5] text-lg mt-1">💡</div>
              <div><h4 className="text-xs font-bold text-[#1e3a5f]">Consejo</h4><p className="text-[10px] text-gray-600">Mantén tus certificaciones actualizadas.</p></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderDashboardExplorar = () => {
    const job = mockJobs[0];
    return (
      <div className="flex flex-col h-full w-full p-4 relative pb-24 items-center">
        {/* Background Stack Cards */}
        <div className="absolute top-8 w-64 h-80 bg-white border border-gray-200 rounded-2xl shadow-sm transform scale-90 -translate-y-4 -z-20 opacity-50"></div>
        <div className="absolute top-8 w-72 h-80 bg-white border border-gray-200 rounded-2xl shadow-md transform scale-95 -translate-y-2 -z-10 rotate-2 opacity-70"></div>
        
        {/* Main Card */}
        <div className="w-full max-w-[300px] bg-white border-2 border-[#00a8b5] rounded-2xl shadow-lg flex flex-col overflow-hidden transition-all z-10 mt-4">
          <div className="p-5 flex flex-col items-center relative">
            <div className="absolute top-4 right-4 text-[#ffb020] font-bold text-lg rotate-12 bg-yellow-50 border border-yellow-200 px-2 rounded-lg shadow-sm">{job.match}%</div>
            
            <div className="w-16 h-16 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-3xl">📊</div>
            <h2 className="text-xl font-bold text-[#1e3a5f] text-center leading-tight mb-1">{job.title}</h2>
            <p className="text-sm text-gray-500 font-medium mb-1">{job.company}</p>
            <p className="text-xs text-gray-400 mb-4">{job.location} • {job.salary}</p>

            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              {job.tags.map(tag => <span key={tag} className="text-[10px] bg-[#e6f4f5] text-[#00a8b5] px-2 py-1 rounded-md font-medium border border-[#00a8b5] opacity-80">{tag}</span>)}
            </div>

            {explorarExpanded ? (
              <div className="w-full border-t border-gray-100 pt-4 text-left animate-fade-in">
                <h3 className="text-sm font-bold text-[#1e3a5f] mb-2">Detalles de la Vacante</h3>
                <p className="text-[10px] text-gray-600 mb-3 leading-relaxed">Buscamos un analista de datos proactivo para unirse a nuestro equipo. Experiencia en visualización y limpieza de datos.</p>
                <h3 className="text-sm font-bold text-[#1e3a5f] mb-2">Requisitos</h3>
                <ul className="text-[10px] text-gray-600 list-disc pl-4 mb-4">
                  <li>Experiencia de 1-2 años.</li>
                  <li>Dominio de Python y SQL.</li>
                  <li>Conocimiento en Tableau o PowerBI.</li>
                </ul>
                <button className="w-full bg-[#00a8b5] text-white py-2 rounded-xl text-sm font-bold shadow-md">Postular</button>
              </div>
            ) : (
              <button onClick={() => setExplorarExpanded(true)} className="text-[#00a8b5] text-sm font-semibold mb-2">Ver Detalles</button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {!explorarExpanded && (
          <div className="flex justify-center gap-6 mt-8 z-10">
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-red-100 hover:bg-red-50 text-red-500"><Icons.Reject /></button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-yellow-100 hover:bg-yellow-50 text-yellow-500 mt-2"><Icons.SuperLike /></button>
            <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg border border-green-100 hover:bg-green-50 text-green-500"><Icons.Like /></button>
          </div>
        )}
      </div>
    );
  };

  const renderDashboardMatch = () => (
    <div className="flex flex-col h-full w-full p-4 overflow-y-auto pb-24 gap-4">
      {mockJobs.filter(j => j.match >= 90).map((job) => (
        <div key={job.id} className="w-full border-2 border-[#00a8b5] rounded-xl p-4 bg-white shadow-sm relative">
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#e8f5e9] border-2 border-green-500 flex items-center justify-center text-green-600 font-bold text-sm shadow-sm">{job.match}%</div>
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl mb-3">
            {job.title.includes('Backend') ? '⚙️' : '🗄️'}
          </div>
          <h3 className="font-bold text-[#1e3a5f] text-lg leading-tight">{job.title}</h3>
          <p className="text-sm text-gray-500 mb-1">{job.company} <span className="text-green-500 ml-1">✓</span></p>
          <p className="text-xs text-gray-400 mb-3">{job.salary}</p>
          <div className="flex gap-1.5 mb-4">
             {job.tags.slice(0,3).map(tag => <span key={tag} className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded border border-purple-200">{tag}</span>)}
          </div>
          <button className="w-full border border-[#00a8b5] text-[#00a8b5] py-2 rounded-lg text-sm font-semibold hover:bg-[#e6f4f5]">Ver Detalles</button>
        </div>
      ))}
    </div>
  );

  const renderDashboardFavoritos = () => (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center gap-4 px-4 py-2 mb-4 shrink-0">
        <button onClick={() => setFavSubTab('FAVORITOS')} className={`text-sm font-bold px-4 py-1.5 rounded-full transition-all ${favSubTab === 'FAVORITOS' ? 'bg-[#00a8b5] text-white' : 'border border-gray-300 text-gray-400'}`}>Favoritos</button>
        <button onClick={() => setFavSubTab('POSTULADOS')} className={`text-sm font-bold px-4 py-1.5 rounded-full transition-all ${favSubTab === 'POSTULADOS' ? 'bg-[#00a8b5] text-white' : 'border border-gray-300 text-gray-400'}`}>Postulados</button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24 flex flex-col gap-3">
        {mockJobs.slice(0,3).map((job, idx) => (
          <div key={idx} className="w-full border-2 border-green-500 rounded-xl p-4 bg-white flex items-center gap-4 relative">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-2xl shrink-0">
              {idx === 0 ? '⚙️' : idx === 1 ? '🗄️' : '🎨'}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#1e3a5f] text-sm leading-tight">{job.title}</h3>
              <p className="text-xs text-gray-500">{job.company}</p>
              <p className="text-[10px] text-gray-400 mt-1">{job.location}</p>
            </div>
            <div className="absolute bottom-3 right-3 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDashboardHistorial = () => (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-center gap-6 px-4 py-2 mb-4 shrink-0 border-b border-gray-100 pb-4">
        <div className="w-10 h-10 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500"><Icons.Reject /></div>
        <div className="w-10 h-10 rounded-full border-2 border-yellow-500 flex items-center justify-center text-yellow-500"><Icons.SuperLike /></div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24 flex flex-col gap-3">
        {/* Liked Items */}
        <div className="w-full border-2 border-yellow-400 rounded-xl p-4 bg-yellow-50/30 flex items-center gap-4 relative">
          <div className="w-12 h-12 bg-white border border-yellow-200 rounded-lg flex items-center justify-center text-2xl shrink-0 text-yellow-500">⚡</div>
          <div>
            <h3 className="font-bold text-[#1e3a5f] text-sm leading-tight">Desarrollador Backend</h3>
            <p className="text-xs text-gray-500">NovaCorp</p>
            <p className="text-[10px] text-gray-400 mt-1">S/. 4500.00</p>
          </div>
        </div>
        {/* Rejected Items */}
        {[1, 2].map((i) => (
          <div key={i} className="w-full border-2 border-red-400 rounded-xl p-4 bg-red-50/30 flex items-center gap-4 relative">
             <div className="w-12 h-12 bg-white border border-red-200 rounded-lg flex items-center justify-center text-2xl shrink-0 text-red-400"><Icons.Reject /></div>
            <div>
              <h3 className="font-bold text-gray-500 text-sm leading-tight line-through">Desarrollador Frontend</h3>
              <p className="text-xs text-gray-400">Tech SAC</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEgresadoDashboard = () => {
    const titles = {
      EXPLORAR: 'Explorar Empleos',
      FAVORITOS: 'Mis Favoritos',
      MATCH: 'Match',
      HISTORIAL: 'Historial',
      PERFIL: 'Mi Perfil'
    };

    return (
      <div className="flex flex-col h-full w-full relative bg-[#f8fcfc] rounded-[2.5rem] overflow-hidden">
        {/* Top Header */}
        <div className="px-6 pt-6 pb-2 bg-white shadow-sm z-20">
          <Header showBack={false} title={titles[dashTab]} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative bg-[#f8fcfc]">
          {dashTab === 'PERFIL' && renderDashboardPerfil()}
          {dashTab === 'EXPLORAR' && renderDashboardExplorar()}
          {dashTab === 'MATCH' && renderDashboardMatch()}
          {dashTab === 'FAVORITOS' && renderDashboardFavoritos()}
          {dashTab === 'HISTORIAL' && renderDashboardHistorial()}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-200 flex items-center justify-between px-6 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <button onClick={() => setDashTab('EXPLORAR')} className={`flex flex-col items-center gap-1 transition-colors ${dashTab === 'EXPLORAR' ? 'text-[#00a8b5]' : 'text-gray-400 hover:text-gray-600'}`}>
            <Icons.NavExplore />
            <span className="text-[9px] font-medium">Explorar</span>
          </button>
          <button onClick={() => setDashTab('FAVORITOS')} className={`flex flex-col items-center gap-1 transition-colors ${dashTab === 'FAVORITOS' ? 'text-[#00a8b5]' : 'text-gray-400 hover:text-gray-600'}`}>
            <Icons.NavHeart />
            <span className="text-[9px] font-medium">Favoritos</span>
          </button>
          
          {/* Main Match Button (Prominent) */}
          <div className="relative -top-5 flex justify-center">
            <button onClick={() => setDashTab('MATCH')} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform transform hover:scale-105 ${dashTab === 'MATCH' ? 'bg-[#1e3a5f] text-white' : 'bg-[#00a8b5] text-white'}`}>
              <Icons.NavMatch />
            </button>
          </div>

          <button onClick={() => setDashTab('HISTORIAL')} className={`flex flex-col items-center gap-1 transition-colors ${dashTab === 'HISTORIAL' ? 'text-[#00a8b5]' : 'text-gray-400 hover:text-gray-600'}`}>
            <Icons.NavHistory />
            <span className="text-[9px] font-medium">Historial</span>
          </button>
          <button onClick={() => setDashTab('PERFIL')} className={`flex flex-col items-center gap-1 transition-colors ${dashTab === 'PERFIL' ? 'text-[#00a8b5]' : 'text-gray-400 hover:text-gray-600'}`}>
            <Icons.NavProfile />
            <span className="text-[9px] font-medium">Perfil</span>
          </button>
        </div>
      </div>
    );
  };

  const renderEmpresaTab = () => (
    <div className="flex flex-col h-full w-full p-6 items-center overflow-y-auto pb-24">
      <div className="relative mb-6">
          <div className="w-32 h-32 bg-[#e6f4f5] rounded-2xl flex items-center justify-center border-4 border-[#00a8b5] shadow-lg">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="30" width="50" height="70" fill="#1e3a5f" rx="4"/>
                  <rect x="35" y="45" width="10" height="15" fill="#c4e8eb" rx="2"/>
                  <rect x="55" y="45" width="10" height="15" fill="#c4e8eb" rx="2"/>
                  <rect x="35" y="70" width="10" height="15" fill="#c4e8eb" rx="2"/>
                  <rect x="55" y="70" width="10" height="15" fill="#c4e8eb" rx="2"/>
                  <path d="M15 35L50 15L85 35H15Z" fill="#00a8b5" />
              </svg>
          </div>
          <button className="absolute -right-2 -bottom-2 bg-[#1e3a5f] rounded-full p-2 border-2 border-white shadow-md"><Icons.Pencil /></button>
      </div>
      
      <h2 className="text-3xl font-bold text-[#1e3a5f] mb-1">InfoCorp</h2>
      
      <div className="w-full mt-6 flex flex-col gap-4 text-center">
        <div>
          <p className="text-xs text-gray-400 font-semibold mb-1">Sitio Web:</p>
          <p className="text-sm font-bold text-[#1e3a5f]">www.infocorp.com</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 font-semibold mb-1">Industria:</p>
          <p className="text-sm font-bold text-[#1e3a5f]">Informática y Redes</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xs text-gray-400 font-semibold mb-2">Sede Principal:</p>
          <div className="w-full max-w-[250px] h-32 bg-gray-200 rounded-xl border border-gray-300 relative overflow-hidden flex items-center justify-center">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(#1e3a5f 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
            <Icons.MapPin />
          </div>
        </div>
      </div>
    </div>
  );

  const renderConvocatoriaTab = () => (
    <div className="flex flex-col h-full w-full p-6 overflow-y-auto pb-24">
      <div className="w-full flex flex-col gap-4">
        <div>
          <label className="text-xs font-bold text-[#1e3a5f] mb-1 block">Puesto (Carrera Buscada)</label>
          <input type="text" placeholder="Ing. Civil" className="w-full px-4 py-2.5 border-2 border-[#1e3a5f] rounded-xl focus:outline-none font-semibold text-sm placeholder-[#1e3a5f] bg-white" />
        </div>
        
        <div>
          <label className="text-xs font-bold text-[#1e3a5f] mb-1 block">Fechas de Convocatoria</label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input type="text" placeholder="Inicio" className="w-full pl-3 pr-8 py-2.5 border-2 border-[#1e3a5f] rounded-xl focus:outline-none font-semibold text-sm bg-white" />
              <div className="absolute right-3 top-3"><Icons.Calendar /></div>
            </div>
            <div className="flex-1 relative">
              <input type="text" placeholder="Fin" className="w-full pl-3 pr-8 py-2.5 border-2 border-[#1e3a5f] rounded-xl focus:outline-none font-semibold text-sm bg-white" />
              <div className="absolute right-3 top-3"><Icons.Calendar /></div>
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-[#1e3a5f] mb-1 block">Lugar</label>
          <div className="relative">
            <input type="text" placeholder="Ubicacion" className="w-full pl-10 pr-4 py-2.5 border-2 border-[#1e3a5f] rounded-xl focus:outline-none font-semibold text-sm bg-white" />
            <div className="absolute left-3 top-3.5"><Icons.MapPin /></div>
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-[#1e3a5f] mb-1 block">Requisitos:</label>
          <textarea rows="3" className="w-full px-4 py-2 border-2 border-[#1e3a5f] rounded-xl focus:outline-none text-sm bg-white resize-none"></textarea>
        </div>

        <div>
          <label className="text-xs font-bold text-[#1e3a5f] mb-2 block">Modalidad:</label>
          <div className="flex gap-2">
             <button className="flex-1 border-2 border-[#1e3a5f] py-1.5 rounded-lg text-xs font-bold text-[#1e3a5f] hover:bg-[#e6f4f5]">Remoto</button>
             <button className="flex-1 border-2 border-[#1e3a5f] py-1.5 rounded-lg text-xs font-bold text-[#1e3a5f] bg-[#e6f4f5]">Presencial</button>
             <button className="flex-1 border-2 border-[#1e3a5f] py-1.5 rounded-lg text-xs font-bold text-[#1e3a5f] hover:bg-[#e6f4f5]">Híbrido</button>
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-[#1e3a5f] mb-1 block">Funciones:</label>
          <textarea rows="3" className="w-full px-4 py-2 border-2 border-[#1e3a5f] rounded-xl focus:outline-none text-sm bg-white resize-none"></textarea>
        </div>

        <div>
          <label className="text-xs font-bold text-[#1e3a5f] mb-1 block">Pago:</label>
          <input type="text" className="w-full px-4 py-2.5 border-2 border-[#1e3a5f] rounded-xl focus:outline-none text-sm bg-white mb-1" />
          <p className="text-[9px] text-gray-400">*Pago mínimo legal S/1025</p>
        </div>

        <button className="w-full bg-[#00a8b5] text-white font-bold py-3.5 rounded-xl mt-2 shadow-sm border-2 border-[#00a8b5] hover:bg-[#008f99]">Publicar Convocatoria</button>
      </div>
    </div>
  );

  const renderEmpresaMatchTab = () => (
    <div className="flex flex-col h-full w-full p-4 overflow-y-auto pb-24 gap-4">
      {mockCandidatos.filter(c => c.match >= 90).map((candidato) => (
        <div key={candidato.id} className="w-full border-2 border-green-500 rounded-xl p-4 bg-white shadow-sm relative flex flex-col items-center text-center">
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#e8f5e9] border-2 border-green-500 flex items-center justify-center text-green-600 font-bold text-sm shadow-sm">{candidato.match}%</div>
          
          <div className="w-20 h-20 bg-[#e6f4f5] rounded-full border-2 border-[#1e3a5f] flex items-center justify-center mb-3">
             <Icons.User />
          </div>
          
          <h3 className="font-bold text-[#00a8b5] text-lg leading-tight mb-1">{candidato.name.split(' ').slice(0,2).join(' ')}</h3>
          <p className="text-xs text-gray-500 mb-3">{candidato.career}</p>
          
          <div className="flex gap-1.5 mb-4 justify-center">
             {candidato.tags.map(tag => <span key={tag} className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded border border-purple-200 font-bold">{tag}</span>)}
          </div>
          
          <p className="text-[8px] text-gray-400 mb-4 px-4 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
          <button className="w-full text-[#00a8b5] py-2 rounded-lg text-sm font-bold border-t border-gray-100 pt-3">Ver Detalles</button>
        </div>
      ))}
    </div>
  );

  const renderCandidatosTab = () => {
    if (selectedCandidato) {
      // VISTA DE DETALLE DE CANDIDATO
      return (
        <div className="flex flex-col h-full w-full relative">
           <div className="absolute top-4 left-4 z-10 bg-white rounded-full p-1 shadow-md cursor-pointer" onClick={() => setSelectedCandidato(null)}>
             <Icons.Back />
           </div>
           
           {/* Menú de pestañas del candidato */}
          <div className="w-full overflow-x-auto no-scrollbar border-b border-gray-200 shrink-0 mt-4">
            <div className="flex px-4 gap-4 pb-2">
              {['Información', 'Formación', 'Experiencia', 'Proyectos', 'Certificaciones'].map((tab, i) => (
                <button key={tab} className={`text-[10px] font-bold whitespace-nowrap pb-1 border-b-2 transition-colors ${i === 0 ? 'border-[#00a8b5] text-[#00a8b5]' : 'border-transparent text-gray-400'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 pb-24 flex flex-col items-center">
             <div className="w-24 h-24 bg-[#e6f4f5] rounded-full border-2 border-[#1e3a5f] flex items-center justify-center mb-3">
               <Icons.User />
             </div>
             <h2 className="text-xl font-bold text-[#1e3a5f]">{selectedCandidato.name.split(' ').slice(0,2).join(' ')}</h2>
             <p className="text-sm text-gray-500 mb-6">{selectedCandidato.career}</p>

             <div className="w-full border-2 border-[#1e3a5f] rounded-xl p-4 mb-4 bg-white">
              <h3 className="text-[#00a8b5] font-bold text-sm mb-2 border-b border-[#00a8b5] pb-1">Información Básica</h3>
              <p className="text-xs text-gray-700 mb-1"><span className="font-semibold">Email:</span> candidato@email.com</p>
              <p className="text-xs text-gray-700"><span className="font-semibold">Teléfono:</span> +51 987654321</p>
            </div>

            <div className="w-full border-2 border-[#1e3a5f] rounded-xl p-4 mb-6 bg-white">
              <h3 className="text-[#00a8b5] font-bold text-sm mb-3 border-b border-[#00a8b5] pb-1">Preferencias</h3>
              <div className="flex flex-wrap gap-2">
                {['Part Time', 'Full Time', 'Presencial', 'Híbrido', 'Virtual'].map(tag => (
                  <span key={tag} className="text-[10px] border border-[#00a8b5] text-[#00a8b5] px-2 py-1 rounded-md font-bold">{tag}</span>
                ))}
              </div>
            </div>

            <div className="w-full flex gap-3 mt-auto">
                <button className="flex-1 bg-[#1e3a5f] text-white font-bold py-3 rounded-xl text-xs shadow-sm">Enviar Mensaje</button>
                <button className="flex-1 bg-[#e6f4f5] border-2 border-[#00a8b5] text-[#1e3a5f] font-bold py-3 rounded-xl text-xs shadow-sm">Agendar Entrevista</button>
            </div>
          </div>
        </div>
      );
    }

    // VISTA DE LISTA DE CANDIDATOS
    return (
      <div className="flex flex-col h-full w-full p-4 overflow-y-auto pb-24">
        <div className="w-full mb-6 relative">
            <input type="text" placeholder="Buscar..." className="w-full px-4 py-3 border-2 border-[#1e3a5f] rounded-xl pl-10 focus:outline-none font-bold text-sm bg-white" />
            <div className="absolute left-3 top-3.5 text-[#1e3a5f]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
        </div>

        <div className="flex flex-col gap-4">
           {mockCandidatos.map(c => (
              <div key={c.id} onClick={() => setSelectedCandidato(c)} className={`w-full ${c.color} border-2 ${c.borderColor} rounded-xl p-3 flex items-center gap-4 cursor-pointer shadow-sm hover:opacity-90 transition-opacity`}>
                 <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center shrink-0 border border-gray-500 overflow-hidden text-white">
                   <Icons.User />
                 </div>
                 <div className="flex-1">
                    <h3 className="text-[#00a8b5] font-bold text-sm leading-tight">{c.name}</h3>
                    <p className="text-[10px] text-gray-600 font-semibold">{c.career}</p>
                 </div>
                 <div className="text-[#1e3a5f] font-bold text-lg">{c.match}%</div>
              </div>
           ))}
        </div>
      </div>
    );
  };

  const renderEmpresaPerfilTab = () => (
    <div className="flex flex-col h-full w-full p-6 items-center overflow-y-auto pb-24">
      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 mt-2">Informacion Personal</h2>
      
      <div className="relative mb-10">
          <div className="w-32 h-32 bg-[#a3c2c2] rounded-full border-[3px] border-[#1e3a5f] flex items-center justify-center overflow-hidden">
             {/* Large generic user shape */}
             <svg width="80" height="80" viewBox="0 0 24 24" fill="#668c8c" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
             </svg>
          </div>
          <button className="absolute right-0 bottom-0 bg-[#1e3a5f] rounded-full p-2 border-2 border-white shadow-md"><Icons.Pencil /></button>
      </div>

      <div className="w-full flex flex-col gap-6 text-left px-2">
        <div>
           <p className="text-xs text-gray-500 font-semibold mb-0.5">Nombre Completo:</p>
           <p className="text-lg font-bold text-[#1e3a5f]">Nombres y Apellidos</p>
        </div>
        <div>
           <p className="text-xs text-gray-500 font-semibold mb-0.5">Cargo:</p>
           <p className="text-lg font-bold text-[#1e3a5f]">Directora de Talento</p>
        </div>
        <div>
           <p className="text-xs text-gray-500 font-semibold mb-0.5">Empresa:</p>
           <p className="text-lg font-bold text-[#1e3a5f]">InfoCorp.INC</p>
        </div>
      </div>
    </div>
  );

  const renderEmpresaDashboard = () => {
    const titles = {
      EMPRESA: 'Empresa',
      CONVOCATORIA: 'Nueva Convocatoria',
      MATCH: 'Match',
      CANDIDATOS: 'Candidatos',
      PERFIL: 'Perfil'
    };

    return (
      <div className="flex flex-col h-full w-full relative bg-[#f8fcfc] rounded-[2.5rem] overflow-hidden">
        {/* Top Header */}
        <div className="px-6 pt-6 pb-2 bg-white shadow-sm z-20 border-b border-gray-100">
          <Header showBack={empresaDashTab === 'CONVOCATORIA'} onBack={() => setEmpresaDashTab('EMPRESA')} title={titles[empresaDashTab]} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative bg-[#f8fcfc]">
          {empresaDashTab === 'EMPRESA' && renderEmpresaTab()}
          {empresaDashTab === 'CONVOCATORIA' && renderConvocatoriaTab()}
          {empresaDashTab === 'MATCH' && renderEmpresaMatchTab()}
          {empresaDashTab === 'CANDIDATOS' && renderCandidatosTab()}
          {empresaDashTab === 'PERFIL' && renderEmpresaPerfilTab()}
        </div>

        {/* Bottom Navigation para EMPRESA */}
        <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-200 flex items-center justify-between px-6 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <button onClick={() => {setEmpresaDashTab('EMPRESA'); setSelectedCandidato(null);}} className={`flex flex-col items-center gap-1 transition-colors ${empresaDashTab === 'EMPRESA' ? 'text-[#00a8b5]' : 'text-[#1e3a5f] hover:text-gray-600'}`}>
            <Icons.Building />
            <span className="text-[9px] font-bold">Empresa</span>
          </button>
          <button onClick={() => {setEmpresaDashTab('CONVOCATORIA'); setSelectedCandidato(null);}} className={`flex flex-col items-center gap-1 transition-colors ${empresaDashTab === 'CONVOCATORIA' ? 'text-[#00a8b5]' : 'text-[#1e3a5f] hover:text-gray-600'}`}>
            <Icons.Briefcase />
            <span className="text-[9px] font-bold">Convocatoria</span>
          </button>
          
          {/* Main Match Button (Prominent) */}
          <div className="relative -top-5 flex justify-center">
            <button onClick={() => {setEmpresaDashTab('MATCH'); setSelectedCandidato(null);}} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform transform hover:scale-105 ${empresaDashTab === 'MATCH' ? 'bg-[#1e3a5f] text-white' : 'bg-[#00a8b5] text-white'}`}>
              <Icons.Rocket />
            </button>
          </div>

          <button onClick={() => {setEmpresaDashTab('CANDIDATOS'); setSelectedCandidato(null);}} className={`flex flex-col items-center gap-1 transition-colors ${empresaDashTab === 'CANDIDATOS' ? 'text-[#00a8b5]' : 'text-[#1e3a5f] hover:text-gray-600'}`}>
            <Icons.GradCap />
            <span className="text-[9px] font-bold">Candidatos</span>
          </button>
          <button onClick={() => {setEmpresaDashTab('PERFIL'); setSelectedCandidato(null);}} className={`flex flex-col items-center gap-1 transition-colors ${empresaDashTab === 'PERFIL' ? 'text-[#00a8b5]' : 'text-[#1e3a5f] hover:text-gray-600'}`}>
            <Icons.User />
            <span className="text-[9px] font-bold">Perfil</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 relative flex flex-col items-center justify-center font-sans py-4 sm:py-10">
      <div className="absolute top-0 left-0 w-64 h-64 -ml-16 -mt-16 bg-[#e6f4f5] rounded-full mix-blend-multiply blur-3xl opacity-70 transform -rotate-45 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 -mr-20 -mb-20 bg-[#e6f4f5] rounded-full mix-blend-multiply blur-3xl opacity-70 transform rotate-12 pointer-events-none"></div>

      <div className="z-10 w-full max-w-sm flex flex-col items-center min-h-[700px] h-[700px] bg-white sm:shadow-xl sm:border border-gray-100 sm:rounded-[2.5rem] relative overflow-hidden">
        
        {currentView === 'HOME' && renderHome()}
        {currentView === 'LOGIN' && renderLogin()}
        {currentView === 'EG_PHONE' && renderEgPhone()}
        {currentView === 'EG_VERIFY' && renderVerify('EG_WELCOME', 2)}
        {currentView === 'EG_WELCOME' && renderEgWelcome()}
        {currentView === 'EG_CAREER' && renderEgCareer()}
        {currentView === 'EG_MODALITY' && renderEgModality()}
        
        {/* Vistas completas de Empresa */}
        {currentView === 'EM_INFO' && renderEmInfo()}
        {currentView === 'EM_CONTACT' && renderEmContact()}
        {currentView === 'EM_VERIFY' && renderVerify('EM_WELCOME', 3)}
        {currentView === 'EM_WELCOME' && renderEmWelcome()}

        {currentView === 'DONE' && renderDone()}
        
        {/* NUEVO MAIN DASHBOARD ROUTING */}
        {currentView === 'DASHBOARD' && (userType === 'EMPRESA' ? renderEmpresaDashboard() : renderEgresadoDashboard())}

      </div>
    </div>
  );
}