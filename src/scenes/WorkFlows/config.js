export const tableColumns = [
    {
        key: "workflow/firstName",
        label: 'First Name',
        accessor: 'firstName',
        type: 'text',
        show: true
    },
    {
        key: "workflow/lastName",
        label: 'Last Name',
        accessor: 'lastName',
        type: 'text',
        show: true
    },
    {
        key: "workflow/task",
        label: 'Task',
        accessor: 'task',
        type: 'text',
        show: true
    },
    {
        key: "workflow/steps",
        label: 'Steps',
        accessor: 'steps',
        type: 'text',
        show: true
    },
    {
        key: "workflow/status",
        label: 'Status',
        accessor: 'status',
        type: 'text',
        show: true
    },
    {
        key: "workflow/progress",
        label: 'Progress',
        accessor: 'progress',
        type: 'number',
        show: true
    },
    {
        key: "workflow/timestamp",
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