import namor from 'namor'

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newAsset = () => {
    const typeChance = Math.random()
    return {
        farm: namor.generate({ words: 1, numbers: 0 }),
        value: Math.floor(Math.random() * 100),
        cost: Math.floor(Math.random() * 100),
        quantity: Math.floor(Math.random() * 1000),
        type:
            typeChance > 0.66
                ? 'cow'
                : typeChance > 0.33
                    ? 'pig'
                    : 'chicken',
    }
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newAsset(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}