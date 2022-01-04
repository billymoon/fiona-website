import { ApiSection, consume, Fiona, Sample } from "../../../docs/app";

const Section = ({ seed }) => (
  <ApiSection
    heading={
      <span>
        <small>Fiona.</small>Gibberish
      </span>
    }
  >
    <p>
      A seeded utility to return gibberish text, optionally takes `qty` which is
      the number of words which defaults to `1`.
    </p>

    <Sample
      input={`
        Fiona(${seed}).gibberish()
        `}
      output={`\n${
        JSON.stringify(
          Fiona(seed).gibberish(),
        )
      }`}
    />
    <Sample
      input={`
        Fiona(${seed}).gibberish({ qty: 20 })
        `}
      output={`\n${
        JSON.stringify(
          Fiona(seed).gibberish({ qty: 20 }),
        )
      }`}
    />

    <p>
      By setting <code>syllableMin</code> and <code>syllableMax</code>{" "}
      properties, the word length can be influenced.
    </p>

    <Sample
      input={`
        Fiona(${seed}).gibberish({ qty: 20, syllableMin: 1, syllableMax: 2 })
        `}
      output={`\n${
        JSON.stringify(
          Fiona(seed).gibberish({ qty: 20, syllableMin: 1, syllableMax: 2 }),
        )
      }`}
    />

    <Sample
      input={`
        Fiona(${seed}).gibberish({ qty: 20, syllableMin: 5, syllableMax: 8 })
        `}
      output={`\n${
        JSON.stringify(
          Fiona(seed).gibberish({ qty: 20, syllableMin: 8, syllableMax: 12 }),
        )
      }`}
    />

    <Sample
      input={`
        Fiona(${seed}).gibberish({ qty: 20, syllableMin: 2, syllableMax: 10 })
        `}
      output={`\n${
        JSON.stringify(
          Fiona(seed).gibberish({ qty: 20, syllableMin: 1, syllableMax: 6 }),
        )
      }`}
    />
  </ApiSection>
);

export default consume(Section);
