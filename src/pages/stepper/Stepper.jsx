/* ==================================================================
   BUILT TO FINISH — stepper UX research. The page is the stepper it
   recommends and charges like an EV battery as it is read
   (stepper.js).
   ================================================================== */
import Page from '../../site/Page.jsx';
import { BESPOKE_META } from '../../data/pages.js';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/Footer.jsx';
import { CaseNext } from '../../components/CaseParts.jsx';
import Overlays from './Overlays.jsx';
import Hero from './Hero.jsx';
import Brief from './Brief.jsx';
import Perception from './Perception.jsx';
import Evidence from './Evidence.jsx';
import Promises from './Promises.jsx';
import Proposal from './Proposal.jsx';
import Proof from './Proof.jsx';
import Charged from './Charged.jsx';
import Sources from './Sources.jsx';
import initStepper from './stepper.js';

export default function Stepper() {
  return (
    <Page slug="stepper" bodyClass="page-case page-stepper" {...BESPOKE_META.stepper} init={initStepper}>
      <Overlays />
      <main id="main">
        <Hero />
        <Brief />
        <Perception />
        <Evidence />
        <Promises />
        <Proposal />
        <Proof />
        <Charged />
        <Sources />
        <CaseNext slug="stepper" />
        <Contact />
      </main>
      <Footer />
    </Page>
  );
}
