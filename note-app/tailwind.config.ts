import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text9: "var(--text-950)",
        text8: "var(--text-800)",
        text7: "var(--text-700)",
        text6: "var(--text-600)",
        text5: "var(--text-500)",
        text4: "var(--text-400)",
        text3: "var(--text-300)",
        text2: "var(--text-200)",
        input_bg: "var(--input-bg)",
        t_e_d: "var(--tag_edited_date)",
        bak_g: "var(--background)",
        auth_page: "var(--auth-page)",
        page: "var(--global-bak)",
        borders:"var(--borders)"
      },
    },
  },
  plugins: [],
} satisfies Config;