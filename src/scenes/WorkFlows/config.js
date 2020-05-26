export const fields = [
    {
        label: 'Key',
        accessor: 'key',
        type: 'text',
        visibility: 'hidden'
    },
    {
        label: 'First Name',
        accessor: 'firstName',
        type: 'text',
        visibility: 'visible'
    },
    {
        label: 'Last Name',
        accessor: 'lastName',
        type: 'text',
        visibility: 'visible'
    },
    {
        label: 'Task',
        accessor: 'task',
        type: 'text',
        visibility: 'visible'
    },
    {
        label: 'Steps',
        accessor: 'steps',
        type: 'text',
        visibility: 'visible'
    },
    {
        label: 'Status',
        accessor: 'status',
        type: 'text',
        visibility: 'visible'
    },
    {
        label: 'Progress',
        accessor: 'progress',
        type: 'number',
        visibility: 'visible'
    }
]

export const initialValue = {
    key: '',
    firstName: '',
    lastName: '',
    task: '',
    steps: '',
    status: '',
    progress: 0,
    subRows: undefined
}

export const tableName = 'WorkFlows'