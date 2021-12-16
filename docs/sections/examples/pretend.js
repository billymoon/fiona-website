import Head from 'next/head'
import { Fiona, consume, Sample } from '../../app'
import JsonGraphqlServer from 'json-graphql-server'

process.browser &&
  import('pretender').then(({ default: Pretender }) => {
    window.Pretender = Pretender

    const pretender = new Pretender()

    const modelMock = seed =>
      Fiona(seed).object({
        fullname: seeded => seeded.fullname(),
        color: seeded => seeded.oneOf(['red', 'yellow', 'blue']),
        age: seeded => seeded.number({ max: 100 })
      })

    pretender.get('/user/:id', request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(modelMock(request.params.id))
    ])

    const data = Fiona().object({
      users: Fiona.Array(10, fiona => {
        // TODO: get fiona to pass current array index into function
        const index = fiona.info().path.toString().match(/(\d+)/m)[1]
        return modelMock(index)
      })
    })

    const server = process.browser ? JsonGraphqlServer({ data }) : () => {}

    const handler = server.getHandler()

    pretender.post('/graphql', async req => {
      const { status, headers, body } = await handler(req)
      return [status, headers, body]
    })

    pretender.get('/*all', pretender.passthrough)
  })

const Section = ({ seed }) => (
  <section>
    <h3>Mocking `fetch` with Fetch Pretender</h3>
    <p>
      Assuming some kind of setup code loading{' '}
      <a href="https://github.com/sstur/fetch-pretender">Fetch Pretender</a>
    </p>
    <Sample lang="html">{`
    <script src="https://cdn.rawgit.com/billymoon/fetch-pretender/master/dist/pretender.js"></script>
    `}</Sample>
    <p>You can define a mock server like this...</p>
    <Sample>{`
    const pretender = new Pretender()

    const modelMock = seed => Fiona(seed).object({
      fullname: seeded => seeded.fullname(),
      color: seeded => seeded.oneOf(['red', 'yellow', 'blue']),
      age: seeded => seeded.number({ max: 100 })
    })

    pretender.get('/user/:id', request => [
      200,
      { 'Content-Type': 'application/json' },
      JSON.stringify(modelMock(request.params.id))
    ])    
    `}</Sample>
    <p>
      Calls to fetch on specified routes will now be patched to return mock
      results generated by Fiona.
    </p>
    <Sample
      input={`
    fetch('/user/${seed}').then(r => r.text()).then(console.log)
    `}
      output={`
    ${JSON.stringify(
      Fiona(seed).object({
        fullname: seeded => seeded.fullname(),
        color: seeded => seeded.oneOf(['red', 'yellow', 'blue']),
        age: seeded => seeded.number({ max: 100 })
      })
    )}
    `}
    />
    <h3>Mock GraphQL Server with Fetch Pretender</h3>
    <Sample>{`
    import JsonGraphqlServer from 'json-graphql-server'
    const pretender = new Pretender()

    const data = Fiona().object({
      users: Fiona.Array(10, fiona => {
        const index = fiona.info().initseed.match(/root\[(\d+)\]/m)[1]
        return modelMock(index)
      })
    })

    const server = JsonGraphqlServer({ data })

    const handler = server.getHandler()

    pretender.post('/graphql', async req => {
      const { status, headers, body } = await handler(req)
      return [status, headers, body]
    })
    `}</Sample>
    <Sample
      input={`
        fetch('/graphql', {
          method: 'POST',
          body: \`{"query": "query users { allUsers { fullname, age } }"}\`
        }).then(r => r.json()).then(console.log)
      `}
      output={Fiona().json({
        // xxx: Fiona.Array(5, fiona => console.log(fiona.info()))
        posts: Fiona.Array(5, fiona =>
          Fiona(fiona.info().path.slice(-1)[0]).object({
            fullname: seeded => seeded.fullname(),
            color: seeded => seeded.oneOf(['red', 'yellow', 'blue']),
            age: seeded => seeded.number({ max: 100 })
          })
        )
      })}
    />
    <div className="clearfix" />
  </section>
)

export default consume(Section)