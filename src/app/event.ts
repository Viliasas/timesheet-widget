import { Moment } from 'moment/moment';

export class Event {

  date?: Moment;
  quantity?: number;
  price?: number;
  eventTypeName?: string;
  isExpenseType = false;
  isHoursEventType = false;
  isAdditionalHoursEventType = false;
  isWorkHour = false;
  isApproved = false;
  isRejected = false;
  tasksCount?: number;
  firstTaskStart?: Moment;
  lastTaskEnd?: Moment;

}
