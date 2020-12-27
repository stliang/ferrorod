export const tableColumns = [
    {
        key: "7",
        label: 'First Name',
        accessor: 'firstName',
        type: 'text',
        show: true
    },
    {
        key: "6",
        label: 'Last Name',
        accessor: 'lastName',
        type: 'text',
        show: true
    },
    {
        key: "5",
        label: 'Task',
        accessor: 'task',
        type: 'text',
        show: true
    },
    {
        key: "4",
        label: 'Steps',
        accessor: 'steps',
        type: 'text',
        show: true
    },
    {
        key: "3",
        label: 'Status',
        accessor: 'status',
        type: 'text',
        show: true
    },
    {
        key: "2",
        label: 'Progress',
        accessor: 'progress',
        type: 'number',
        show: true
    },
    {
        key: "1",
        label: 'Timestamp',
        accessor: 'timestamp',
        type: 'number',
        show: false
    }
]

export const initialValue = {
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