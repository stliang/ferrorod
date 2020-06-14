export const tableColumns = [
    {
        label: 'Name',
        accessor: 'name',
        type: 'text',
        show: true
    },
    {
        label: 'Season',
        accessor: 'season',
        type: 'text',
        show: true
    },
    {
        label: 'Growth',
        accessor: 'growth',
        type: 'text',
        show: true
    },
    {
        label: 'Water',
        accessor: 'water',
        type: 'text',
        show: true
    },
    {
        label: 'Temperature',
        accessor: 'temperature',
        type: 'text',
        show: true
    },
    {
        label: 'Timestamp',
        accessor: 'timestamp',
        type: 'number',
        show: false
    }
]

export const initialValue = {
    name: '',
    season: '',
    growth: '',
    water: '',
    temperature: '',
    timestamp: 0,
    subRows: undefined
}

export const tableName = 'Grasses'