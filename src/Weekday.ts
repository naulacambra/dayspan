/**
 * The days in a week.
 */
export class Weekday {
  public static SUNDAY = 0
  public static MONDAY = 1
  public static TUESDAY = 2
  public static WEDNESDAY = 3
  public static THURSDAY = 4
  public static FRIDAY = 5
  public static SATURDAY = 6

  /**
   * The full list of days in a week.
   */
  public static LIST: number[] = [
    Weekday.SUNDAY,
    Weekday.MONDAY,
    Weekday.TUESDAY,
    Weekday.WEDNESDAY,
    Weekday.THURSDAY,
    Weekday.FRIDAY,
    Weekday.SATURDAY,
  ]

  /**
   * The list of days starting with Monday and ending on Friday.
   */
  public static WEEK: number[] = [Weekday.MONDAY, Weekday.TUESDAY, Weekday.WEDNESDAY, Weekday.THURSDAY, Weekday.FRIDAY]

  /**
   * The days on the weekend, starting with Saturday and ending with Sunday.
   */
  public static ENDS: number[] = [Weekday.SATURDAY, Weekday.SUNDAY]
}
