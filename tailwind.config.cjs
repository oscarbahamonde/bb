module.exports = {
  mode: 'JIT',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  themes: ['corporate']
};