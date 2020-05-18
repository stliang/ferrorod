export const fields = [
    {
        label: 'First Name',
        accessor: 'firstName',
        type: 'text',
    },
    {
        label: 'Last Name',
        accessor: 'lastName',
        type: 'text',
    },
    {
        label: 'Age',
        accessor: 'age',
        type: 'number',
    },
    {
        label: 'Visits',
        accessor: 'visits',
        type: 'number',
    },
    {
        label: 'Status',
        accessor: 'status',
        type: 'text',
    },
    {
        label: 'Profile Progress',
        accessor: 'profileProgress',
        type: 'text',
    }
]

export const initialValue = {
    firstName: '',
    lastName: '',
    age: 0,
    visits: 0,
    quantity: 0,
    status: '',
    profileProgress: 0,
    subRows: undefined
}

export const tableName = 'Users'