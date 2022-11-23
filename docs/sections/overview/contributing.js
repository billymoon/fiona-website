import Link from "next/link";

import { consume, Fiona, Sample } from "../../app";

const NPM = ({ name }) => (
  <Link href={`https://www.npmjs.com/package/${name}`}>
    {name}
  </Link>
);

const Section = ({ seed }) => (
  <section>
    <h2>Contributing</h2>

    <p>
      Fiona aims to be performant, robust, well documented,{" "}
      <Link href="/static/dependency-graph.svg">
        well organised
      </Link>
      ,{" "}
      <Link href="/static/reports/coverage/index.html">
        well tested
      </Link>{" "}
      and small (~10KB gzipped).
    </p>

    <p>
      Fiona is open source,{" "}
      <Link href="https://github.com/billymoon/Fiona">
        fork me on github
      </Link>
      . Pull requests and issues welcome. The most useful thing the community
      could contribute to this project at this time is to help build up the
      methods to become a rich tapestry of data generating utilities.
    </p>

    <p>
      The code style is terse and succinct, and hopefully easy to understand and
      work with. The file structure is based around colocation, so the src
      folder includes the main library code, it's tests, and the documentation.
    </p>

    <p>
      Whilst there are very few dependencies (only{" "}
      <NPM name="randexp" />) in the Fiona library, there are several used to
      aid development:
    </p>

    <ul>
      <li>
        <Link href="https://deno.land">
          deno
        </Link>{" "}
        for developing, linting, testing and bundling
      </li>
      <li>
        <NPM name="react" /> and <NPM name="next" /> for documentation website
      </li>
    </ul>

    <p>
      Updating or creating a pull request will trigger a deployment using
      vercel's now service, so you can preview the suggested changes in a
      production like environment.
    </p>
  </section>
);

export default consume(Section);
