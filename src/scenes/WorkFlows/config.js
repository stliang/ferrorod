export const tableColumns = [
    {
        label: 'First Name',
        accessor: 'firstName',
        type: 'text',
        show: true
    },
    {
        label: 'Last Name',
        accessor: 'lastName',
        type: 'text',
        show: true
    },
    {
        label: 'Task',
        accessor: 'task',
        type: 'text',
        show: true
    },
    {
        label: 'Steps',
        accessor: 'steps',
        type: 'text',
        show: true
    },
    {
        label: 'Status',
        accessor: 'status',
        type: 'text',
        show: true
    },
    {
        label: 'Progress',
        accessor: 'progress',
        type: 'number',
        show: true
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