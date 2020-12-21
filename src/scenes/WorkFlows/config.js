export const tableColumns = [
    {
        id: 7,
        label: 'First Name',
        accessor: 'firstName',
        type: 'text',
        show: true
    },
    {
        id: 6,
        label: 'Last Name',
        accessor: 'lastName',
        type: 'text',
        show: true
    },
    {
        id: 5,
        label: 'Task',
        accessor: 'task',
        type: 'text',
        show: true
    },
    {
        id: 4,
        label: 'Steps',
        accessor: 'steps',
        type: 'text',
        show: true
    },
    {
        id: 3,
        label: 'Status',
        accessor: 'status',
        type: 'text',
        show: true
    },
    {
        id: 2,
        label: 'Progress',
        accessor: 'progress',
        type: 'number',
        show: true
    },
    {
        id: 1,
        label: 'Timestamp',
        accessor: 'timestamp',
        type: 'number',
        show: false
    }
]

export const initialValue = {
    id: 0,
    firstName: '',
    lastName: '',
    task: '',
    steps: '',
    status: '',
    progress: 0,
    timestamp: 0,
    subRows: undefined
}

export const tableName = 'WorkFlows'

export const serverSidePagination = false