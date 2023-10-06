/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  monday = "work",
  tuesday = "work",
  wednesday = "work",
  thursday = "work",
  friday = "work",
  saturday = "weekend",
  sunday = "weekend",
}

function isWeekend(day: string): boolean {
  if (day === "weekend") {
    return true;
  }
  return false;
}

isWeekend(Day.monday);
