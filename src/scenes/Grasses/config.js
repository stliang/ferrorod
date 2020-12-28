export const tableColumns = [
    {
        key: "grass/name",
        label: 'Name',
        accessor: 'name',
        type: 'text',
        show: true
    },
    {
        key: "grass/season",
        label: 'Season',
        accessor: 'season',
        type: 'text',
        show: true
    },
    {
        key: "grass/growth",
        label: 'Growth',
        accessor: 'growth',
        type: 'text',
        show: true
    },
    {
        key: "grass/water",
        label: 'Water',
        accessor: 'water',
        type: 'text',
        show: true
    },
    {
        key: "grass/temperature",
        label: 'Temperature',
        accessor: 'temperature',
        type: 'text',
        show: true
    },
    {
        key: "grass/timestamp",
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