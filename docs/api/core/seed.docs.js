import { ApiSection, consume, Fiona, Sample } from "../../../docs/app";

const Section = ({ seed }) => (
  <ApiSection
    heading={(
      <span>
        <small>Fiona.</small>Seed
      </span>
    )}
  >
    <p>
      Method that returns the <code>initseed</code> of the seeded instance.
    </p>

    <Sample
      input={`
    Fiona(${seed}).seed()
    `}
      output={`
    ${JSON.stringify(Fiona(seed).seed())}
    `}
    />
  </ApiSection>
);

export default consume(Section);
