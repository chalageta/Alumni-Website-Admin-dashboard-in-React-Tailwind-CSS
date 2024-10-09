import React from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  Agenda,
  WorkWeek,
  Month,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { scheduleData } from '../data/constants';
import { Header } from '../components';

// Custom event template to display images and event details
const eventTemplate = (props) => {
  
  return (
    <div className="event-template">
      <img src={props.imageUrl} alt={props.Subject} className="event-image" />
      <div className="event-details">
        <h4>{props.Subject}</h4>
        <p>{props.Description}</p>
      </div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height='650px'
        eventSettings={{
          dataSource: scheduleData,
          template: eventTemplate, // Set the custom event template
        }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
