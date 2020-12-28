export const tableColumns = [
    {
        key: "asset/asset",
        label: 'Asset',
        accessor: 'asset',
        type: 'text',
        show: true
    },
    {
        key: "asset/cost",
        label: 'Cost',
        accessor: 'cost',
        type: 'number',
        show: true
    },
    {
        key: "asset/price",
        label: 'Price',
        accessor: 'price',
        type: 'number',
        show: true
    },
    {
        key: "asset/quantity",
        label: 'Quantity',
        accessor: 'quantity',
        type: 'number',
        show: true
    },
    {
        key: "asset/status",
        label: 'Status',
        accessor: 'status',
        type: 'text',
        show: true
    },
    {
        key: "asset/timestamp",
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