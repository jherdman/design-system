import React from 'react';
import {Type, Link} from '@nulogy/components';
import packageJson from '../../package.json';

export default () => (
  <main className="welcome">

    <style dangerouslySetInnerHTML={{__html: `
      /* beware! you're about to look at a horrible hack for hiding the page header on the welcome page */
      .catalog-jfwi2-PageHeader-PageHeader {display: none}
      /* don't worry! the hacks are over */

      .welcome-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 3rem 2rem;
      }

      .flex-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
      }

      .flex-container div {text-align: center;}
      @media screen and (min-width: 600px) {
          .flex-container div {
              width: 45%;
              text-align: left;
          }
      }

      .intro {
          background: #DDE8ED !important;
          padding: 3rem 0;
          text-align: center;
      }

      .intro__logo {margin-bottom: 2rem;}
      .intro__text {color: #203140 !important;}

      .latest-version-button {
          display: block;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background: #0E77D2;
          margin-top: -50px;
          color: #fff;
          border-radius: 3px;
          text-decoration: none;
          transition: .3s;
      }

      .latest-version-button:hover {background: #054CA3;}
    `}} />

    <section class="intro">
      <div className="welcome-container">
        <img className="intro__logo" src="/logos/Nulogy_Full_Color.svg" style={{maxWidth: '100%'}} />
        <blockquote class="intro__text">The <strong>Nulogy Design System</strong> is a collection of Visual Guidelines and UI Components that will allow designers and developers to quickly create consistent experiences for our customers using established best practices.</blockquote>
      </div>
    </section>

    <section className="welcome-container">
      <div className="flex-container">
        <div>
          <Type.SectionTitle>Visual Style</Type.SectionTitle>
            <Type.Text>Learn about the style that makes up Nulogy applications; including logo usage, typography, our colour system, iconography and spacing.</Type.Text>
            <p><Link href="/visual_style/colour">Learn how to design for Nulogy</Link></p>
        </div>
        <div>
          <Type.SectionTitle>Components</Type.SectionTitle>
          <Type.Text>Built using React, components are tested interface design patterns designed to ensure a consistent experience for our users.</Type.Text>
          <p><Link href="/components">Use our components</Link></p>
        </div>
      </div>
    </section>
  </main>
);
