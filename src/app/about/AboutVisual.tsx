import React from 'react';

function AboutVisual() {
  return (
    <svg
      width='340'
      height='300'
      viewBox='0 0 340 300'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='group-hover:scale-105 transition-transform duration-700 ease-out'
    >
      <defs>
        {/* Enhanced gradient definitions with more depth */}
        <linearGradient id='primaryGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop
            offset='0%'
            style={{ stopColor: '#6366F1', stopOpacity: 0.9 }}
          />
          <stop
            offset='50%'
            style={{ stopColor: '#8B5CF6', stopOpacity: 0.8 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: '#A855F7', stopOpacity: 0.7 }}
          />
        </linearGradient>
        <linearGradient id='secondaryGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop
            offset='0%'
            style={{ stopColor: '#38BDF8', stopOpacity: 0.8 }}
          />
          <stop
            offset='50%'
            style={{ stopColor: '#0EA5E9', stopOpacity: 0.7 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: '#0284C7', stopOpacity: 0.6 }}
          />
        </linearGradient>
        <linearGradient id='accentGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop
            offset='0%'
            style={{ stopColor: '#34D399', stopOpacity: 0.8 }}
          />
          <stop
            offset='50%'
            style={{ stopColor: '#10B981', stopOpacity: 0.7 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: '#059669', stopOpacity: 0.6 }}
          />
        </linearGradient>
        <linearGradient id='highlightGrad' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop
            offset='0%'
            style={{ stopColor: '#FACC15', stopOpacity: 0.9 }}
          />
          <stop
            offset='50%'
            style={{ stopColor: '#F59E0B', stopOpacity: 0.8 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: '#D97706', stopOpacity: 0.7 }}
          />
        </linearGradient>

        {/* Radial gradient for central hub */}
        <radialGradient id='centralGrad' cx='50%' cy='50%' r='50%'>
          <stop
            offset='0%'
            style={{ stopColor: '#FFFFFF', stopOpacity: 0.9 }}
          />
          <stop
            offset='40%'
            style={{ stopColor: '#6366F1', stopOpacity: 0.8 }}
          />
          <stop
            offset='100%'
            style={{ stopColor: '#1E1B4B', stopOpacity: 0.6 }}
          />
        </radialGradient>

        {/* Glow filter for enhanced visual appeal */}
        <filter id='glow' x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='3' result='coloredBlur' />
          <feMerge>
            <feMergeNode in='coloredBlur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* Animated background grid pattern */}
      <g opacity='0.1' stroke='url(#primaryGrad)' strokeWidth='0.5'>
        <defs>
          <pattern
            id='grid'
            width='20'
            height='20'
            patternUnits='userSpaceOnUse'
          >
            <path d='M 20 0 L 0 0 0 20' fill='none' strokeWidth='0.5' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#grid)'>
          <animate
            attributeName='opacity'
            values='0.05;0.15;0.05'
            dur='4s'
            repeatCount='indefinite'
          />
        </rect>
      </g>

      {/* Enhanced connecting lines with pulse animation */}
      <g opacity='0.4'>
        <line
          x1='90'
          y1='210'
          x2='170'
          y2='150'
          stroke='url(#primaryGrad)'
          strokeWidth='3'
          strokeDasharray='8,4'
        >
          <animate
            attributeName='stroke-dashoffset'
            values='0;12;0'
            dur='3s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.8;0.4'
            dur='2s'
            repeatCount='indefinite'
          />
        </line>
        <line
          x1='250'
          y1='210'
          x2='170'
          y2='150'
          stroke='url(#secondaryGrad)'
          strokeWidth='3'
          strokeDasharray='8,4'
        >
          <animate
            attributeName='stroke-dashoffset'
            values='0;-12;0'
            dur='3.5s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.8;0.4'
            dur='2.2s'
            repeatCount='indefinite'
          />
        </line>
        <line
          x1='90'
          y1='90'
          x2='170'
          y2='150'
          stroke='url(#accentGrad)'
          strokeWidth='3'
          strokeDasharray='8,4'
        >
          <animate
            attributeName='stroke-dashoffset'
            values='0;12;0'
            dur='2.8s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.8;0.4'
            dur='2.5s'
            repeatCount='indefinite'
          />
        </line>
        <line
          x1='250'
          y1='90'
          x2='170'
          y2='150'
          stroke='url(#highlightGrad)'
          strokeWidth='3'
          strokeDasharray='8,4'
        >
          <animate
            attributeName='stroke-dashoffset'
            values='0;-12;0'
            dur='3.2s'
            repeatCount='indefinite'
          />
          <animate
            attributeName='opacity'
            values='0.4;0.8;0.4'
            dur='1.8s'
            repeatCount='indefinite'
          />
        </line>
      </g>

      {/* Multi-layered central innovation hub with rotation */}
      <g filter='url(#glow)'>
        <circle cx='170' cy='150' r='55' fill='url(#primaryGrad)' opacity='0.7'>
          <animate
            attributeName='r'
            values='55;58;55'
            dur='4s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='170' cy='150' r='35' fill='url(#centralGrad)' opacity='0.8'>
          <animate
            attributeName='r'
            values='35;38;35'
            dur='3s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='170' cy='150' r='18' fill='white' opacity='0.95'>
          <animate
            attributeName='r'
            values='18;20;18'
            dur='2s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='170' cy='150' r='8' fill='url(#primaryGrad)' opacity='0.9'>
          <animate
            attributeName='opacity'
            values='0.9;0.5;0.9'
            dur='1.5s'
            repeatCount='indefinite'
          />
        </circle>
      </g>

      {/* Enhanced orbiting elements with hover interactions */}
      {/* Speed & Reliability - top left with rocket icon */}
      <g transform='translate(90, 90)' filter='url(#glow)'>
        <circle r='25' fill='url(#highlightGrad)' opacity='0.8'>
          <animate
            attributeName='r'
            values='25;28;25'
            dur='2.5s'
            repeatCount='indefinite'
          />
        </circle>
        <g transform='scale(0.8)'>
          <path
            d='M-10 -5L12 0L-10 5V2L-6 0L-10 -2V-5Z'
            fill='white'
            opacity='0.95'
          >
            <animateTransform
              attributeName='transform'
              type='translate'
              values='0,0;2,0;0,0'
              dur='1s'
              repeatCount='indefinite'
            />
          </path>
          <circle cx='8' cy='0' r='2' fill='url(#highlightGrad)' opacity='0.7'>
            <animate
              attributeName='r'
              values='2;3;2'
              dur='0.8s'
              repeatCount='indefinite'
            />
          </circle>
        </g>
      </g>

      {/* Technical Excellence - top right with gear icon */}
      <g transform='translate(250, 90)' filter='url(#glow)'>
        <circle r='25' fill='url(#accentGrad)' opacity='0.8'>
          <animate
            attributeName='r'
            values='25;28;25'
            dur='3s'
            repeatCount='indefinite'
          />
        </circle>
        <g>
          <circle r='8' fill='white' opacity='0.9' />
          <circle r='4' fill='url(#accentGrad)' opacity='0.8' />
          {/* Gear teeth */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect
              key={i}
              x='-1'
              y='-12'
              width='2'
              height='4'
              fill='white'
              opacity='0.8'
              transform={`rotate(${angle})`}
            >
              <animateTransform
                attributeName='transform'
                type='rotate'
                values={`${angle};${angle + 360}`}
                dur='8s'
                repeatCount='indefinite'
              />
            </rect>
          ))}
        </g>
      </g>

      {/* Partnership - bottom left with connection icon */}
      <g transform='translate(90, 210)' filter='url(#glow)'>
        <circle r='25' fill='url(#secondaryGrad)' opacity='0.8'>
          <animate
            attributeName='r'
            values='25;28;25'
            dur='2.8s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='-6' cy='0' r='5' fill='white' opacity='0.9'>
          <animate
            attributeName='r'
            values='5;6;5'
            dur='1.5s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='6' cy='0' r='5' fill='white' opacity='0.9'>
          <animate
            attributeName='r'
            values='5;6;5'
            dur='1.5s'
            repeatCount='indefinite'
            begin='0.5s'
          />
        </circle>
        <path
          d='M-6 0L6 0'
          stroke='white'
          strokeWidth='2'
          opacity='0.8'
          strokeLinecap='round'
        />
      </g>

      {/* Growth & Results - bottom right with chart icon */}
      <g transform='translate(250, 210)' filter='url(#glow)'>
        <circle r='25' fill='url(#primaryGrad)' opacity='0.8'>
          <animate
            attributeName='r'
            values='25;28;25'
            dur='3.5s'
            repeatCount='indefinite'
          />
        </circle>
        <g fill='white' opacity='0.9'>
          <rect x='-10' y='5' width='3' height='8' />
          <rect x='-5' y='2' width='3' height='11' />
          <rect x='0' y='-1' width='3' height='14' />
          <rect x='5' y='-5' width='3' height='18'>
            <animate
              attributeName='height'
              values='18;22;18'
              dur='2s'
              repeatCount='indefinite'
            />
            <animate
              attributeName='y'
              values='-5;-7;-5'
              dur='2s'
              repeatCount='indefinite'
            />
          </rect>
        </g>
        <path
          d='M-8 8L-2 5L3 2L8 -2'
          stroke='url(#highlightGrad)'
          strokeWidth='2'
          fill='none'
          strokeLinecap='round'
          opacity='0.8'
        />
      </g>

      {/* Multiple expanding rings for depth */}
      <circle
        cx='170'
        cy='150'
        r='110'
        fill='none'
        stroke='url(#primaryGrad)'
        strokeWidth='1'
        opacity='0.15'
        strokeDasharray='15,10'
      >
        <animate
          attributeName='stroke-dashoffset'
          values='0;25;0'
          dur='6s'
          repeatCount='indefinite'
        />
      </circle>
      <circle
        cx='170'
        cy='150'
        r='130'
        fill='none'
        stroke='url(#secondaryGrad)'
        strokeWidth='1'
        opacity='0.1'
        strokeDasharray='20,15'
      >
        <animate
          attributeName='stroke-dashoffset'
          values='0;-35;0'
          dur='8s'
          repeatCount='indefinite'
        />
      </circle>

      {/* Enhanced floating particles with varied animations */}
      <g opacity='0.7'>
        <circle cx='130' cy='110' r='2.5' fill='url(#highlightGrad)'>
          <animate
            attributeName='opacity'
            values='0.4;1;0.4'
            dur='2s'
            repeatCount='indefinite'
          />
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0;5,-3;0,0'
            dur='4s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='210' cy='190' r='2' fill='url(#accentGrad)'>
          <animate
            attributeName='opacity'
            values='0.4;1;0.4'
            dur='2.5s'
            repeatCount='indefinite'
          />
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0;-3,4;0,0'
            dur='3.5s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='200' cy='120' r='1.5' fill='url(#secondaryGrad)'>
          <animate
            attributeName='opacity'
            values='0.4;1;0.4'
            dur='3s'
            repeatCount='indefinite'
          />
          <animateTransform
            attributeName='transform'
            type='translate'
            values='0,0;2,-2;0,0'
            dur='5s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='140' cy='200' r='2' fill='url(#primaryGrad)'>
          <animate
            attributeName='opacity'
            values='0.4;1;0.4'
            dur='1.8s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='280' cy='140' r='1.5' fill='url(#highlightGrad)'>
          <animate
            attributeName='opacity'
            values='0.4;1;0.4'
            dur='2.2s'
            repeatCount='indefinite'
          />
        </circle>
        <circle cx='60' cy='160' r='2' fill='url(#accentGrad)'>
          <animate
            attributeName='opacity'
            values='0.4;1;0.4'
            dur='2.8s'
            repeatCount='indefinite'
          />
        </circle>
      </g>
    </svg>
  );
}

export default AboutVisual;
