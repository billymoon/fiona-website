import Link from "next/link";
import { Article, Layout, Shelf } from "../../docs/app";
import { provide } from "../../docs/app/state";

import { ExamplesDashboard, ExamplesIntro } from "../../docs/sections";

const Page = () => (
  <Layout>
    <Article>
      <ExamplesIntro />
    </Article>
    <ExamplesDashboard />
  </Layout>
);

export default provide(Page);
