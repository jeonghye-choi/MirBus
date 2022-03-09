// import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/styles';

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
