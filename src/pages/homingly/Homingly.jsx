/* ==================================================================
   HOMINGLY — a home-interiors app, drawn as an open plan: pricing is
   the first wall, and the estimate is the door (homingly.js).
   ================================================================== */
import Page from '../../site/Page.jsx';
import { BESPOKE_META } from '../../data/pages.js';
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/Footer.jsx';
import { CaseNext } from '../../components/CaseParts.jsx';
import Hero from './Hero.jsx';
import FirstWall from './FirstWall.jsx';
import Door from './Door.jsx';
import People from './People.jsx';
import Rules from './Rules.jsx';
import Plan from './Plan.jsx';
import Walkthrough from './Walkthrough.jsx';
import Numbers from './Numbers.jsx';
import Edges from './Edges.jsx';
import Flows from './Flows.jsx';
import System from './System.jsx';
import StillToProve from './StillToProve.jsx';
import Booked from './Booked.jsx';
import initHomingly from './homingly.js';

export default function Homingly() {
  return (
    <Page slug="homingly" bodyClass="page-case page-homingly" {...BESPOKE_META.homingly} init={initHomingly}>
      <main id="main">
        <Hero />
        <FirstWall />
        <Door />
        <People />
        <Rules />
        <Plan />
        <Walkthrough />
        <Numbers />
        <Edges />
        <Flows />
        <System />
        <StillToProve />
        <Booked />
        <CaseNext slug="homingly" />
        <Contact />
      </main>
      <Footer />
    </Page>
  );
}
