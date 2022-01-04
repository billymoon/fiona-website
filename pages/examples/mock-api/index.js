import { Article, Layout } from "../../../docs/app";
import { provide } from "../../../docs/app/state";

import { ExamplesExpressMock, ExamplesPretend } from "../../../docs/sections";

const Page = () => (
  <Layout>
    <Article>
      <h2>Mock API</h2>
    </Article>
    <Article>
      <ExamplesPretend />
    </Article>
    <Article>
      <ExamplesExpressMock />
    </Article>
  </Layout>
);

export default provide(Page);
