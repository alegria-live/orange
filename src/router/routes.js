import MainHeader from '../components/MainHeader';
import FenetrePvc from '../components/FenetrePvc';
import Contact from '../components/Contact';
import Accueli from '../components/Accueli';
import MentionsLegales from '../components/MentionsLegales';

export default [
    {path: '/', name: 'MainHeader', component: MainHeader},
    {path: '/Accueli', name: 'Accueli', component: Accueli},
    {path: '/FenetrePvc', name: 'FenetrePvc', component: FenetrePvc},
    {path: '/Contact', name: 'Contact', component: Contact},
    {path: '/MentionsLegales', name: 'MentionsLegales', component: MentionsLegales}
  ]