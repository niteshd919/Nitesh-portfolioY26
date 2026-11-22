/* ==================================================================
   THE FIRST QUERY — in-app search research, told as a night climb up
   a mountain pass, 0 → 3,000 m, basics → mastery (search.js).
   ================================================================== */
import Page from '../../site/Page.jsx';
import { BESPOKE_META } from '../../data/pages.js';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/Footer.jsx';
import { CaseNext } from '../../components/CaseParts.jsx';
import Overlays from './Overlays.jsx';
import Hero from './Hero.jsx';
import BaseCamp from './BaseCamp.jsx';
import Why from './Why.jsx';
import Expect from './Expect.jsx';
import Anatomy from './Anatomy.jsx';
import Words from './Words.jsx';
import Stakes from './Stakes.jsx';
import Talk from './Talk.jsx';
import Measure from './Measure.jsx';
import Summit from './Summit.jsx';
import Logbook from './Logbook.jsx';
import initSearch from './search.js';

export default function Search() {
  return (
    <Page slug="search" bodyClass="page-case page-search" {...BESPOKE_META.search} init={initSearch}>
      <Overlays />
      <main id="main">
        <Hero />
        <BaseCamp />
        <Why />
        <Expect />
        <Anatomy />
        <Words />
        <Stakes />
        <Talk />
        <Measure />
        <Summit />
        <Logbook />
        <CaseNext slug="search" />
        <Contact />
      </main>
      <Footer />
    </Page>
  );
}
