import type { Config } from "tailwindcss";


const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				'50': '#ebf9ee',
  				'100': '#c0eccc',
  				'200': '#a2e5b3',
  				'300': '#77d990',
  				'400': '#5dd27a',
  				'500': '#43c759',
  				'600': '#2fb551',
  				'700': '#258d3f',
  				'800': '#1d6d31',
  				'900': '#165425',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#e7ecea',
  				'100': '#b3c3bc',
  				'200': '#8ea69c',
  				'300': '#5b7d6f',
  				'400': '#3b6453',
  				'500': '#0a3d28',
  				'600': '#093824',
  				'700': '#072b1c',
  				'800': '#062216',
  				'900': '#041411',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				'50': '#e6f6fb',
  				'100': '#b2e3f4',
  				'200': '#8cdefe',
  				'300': '#58c3e7',
  				'400': '#38b7e2',
  				'500': '#06a5db',
  				'600': '#0596c7',
  				'700': '#04759b',
  				'800': '#035b78',
  				'900': '#03455c',
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			positive: {
  				'50': '#19857B',
  				'100': '#24B4A6',
  				'200': '#38D1C6',
  				'300': '#48E0BF',
  				'400': '#61F7B9',
  				'500': '#7BEFAB',
  				'600': '#90F2A4',
  				'700': '#A8F59D',
  				'800': '#C0F896',
  				'900': '#D8FB8F'
  			},
  			warning: {
  				'50': '#FFF8B8',
  				'100': '#FFEEAC',
  				'200': '#FFD47D',
  				'300': '#FCC455',
  				'400': '#FBAD2C',
  				'500': '#F89400',
  				'600': '#F67C00',
  				'700': '#E86100',
  				'800': '#D04600',
  				'900': '#B82C00'
  			},
  			error: {
  				'50': '#FEF2F2',
  				'100': '#FEE2E2',
  				'200': '#FECACA',
  				'300': '#FCA5A5',
  				'400': '#F87171',
  				'500': '#F43F5E',
  				'600': '#E11D48',
  				'700': '#BE123C',
  				'800': '#9F1239',
  				'900': '#881337'
  			},
  			active: {
  				'50': '#EFFAFF',
  				'100': '#DBF7FF',
  				'200': '#AAF2FF',
  				'300': '#66E7FF',
  				'400': '#22D3FF',
  				'500': '#00B8D4',
  				'600': '#0077B6',
  				'700': '#053C9A',
  				'800': '#04297A',
  				'900': '#041556'
  			},
  			white: {
  				'50': '#FFFFFF',
  				'100': '#F4F4F4',
  				'200': '#E4E4E4',
  				'300': '#D4D4D4',
  				'400': '#A3A3A3',
  				'500': '#858585',
  				'600': '#666666',
  				'700': '#474747',
  				'800': '#282828',
  				'900': '#121212'
  			},
  			gray: {
  				'50': '#F2F2F2',
  				'100': '#E5E5E5',
  				'200': '#D8D8D8',
  				'300': '#CBCBCB',
  				'400': '#BDBDBD',
  				'500': '#A8A8A8',
  				'600': '#959595',
  				'700': '#828282',
  				'800': '#696969',
  				'900': '#525252'
  			},
  			black: {
				'': '#000000',
  				'50': '#121212',
  				'100': '#282828',
  				'200': '#474747',
  				'300': '#666666',
  				'400': '#858585',
  				'500': '#A8A8A8',
  				'600': '#BDBDBD',
  				'700': '#CBCBCB',
  				'800': '#D8D8D8',
  				'900': '#E5E5E5'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			satoshi: ['Satoshi', 'sans-serif'],
  			inter: ['Inter', 'sans-serif'],
  			poppins: ['Poppins', 'sans-serif']
  		},
  		fontSize: {
  			'display-desktop': ['44px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
  			'heading-desktop-h1': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
  			'heading-desktop-h2': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
  			'heading-desktop-h3': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
  			'heading-desktop-h4': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
  			'heading-desktop-h5': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
  			'heading-desktop-h6': ['20px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
  			'mobile-h1': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
  			'mobile-h2': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
  			'mobile-h3': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
  			'mobile-h4': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
  			'mobile-h5': ['20px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
  			'mobile-h6': ['18px', { lineHeight: '24px', letterSpacing: '-0.02em' }],
  			'paragraph-lg': ['18px', { lineHeight: '28px' }],
  			'paragraph-md': ['16px', { lineHeight: '24px' }],
  			'paragraph-sm': ['14px', { lineHeight: '20px' }],
  			'paragraph-xs': ['12px', { lineHeight: '20px' }],
  			'overline-sm': ['14px', { lineHeight: '20px' }],
  			'overline-xs': ['12px', { lineHeight: '20px' }],
  			'label-lg': ['16px', { lineHeight: '18px' }],
  			'label-md': ['14px', { lineHeight: '16px' }],
  			'label-sm': ['12px', { lineHeight: '16px' }],
  			'label-xs': ['10px', { lineHeight: '14px' }]
  		},
  		fontWeight: {
  			regular: '400',
  			medium: '500',
  			semibold: '700',
  			bold: '900'
  		},
  		boxShadow: {
  			'2dp': '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.03)',
  			'6dp': '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.03)',
  			'6dp-v2': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 6px 12px rgba(0, 0, 0, 0.08)',
  			'8dp': '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.03)',
  			'10dp': '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.03)',
  			'12dp': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.03)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
