export const tableColumns = [
    {
        label: 'Asset',
        accessor: 'asset',
        type: 'text',
        show: true
    },
    {
        label: 'Cost',
        accessor: 'cost',
        type: 'number',
        show: true
    },
    {
        label: 'Price',
        accessor: 'price',
        type: 'number',
        show: true
    },
    {
        label: 'Quantity',
        accessor: 'quantity',
        type: 'number',
        show: true
    },
    {
        label: 'Status',
        accessor: 'status',
        type: 'text',
        show: true
    }
]

export const initialValue = {
    asset: '',
    cost: 0,
    price: 0,
    quantity: 0,
    status: '',
    subRows: undefined
}

export const tableName = 'Assets'