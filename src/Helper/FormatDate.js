function FormatDate(dateString) {
    const date = new Date(dateString)
    return `${date.toLocaleDateString('nl-Nl', { dateStyle: "full" })} om ${date.toTimeString().slice(0, 5)}`
}

export { FormatDate }