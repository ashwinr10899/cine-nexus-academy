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
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'golden': 'var(--shadow-golden)',
				'card': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)',
				'elegant': 'var(--shadow-elegant)',
				'glow-lg': 'var(--shadow-glow-lg)'
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
				'slow-zoom': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'float-slower': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'spin-slow': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' },
				},
				'bounce-slow': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: 'var(--shadow-glow)' },
					'50%': { boxShadow: 'var(--shadow-glow-lg)' },
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-50px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'scale-fade-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'film-flicker': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.6)' },
					'25%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.8)' },
					'50%': { boxShadow: '0 0 60px hsl(var(--primary) / 0.4)' },
					'75%': { boxShadow: '0 0 30px hsl(var(--primary) / 0.7)' }
				},
				'film-reel-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'icon-pop': {
					'0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0' },
					'50%': { transform: 'scale(1.2) rotate(-10deg)', opacity: '0.8' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				},
				'nav-shrink': {
					'0%': { transform: 'scaleY(1)' },
					'100%': { transform: 'scaleY(0.85)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slow-zoom': 'slow-zoom 20s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 4s ease-in-out infinite',
				'float-slower': 'float-slower 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
				'fade-in-delayed': 'fade-in 0.6s ease-out 0.3s both',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'spin-slow': 'spin-slow 8s linear infinite',
				'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'slide-in-left': 'slide-in-left 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'slide-down': 'slide-down 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'scale-fade-in': 'scale-fade-in 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
				'film-flicker': 'film-flicker 3s ease-in-out infinite',
				'film-reel-shift': 'film-reel-shift 8s ease-in-out infinite',
				'icon-pop': 'icon-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'nav-shrink': 'nav-shrink 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
