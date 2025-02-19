export const getDaysInMonth = (date: Date): Date[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days: Date[] = [];

    // Get the first day of the month
    const firstDay = new Date(year, month, 1);
    // Get the last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Calculate pending days from previous month
    const firstDayOfWeek = firstDay.getDay(); // Sunday is 0, Monday is 1, etc.
    const prevMonthDays = new Date(year, month, 0).getDate();

    // Add padding days from previous month
    for (let i = firstDayOfWeek; i > 0; i--) {
        const paddingDate = new Date(year, month - 1, prevMonthDays - i + 1);
        days.push(paddingDate);
    }

    // Add all days of current month
    for (let day = new Date(firstDay); day <= lastDay; day.setDate(day.getDate() + 1)) {
        days.push(new Date(day));
    }

    // Add padding days from next month to complete the grid
    const remainingDays = 42 - days.length; // 6 rows × 7 days = 42
    for (let i = 1; i <= remainingDays; i++) {
        const paddingDate = new Date(year, month + 1, i);
        days.push(paddingDate);
    }

    return days;
};

export const getTime = (date: string) => {
    return new Date(date).toTimeString().slice(0, 5);
};
