import { Component, OnInit } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventApi,
  EventClickArg,
  FullCalendarModule,
} from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS } from './event-utils';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  dayGridPlugin,
  timeGridPlugin,
]);

@Component({
  selector: 'app-full-calender',
  templateUrl: './full-calender.component.html',
  styleUrls: ['./full-calender.component.css'],
})
export class FullCalenderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    //     initialView: 'dayGridMonth',
    //     weekends: false,
    //     headerToolbar: {
    //       left: 'prev,next today',
    //       center: 'title',
    //       right: 'dayGridMonth,listWeek',

    //     },

    //     dayMaxEvents: true,
    //     events: [
    //       { title: 'event 1', date: '2021-16-12'},
    //       { title: 'event 2', date: '2021-23-12'},
    //       { title: 'event 3', date: '2021-27-12'},
    //       { title: 'event 1', date: '2021-28-12'},
    //       { title: 'event 1', date: '2021-21-12'},
    //     ],

    //   };

    //   toggleWeekends() {
    //     this.calendarOptions.weekends = !this.calendarOptions.weekends
    //   }

    //   handleCalendarToggle() {
    //     this.calendarVisible = !this.calendarVisible;
    //   }

    // }

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth', 
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    /* we can update a remote database when these fire:
eventAdd:
eventChange:
eventRemove:
*/
  };
  currentEvents: EventApi[] = [];

  // handleCalendarToggle() {
  //   this.calendarVisible = !this.calendarVisible;
  // }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
}

function createEventId(): string | undefined {
  throw new Error('Function not implemented.');
}
