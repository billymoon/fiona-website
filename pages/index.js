import { Article, Layout } from "../docs/app";
import { provide } from "../docs/app/state";

import {
  OverviewContributing,
  OverviewDistribution,
  OverviewDynamicOverview,
  OverviewExtending,
  OverviewHowFionaWorks,
  OverviewQuickStart,
  OverviewSeededPRNG,
} from "../docs/sections";

const Page = () => (
  <Layout>
    <Article>
      <OverviewDynamicOverview />
    </Article>
    <Article>
      <OverviewHowFionaWorks />
    </Article>
    <Article>
      <OverviewQuickStart />
    </Article>
    <Article>
      <OverviewSeededPRNG />
    </Article>
    <Article>
      <OverviewDistribution />
    </Article>
    <Article>
      <OverviewExtending />
    </Article>
    <Article>
      <OverviewContributing />
    </Article>
  </Layout>
);

Page.getInitialProps = (...atgs) => {
  return {};
};

export default provide(Page);
