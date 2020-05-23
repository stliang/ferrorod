export const getCurrentDate = (separator = '/') => {

    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

export const ranDate = (separator = '/') => {
    const newDate = new Date()
    const year = newDate.getFullYear();
    const month = Math.floor(Math.random() * 11) + 1
    const date = Math.floor(Math.random() * 29)
    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}