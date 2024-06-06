  // calender control
  const getAllDaysInMonth = (date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);

    let days = [];
    let currentDate = start;

    while (currentDate <= end) {
      days.push({
        date: format(currentDate, "d"), // Get the formatted date
        day: format(currentDate, "EE"), // Get the day name
      });
      currentDate = addDays(currentDate, 1);
    }

    return days;
  };