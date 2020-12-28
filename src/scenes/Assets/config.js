export const tableColumns = [
    {
        key: "6",
        label: 'Asset',
        accessor: 'asset',
        type: 'text',
        show: true
    },
    {
        key: "5",
        label: 'Cost',
        accessor: 'cost',
        type: 'number',
        show: true
    },
    {
        key: "4",
        label: 'Price',
        accessor: 'price',
        type: 'number',
        show: true
    },
    {
        key: "3",
        label: 'Quantity',
        accessor: 'quantity',
        type: 'number',
        show: true
    },
    {
        key: "2",
        label: 'Status',
        accessor: 'status',
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
    asset: '',
    cost: 0,
    price: 0,
    quantity: 0,
    status: '',
    timestamp: 0,
    subRows: undefined
}

export const tableName = 'Assets'

export const serverSidePagination = false