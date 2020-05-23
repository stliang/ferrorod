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
        label: 'Task',
        accessor: 'task',
        type: 'text',
    },
    {
        label: 'Steps',
        accessor: 'steps',
        type: 'text',
    },
    {
        label: 'Status',
        accessor: 'status',
        type: 'text',
    },
    {
        label: 'Progress',
        accessor: 'progress',
        type: 'number',
    }
]

export const initialValue = {
    firstName: '',
    lastName: '',
    task: '',
    steps: '',
    status: '',
    progress: 0,
    subRows: undefined
}

export const tableName = 'WorkFlows'