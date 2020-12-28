export const tableColumns = [
    {
        key: "6",
        label: 'Name',
        accessor: 'name',
        type: 'text',
        show: true
    },
    {
        key: "5",
        label: 'Season',
        accessor: 'season',
        type: 'text',
        show: true
    },
    {
        key: "4",
        label: 'Growth',
        accessor: 'growth',
        type: 'text',
        show: true
    },
    {
        key: "3",
        label: 'Water',
        accessor: 'water',
        type: 'text',
        show: true
    },
    {
        key: "2",
        label: 'Temperature',
        accessor: 'temperature',
        type: 'text',
        show: true
    },
    {
        key: "1",
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

export const serverSidePagination = true