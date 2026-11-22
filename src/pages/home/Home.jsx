/* ==================================================================
   HOME — the index. Sections in order: 00 Ignition (hero), 01 Work
   (the showroom), 02 Publications ("The drive"), 03 About, 04 Journey,
   05 Rear View, 06 Contact, 07 Sign-off.

   Testimonials are switched off; the quotes are kept in
   src/data/testimonials.js.
   ================================================================== */
import { useState } from 'react';
import Page from '../../site/Page.jsx';
import { isFirstVisitPage } from '../../site/runtime.js';
import { HOME_META } from '../../data/pages.js';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/Footer.jsx';
import Preloader from './Preloader.jsx';
import Hero from './Hero.jsx';
import Showroom from './Showroom.jsx';
import Publications from './Publications.jsx';
import About from './About.jsx';
import Journey from './Journey.jsx';
import RearView from './RearView.jsx';
import initHero from './hero.js';
import initShowroom from './showroom.js';
import initPublications from './publications.js';
import initSections from './sections.js';
import initRearview from './rearview.js';

export default function Home() {
  // The ignition self-test only greets a visit that opens here.
  const [preloader] = useState(isFirstVisitPage);
  return (
    <Page
      bodyClass="page-home"
      title={HOME_META.title}
      description={HOME_META.description}
      init={[initHero, initShowroom, initPublications, initSections, initRearview]}
    >
      {preloader ? <Preloader /> : null}
      <main id="main">
        <Hero />
        <Showroom />
        <Publications />
        <About />
        <Journey />
        <RearView />
        <Contact index="06" />
      </main>
      <Footer home />
    </Page>
  );
}
