/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(222, 84%, 4.9%)",
        foreground: "hsl(210, 40%, 98%)",
        muted: "hsl(217, 32.6%, 17.5%)",
        "muted-foreground": "hsl(215, 20.2%, 65.1%)",
        popover: "hsl(222, 84%, 4.9%)",
        "popover-foreground": "hsl(210, 40%, 98%)",
        card: "hsl(222, 84%, 4.9%)",
        "card-foreground": "hsl(210, 40%, 98%)",
        border: "hsl(217, 32.6%, 17.5%)",
        input: "hsl(217, 32.6%, 17.5%)",
        primary: "hsl(166, 82%, 44%)",
        "primary-foreground": "hsl(222, 84%, 4.9%)",
        secondary: "hsl(217, 32.6%, 17.5%)",
        "secondary-foreground": "hsl(210, 40%, 98%)",
        accent: "hsl(217, 32.6%, 17.5%)",
        "accent-foreground": "hsl(210, 40%, 98%)",
        destructive: "hsl(0, 62.8%, 30.6%)",
        "destructive-foreground": "hsl(210, 40%, 98%)",
        ring: "hsl(166, 82%, 44%)",

        // Custom color groups
        primary: {
          500: "hsl(166, 82%, 44%)",
          600: "hsl(166, 76%, 37%)",
        },
        blue: {
          500: "hsl(217, 91%, 60%)",
          600: "hsl(221, 83%, 53%)",
        },
        dark: {
          800: "hsl(215, 28%, 17%)",
          900: "hsl(222, 84%, 4.9%)",
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
