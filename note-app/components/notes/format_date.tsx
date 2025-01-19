
export function format_date(date:string) {
    const newDate = new Date(date)
    const day =newDate.getDate() + ' '
    const month = newDate.toLocaleString('en-us', {month: 'short'})+ ' '
    const year = newDate.getFullYear()

   return `${day}${month}${year}`
}