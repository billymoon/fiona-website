const Fiona = require("fiona")

const seeded = Fiona(123);

const recurser = (condition,handler)=>{
    const nodeHandler = (node,root)=>{
        if (root === undefined) {
            root = node;
        }

        if (node === null || node === undefined) {
            return node;
        } else if (node.constructor === Array) {
            return node.map(item=>nodeHandler(item, root));
        } else if (node.constructor === Object) {
            if (condition(node, root)) {
                return handler(node, root)
            } else {
                Object.entries(node).forEach(([key,value])=>{
                    node[key] = nodeHandler(value, root);
                }
                );
                return node;
            }
        } else {
            return node;
        }
    }
    return nodeHandler
}

const json = JSON.stringify({
    name: {
        fiona: 'fullname'
    },
    age: {
        fiona: ['number', {
            max: 100
        }]
    },
    code: [1, {fiona: ['regex', '[10]{8} cyborgs']}, {
        fiona: ['number', {
            max: 100
        }]
    }],
    list: { fiona: ["array", 5, { fiona: ["oneOf", [{ fiona: "fullname" }, { fiona: "gibberish" }]] }] }
})

const transformer = recurser(node=>node.fiona, node=>{
    if (node.fiona.constructor === Array) {
        return seeded => seeded[node.fiona[0]](...node.fiona.slice(1).map(transformer))
    } else {
        return seeded => seeded[node.fiona]()
    }

})

Fiona.register(['fromJSON', (seeded, json) => {
    try {
        json = JSON.parse(json)
    } catch (err) {
        if (err.name !== 'SyntaxError') {
            throw Error(err)
        }
    }
    return transformer(json)
}])

console.log(Fiona(1).object(seeded.fromJSON(json)))
console.log(Fiona(1).object({
    name: Fiona.Fullname,
    age: Fiona.Number({ max: 100 }),
    code: [1, /[10]{8} cyborgs/, Fiona.Number({ max: 100 })],
    list: Fiona.Array(5, Fiona.Fullname)
}))
