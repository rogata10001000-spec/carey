/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // メインカラー: 深めのブルー（信頼・誠実・安定感）
        brand: {
          50: '#eef4ff',
          100: '#dce8fd',
          200: '#c1d6fc',
          300: '#96bbf9',
          400: '#6495f4',
          500: '#3f6fee',
          600: '#2a50e2',
          700: '#213dd0',
          800: '#2134a9',
          900: '#203085',
          950: '#182051',
        },
        // アクセントカラー: 黄色（視線誘導・前向きさ）
        accent: {
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
        },
        // LINE導線カラー（LINE公式のブランドグリーン）
        line: {
          500: '#06c755',
          600: '#05b34c',
          700: '#049e43',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(16, 34, 81, 0.06)',
        card: '0 2px 12px rgba(16, 34, 81, 0.08)',
        lift: '0 10px 28px rgba(16, 34, 81, 0.14)',
        cta: '0 6px 20px rgba(6, 199, 85, 0.35)',
      },
    },
  },
  plugins: [],
};
