import { ApiSection, consume, Fiona, Sample } from "../../../docs/app";

const Section = ({ seed }) => (
  <ApiSection
    heading={(
      <span>
        <small>Fiona.</small>Unique
      </span>
    )}
  >
    <p>
      A seeded array generation utility, which generates an array of data by calling <code>Fiona.Array</code> but filters out duplicates.
    </p>

    <Sample
      input={`
    Fiona(${seed}).unique(10, Fiona.Number({ min: 1, max: 5 }))
    `}
      output={`\n${
        JSON.stringify(
          Fiona(seed).unique(10, Fiona.Number({ min: 1, max: 15 })),
        )
      }`}
    />

<p>
      The result should be similar to calling <code>Fiona.Array</code> but duplicates are skipped over and the next non-duplicated value is moved up in the output array.
    </p>

    <Sample
      input={`
    {
      array: Fiona(${seed}).array(10, Fiona.Number({ min: 1, max: 15 }),
      unique: Fiona(${seed}).unique(10, Fiona.Number({ min: 1, max: 15 }),
    }
    `}
      output={`\n${
        JSON.stringify(
          {
            array: Fiona(seed).array(10, Fiona.Number({ min: 1, max: 15 })),
            unique: Fiona(seed).unique(10, Fiona.Number({ min: 1, max: 15 }))
          }
        )
      }`}
    />

    <p>
      When searching for non-duplicated values, there is a danger of searching forever for values that don't exist, in which case an error is thrown when a threshold is reached. The threshold is defined by the `duplicateLimit` property and by default is set to twice the length of the array being generated.
    </p>

    <Sample
      input={`
        Fiona(${seed}).unique(3, Fiona.Bool)
      `}
      output={`\n${
        (() => {
          try {
            Fiona(seed).unique(3, Fiona.Bool)
          } catch (err) {
            return `// Error: ${err.message}`
          }
        })()
      }`}
    />

<Sample
      input={`
        Fiona(${seed}).unique(5, Fiona.OneOf([1,2,3,4,5]), { duplicateLimit: 20 })
      `}
      output={`\n${
        (() => {
          try {
            return Fiona(seed).unique(5, Fiona.OneOf([1,2,3,4,5]), { duplicateLimit: 20 })
          } catch (err) {
            return `// Error: ${err.message}`
          }
        })()
      }`}
    />

      <p>When determining if elements are duplicates, for simple values like strings and numbers, it works as expected, but if two objects look the same, but are different instances, then we need to provide a comparator function that receives the left and right sides of the comparrison as arguments and returns true when they are considered a duplicate. In this example, the objects are compared by their id alone ti identify duplicates, even when the value is different.</p>

    <Sample
      input={`
        Fiona(${seed}).unique(3, Fiona.OneOf([
          {id:1, value: "a"},
          {id:2, value: "b"},
          {id:1, value: "c"},
          {id:3, value: "d"},
          {id:2, value: "e"},
          {id:4, value: "f"},
          {id:5, value: "g"},
          {id:6, value: "h"},
          {id:4, value: "i"},
          {id:7, value: "j"}
        ]), { comparator: (left, right) => left.id === right.id })
      `}
      output={`\n${
        (() => {
          try {
            return JSON.stringify(Fiona(seed).unique(3, Fiona.OneOf([
              {id:1, value: "a"},
              {id:2, value: "b"},
              {id:1, value: "c"},
              {id:3, value: "d"},
              {id:2, value: "e"},
              {id:4, value: "f"},
              {id:5, value: "g"},
              {id:6, value: "h"},
              {id:4, value: "i"},
              {id:7, value: "j"}
            ]), { comparator: (left, right) => left.id === right.id }))
          } catch (err) {
            return `// Error: ${err.message}`
          }
        })()
      }`}
    />

  </ApiSection>
);

export default consume(Section);
