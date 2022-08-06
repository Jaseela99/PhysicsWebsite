/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {fontFamily:{
      "lobster": ['Lobster', 'cursive'],
      "pacifio":['Pacifico', 'cursive'],
      "satisfy":['Satisfy', 'cursive'],
      "grat":['Great Vibes','cursive'],
      "script":['Kaushan Script','cursive'],
      "domin":['Domine','serif']
      }
    },
    backgroundImage: {
      'science': "url('file:///C:/Users/user/Downloads/hand-drawn-colorful-science-education-wallpaper_23-2148489183.webp')",
      'headers':"url('https://cdn.pixabay.com/photo/2022/02/04/21/34/waves-6993674_1280.png')",
      'landing':"url('https://wallpapers.com/images/high/colorful-prism-butterfly-dox0geqdbyxi1gpc.jpg')",
      'learn':"url('https://cdn.mos.cms.futurecdn.net/b32yP4hScsApPYBAEU33NC.jpg')",
      'learned':"url('https://wallpaperaccess.com/full/629549.jpg')"

    },
  },
  plugins: [],
}
