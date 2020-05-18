export const fields = [
    {
        label: 'Asset',
        accessor: 'asset',
        type: 'text',
    },
    {
        label: 'Cost',
        accessor: 'cost',
        type: 'number',
    },
    {
        label: 'Price',
        accessor: 'price',
        type: 'number',
    },
    {
        label: 'Quantity',
        accessor: 'quantity',
        type: 'number',
    },
    {
        label: 'Status',
        accessor: 'status',
        type: 'text',
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