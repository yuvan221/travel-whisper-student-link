
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2A9D8F',
					foreground: '#FFFFFF',
					50: '#E6F5F3',
					100: '#C2E8E4',
					200: '#9FDAD3',
					300: '#7BCCC2',
					400: '#58BFB1',
					500: '#2A9D8F',
					600: '#257F75',
					700: '#1F615A',
					800: '#184340',
					900: '#122625',
				},
				secondary: {
					DEFAULT: '#F4A261',
					foreground: '#ffffff',
					50: '#FEF4EB',
					100: '#FDE9D7',
					200: '#FBCEAF',
					300: '#F9B386',
					400: '#F7995E',
					500: '#F4A261',
					600: '#F08527',
					700: '#D46C0E',
					800: '#A1510B',
					900: '#6E3707',
				},
				accent: {
					DEFAULT: '#4CAF50',
					foreground: '#FFFFFF',
					50: '#E9F5E9',
					100: '#D3EBD3',
					200: '#A7D7A8',
					300: '#7BC37D',
					400: '#4FAF52',
					500: '#4CAF50',
					600: '#3F9142',
					700: '#327334',
					800: '#245527',
					900: '#173619',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
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
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
