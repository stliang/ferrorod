export const fields = [
    {
        label: 'Key',
        accessor: 'key',
        type: 'text',
        visibility: 'hidden'
    },
    {
        label: 'Asset',
        accessor: 'asset',
        type: 'text',
        visibility: 'visible'
    },
    {
        label: 'Cost',
        accessor: 'cost',
        type: 'number',
        visibility: 'visible'
    },
    {
        label: 'Price',
        accessor: 'price',
        type: 'number',
        visibility: 'visible'
    },
    {
        label: 'Quantity',
        accessor: 'quantity',
        type: 'number',
        visibility: 'visible'
    },
    {
        label: 'Status',
        accessor: 'status',
        type: 'text',
        visibility: 'visible'
    }
]

export const initialValue = {
    key: '',
    asset: '',
    cost: 0,
    price: 0,
    quantity: 0,
    status: '',
    subRows: undefined
}

export const tableName = 'Assets'