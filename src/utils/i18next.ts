import i18next from 'i18next';

import { LOCALES } from '../constants/locales';
import { resources } from '../locales';

i18next.init({
  lng: LOCALES.EN,
  resources,
});

export { i18next };
