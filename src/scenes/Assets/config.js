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

export const headers = fields.map(o => {return {Header: o.label, accessor: o.accessor}})