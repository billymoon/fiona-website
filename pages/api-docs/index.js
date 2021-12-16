import { Layout, Article } from '../../docs/app'
import { provide } from '../../docs/app/state'

import { ApiOverview, ApiNav } from '../../docs/sections'

// import ApiFnClone from '../../docs/api/core/core-clone.docs'
// import ApiFnFind from '../../docs/api/find/find.docs'
import ApiFnFirstname from '../../docs/api/name/firstname.docs'
import ApiFnGender from '../../docs/api/name/gender.docs'
import ApiFnNamedata from '../../docs/api/name/namedata.docs'
import ApiFnFullname from '../../docs/api/name/fullname.docs'
import ApiFnInfo from '../../docs/api/core/info.docs'
import ApiFnSurname from '../../docs/api/name/surname.docs'
import ApiFnNumber from '../../docs/api/core/primitives/number/number.docs'
import ApiFnObject from '../../docs/api/core/primitives/object/object.docs'
import ApiFnRandom from '../../docs/api/core/random.docs'
import ApiFnRegister from '../../docs/api/core/register/register.docs'
// import ApiFnReseed from '../../docs/api/core/core-reseed.docs'
// import ApiFnState from '../../docs/api/core/core-state.docs'
import ApiFnString from '../../docs/api/core/primitives/string/string.docs'
import ApiFnTitle from '../../docs/api/name/title.docs'
import ApiFnDistribution from '../../docs/api/core/distribution/distribution.docs'
import ApiFnArray from '../../docs/api/core/primitives/array/array.docs'
import ApiFnBool from '../../docs/api/bool/bool.docs'
import ApiFnChoose from '../../docs/api/choose/choose.docs'
import ApiFnDate from '../../docs/api/date/date.docs'
import ApiFnImg from '../../docs/api/img/img.docs'
import ApiFnDuplicable from '../../docs/api/duplicable/duplicable.docs'
import ApiFnJson from '../../docs/api/core/primitives/json/json.docs'
import ApiFnLorem from '../../docs/api/lorem/lorem.docs'
import ApiFnOneof from '../../docs/api/choose/one-of.docs'
import ApiFnParagraph from '../../docs/api/lorem/paragraph.docs'
import ApiFnRegex from '../../docs/api/regex/regex.docs'
import ApiFnSentence from '../../docs/api/lorem/sentence.docs'
import ApiFnShuffle from '../../docs/api/shuffle/shuffle.docs'
import ApiFnWord from '../../docs/api/lorem/word.docs'

const Page = () => (
  <Layout>
    <Article>
      <ApiOverview />
      <section style={{ minHeight: '80vh' }}>
        <ApiNav />
        <section>
          <ApiFnArray />
          <ApiFnBool />
          <ApiFnChoose />
          <ApiFnDate />
          <ApiFnImg />
          <ApiFnDuplicable />
          <ApiFnJson />
          <ApiFnLorem />
          <ApiFnOneof />
          <ApiFnParagraph />
          <ApiFnRegex />
          <ApiFnSentence />
          <ApiFnNumber />
          <ApiFnShuffle />
          <ApiFnWord />
          <ApiFnDistribution />
          <ApiFnRandom />
          <ApiFnGender />
          <ApiFnTitle />
          <ApiFnNamedata />
          <ApiFnFirstname />
          <ApiFnSurname />
          <ApiFnFullname />
          <ApiFnInfo />
          <ApiFnRegister />
          <ApiFnObject />
          <ApiFnString />
          {/*
          <ApiFnClone />
          <ApiFnReseed />
          <ApiFnState />
          <ApiFnFind />
          */}
        </section>
      </section>
    </Article>
  </Layout>
)

export default provide(Page)
