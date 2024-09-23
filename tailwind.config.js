/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow : {
        'custom' : '2px 2px 10px rgba(106, 56, 194, 0.5)',
        'dark' : '2px 2px 10px rgba(0, 0, 0, 0.1)',
        'dark2' : '5px 5px 20px rgba(0, 0, 0, 0.1)'
      },

      colors : {
        'primary' : 'var(--primary-color)',
        'secondary' : 'var(--secondary-color)',
        'dark' : 'var(--text-dark)',
        'light' : 'var(--text-light)',
        'extra' : 'var(--extra-light)',
        'white' : 'var(--white)',
        'grey' : '#fff8f5',
        'fff9f6' : '#fff9f6',
        'e9ddff' : '#e9ddff',
        '6a38c2' : '#6a38c2',
        '3ac2ba' : '#3ac2ba',
        'f0fffe' : '#f0fffe',
        'fbbc09' : '#fbbc09',
        'fff8e3' : '#fff8e3',
        'ff0101' : '#ff0101',
        'fff2f2' : '#fff2f2',
        '34a753' : '#34a753',
        'f1fef5' : '#f1fef5',
        '443ee0' : '#443ee0',
        'f6f5ff' : '#f6f5ff',
        '4680e7' : '#4680e7',
        'e7edf8' : '#e7edf8',
        '794cc7' : '#794cc7',
        'f04a0c' : '#f04a0c',
        'f6efef' : '#f6efef'
      },

      maxWidth : {
        'large' : 'var(--max-width)',
      },

      backgroundImage : {
        'steps' : 'url(img/steps-bg.png)'
      }

     },
  },
  plugins: [],
}

