/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Sohne"', 'system-ui', 'sans-serif'],
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
};

