import { ApiSection, consume, Fiona, Sample } from "../../../docs/app";

const Section = ({ seed }) => (
  <ApiSection
    heading={
      <span>
        <small>Fiona.</small>Path
      </span>
    }
  >
    <p>
      Method that returns current path within structure of seeded instance.
    </p>

    <Sample
      input={`
    Fiona(${seed}).array(3, seeded => seeded.path())
    `}
      output={`
    ${JSON.stringify(Fiona(seed).array(3, (seeded) => seeded.path()))}
    `}
    />
    <Sample
      input={`
    Fiona(${seed}).object({
        path1: seeded => seeded.path(),
        path2: seeded => seeded.path(),
        nested: {
            deeply: seeded => seeded.path()
        },
        inArray: [seeded => seeded.path()]
    })
    `}
      output={`${
        JSON.stringify(
          Fiona(seed).object({
            path1: (seeded) => seeded.path(),
            path2: (seeded) => seeded.path(),
            nested: {
              deeply: (seeded) => seeded.path(),
            },
            inArray: [(seeded) => seeded.path()],
          }),
          null,
          2,
        )
      }}`}
    />
    <Sample
      input={`
    Fiona(${seed}).path()
    `}
      output={`
    ${JSON.stringify(Fiona(seed).path())}
    `}
    />
  </ApiSection>
);

export default consume(Section);
