/* The function first converts beginTime and endTime to milliseconds 
using the getTime() method, and calculates the interval in milliseconds.
It then creates an empty array called dates, and uses a for loop to 
iterate over the intervals between beginTime and endTime, adding each 
interval to the dates array as a Date object.Finally, the function
returns the dates array.; */
function getIntervals(
  beginTime: Date,
  endTime: Date,
  intervalInMinutes: number
): Date[] {
  const beginTimeMS = beginTime.getTime();
  const endTimeMS = endTime.getTime();
  const intervalMS = intervalInMinutes * 1000 * 60;

  //if (endTimeMS < beginTimeMS) return;

  let dates: Date[] = [];

  for (let ms = beginTimeMS; ms <= endTimeMS; ms = ms + intervalMS) {
    const date = new Date(ms);
    dates.push(date);
  }

  return dates;
}

export { getIntervals };
