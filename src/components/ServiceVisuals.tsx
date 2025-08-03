export const WebDevelopmentVisual = () => (
  <div className="relative">
    <svg width="300" height="300" viewBox="0 0 300 300" className="animate-pulse">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#8B5CF6", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#EC4899", stopOpacity:1}} />
        </linearGradient>
      </defs>
      {/* Atom-like structure for Web Development */}
      <circle cx="150" cy="150" r="80" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.6" />
      <circle cx="150" cy="150" r="120" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" transform="rotate(45 150 150)" />
      <circle cx="150" cy="150" r="120" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.4" transform="rotate(-45 150 150)" />
      <circle cx="150" cy="150" r="8" fill="url(#grad1)" />
    </svg>
  </div>
);

export const MobileAppVisual = () => (
  <div className="relative">
    <svg width="300" height="300" viewBox="0 0 300 300" className="animate-pulse">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#3B82F6", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#06B6D4", stopOpacity:1}} />
        </linearGradient>
      </defs>
      {/* Mobile device outline */}
      <rect x="100" y="50" width="100" height="200" rx="20" fill="none" stroke="url(#grad2)" strokeWidth="3" />
      <rect x="110" y="70" width="80" height="140" rx="5" fill="url(#grad2)" opacity="0.3" />
      <circle cx="150" cy="230" r="8" fill="url(#grad2)" />
    </svg>
  </div>
);

export const SaasPlatformVisual = () => (
  <div className="relative">
    <svg width="300" height="300" viewBox="0 0 300 300" className="animate-pulse">
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#10B981", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#34D399", stopOpacity:1}} />
        </linearGradient>
      </defs>
      {/* Cloud SaaS shape */}
      <path d="M80 150 Q80 120 110 120 Q120 100 150 100 Q180 100 190 120 Q220 120 220 150 Q220 180 190 180 L110 180 Q80 180 80 150 Z" 
            fill="url(#grad3)" opacity="0.8" />
      <circle cx="130" cy="140" r="4" fill="white" />
      <circle cx="150" cy="140" r="4" fill="white" />
      <circle cx="170" cy="140" r="4" fill="white" />
    </svg>
  </div>
);

export const AIMLVisual = () => (
  <div className="relative">
    <svg width="300" height="300" viewBox="0 0 300 300" className="animate-pulse">
      <defs>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#F59E0B", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#EF4444", stopOpacity:1}} />
        </linearGradient>
      </defs>
      {/* Neural network nodes */}
      <circle cx="100" cy="100" r="12" fill="url(#grad4)" />
      <circle cx="200" cy="100" r="12" fill="url(#grad4)" />
      <circle cx="100" cy="200" r="12" fill="url(#grad4)" />
      <circle cx="200" cy="200" r="12" fill="url(#grad4)" />
      <circle cx="150" cy="150" r="16" fill="url(#grad4)" />
      <line x1="100" y1="100" x2="150" y2="150" stroke="url(#grad4)" strokeWidth="2" opacity="0.6" />
      <line x1="200" y1="100" x2="150" y2="150" stroke="url(#grad4)" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="200" x2="150" y2="150" stroke="url(#grad4)" strokeWidth="2" opacity="0.6" />
      <line x1="200" y1="200" x2="150" y2="150" stroke="url(#grad4)" strokeWidth="2" opacity="0.6" />
    </svg>
  </div>
);

export const DevOpsVisual = () => (
  <div className="relative">
    <svg width="300" height="300" viewBox="0 0 300 300" className="animate-pulse">
      <defs>
        <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#6366F1", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#8B5CF6", stopOpacity:1}} />
        </linearGradient>
      </defs>
      {/* Gear/DevOps shape */}
      <circle cx="150" cy="150" r="60" fill="none" stroke="url(#grad5)" strokeWidth="8" />
      <circle cx="150" cy="150" r="30" fill="url(#grad5)" opacity="0.6" />
      {/* Gear teeth */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <rect key={i} x="145" y="85" width="10" height="20" fill="url(#grad5)" 
              transform={`rotate(${angle} 150 150)`} />
      ))}
    </svg>
  </div>
);

export const UIUXVisual = () => (
  <div className="relative">
    <svg width="300" height="300" viewBox="0 0 300 300" className="animate-pulse">
      <defs>
        <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:"#EC4899", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:"#F43F5E", stopOpacity:1}} />
        </linearGradient>
      </defs>
      {/* Design palette shape */}
      <path d="M150 50 Q200 100 150 150 Q100 100 150 50 Z" fill="url(#grad6)" opacity="0.8" />
      <path d="M150 150 Q200 200 150 250 Q100 200 150 150 Z" fill="url(#grad6)" opacity="0.6" />
      <circle cx="150" cy="150" r="20" fill="url(#grad6)" />
    </svg>
  </div>
);
