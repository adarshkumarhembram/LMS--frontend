// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),  // DaisyUI plugin
    require('@tailwindcss/line-clamp'),  // Line-clamp plugin
  ],
};
