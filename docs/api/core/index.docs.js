import { ApiSection, consume, Fiona, Sample } from "../../../docs/app";

const Section = ({ seed }) => (
  <ApiSection
    heading={
      <span>
        <small>Fiona.</small>Index
      </span>
    }
  >
    <p>
      Method that returns current index (or object key) within structure of
      seeded instance.
    </p>

    <Sample
      input={`
    Fiona(${seed}).array(3, seeded => seeded.index())
    `}
      output={`
    ${JSON.stringify(Fiona(seed).array(3, (seeded) => seeded.index()))}
    `}
    />
    <Sample
      input={`
    Fiona(${seed}).object({
        index1: seeded => seeded.index(),
        index2: seeded => seeded.index(),
        nested: {
            deeply: seeded => seeded.index()
        },
        inArray: [seeded => seeded.index()]
    })
    `}
      output={`
    ${
        JSON.stringify(
          Fiona(seed).object({
            index1: (seeded) => seeded.index(),
            index2: (seeded) => seeded.index(),
            nested: {
              deeply: (seeded) => seeded.index(),
            },
            inArray: [(seeded) => seeded.index()],
          }),
          null,
          2,
        )
      }`}
    />
    <Sample
      input={`
      Fiona(${seed}).index()
      `}
      output={`
      ${JSON.stringify(Fiona(seed).index())}
      `}
    />
  </ApiSection>
);

export default consume(Section);
