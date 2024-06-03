import { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns"

export function Calender({ currentDate, onChange }) {
  const [isExpanded, setIsexpanded] = useState(false);
  return (
    <div className="date-picker-container">
      <button
        className="date-picker-button"
        onClick={() => {
          setIsexpanded((o) => !o);
        }}
      >
        {/* {console.log(currentDate)} */}
        {currentDate == null
          ? "Select Date"
          : format(currentDate, "MMM do, yyyy")}
      </button>
      {isExpanded && (
        <Datepicker currentDate={currentDate} onChange={onChange} />
      )}
    </div>
  );
}

function Datepicker({ currentDate, onChange }) {
  const [visibleMonth, setVisibleMonth] = useState(currentDate || new Date())

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  })

  function showPreviousMonth() {
    setVisibleMonth(currentMonth => {
      return addMonths(currentMonth, -1)
    })
  }

  function showNextMonth() {
    setVisibleMonth(currentMonth => {
      return addMonths(currentMonth, 1)
    })
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          className="prev-month-button month-button"
          onClick={showPreviousMonth}
        >
          &larr;
        </button>
        <div className="current-month">
          {format(visibleMonth, "MMMM - yyyy")}
        </div>
        <button
          className="next-month-button month-button"
          onClick={showNextMonth}
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map(date => (
          <button
            onClick={() => onChange(date)}
            className={`date ${
              !isSameMonth(date, visibleMonth) && "date-picker-other-month-date"
            } ${isSameDay(date, currentDate) && "selected"} ${
              isToday(date) && "today"
            }`}
            key={date.toDateString()}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  )

  // const [visibleMonth, setVisibleMonth] = useState(currentDate || new Date());

  // function prevMonth() {

  //   setVisibleMonth((currentMonth) => {
  //     alert(currentMonth)
  //     // alert(currentMonth - 1);
  //     return addMonths(currentMonth - 1);
  //   });
  // }
  // return (
  //   <div className="date-picker">
  //     <div className="date-picker-header">
  //       <button
  //         className="prev-month-button month-button"
  //         onClick={prevMonth}
  //       >
  //         &larr;
  //       </button>
  //       <div className="current-month">{format(visibleMonth, "MMMM yyyy")}</div>
  //       <button className="next-month-button month-button">&rarr;</button>
  //     </div>
  //     <div className="date-picker-grid-header date-picker-grid">
  //       <div>Sun</div>
  //       <div>Mon</div>
  //       <div>Tue</div>
  //       <div>Wed</div>
  //       <div>Thu</div>
  //       <div>Fri</div>
  //       <div>Sat</div>
  //     </div>
  //     <div className="date-picker-grid-dates date-picker-grid">
  //       <button className="date date-picker-other-month-date">28</button>
  //       <button className="date date-picker-other-month-date">29</button>
  //       <button className="date date-picker-other-month-date">30</button>
  //       <button className="date date-picker-other-month-date">31</button>
  //       <button className="date">1</button>
  //       <button className="date">2</button>
  //       <button className="date">3</button>
  //       <button className="date">4</button>
  //       <button className="date">5</button>
  //       <button className="date">6</button>
  //       <button className="date">7</button>
  //       <button className="date">8</button>
  //       <button className="date">9</button>
  //       <button className="date">10</button>
  //       <button className="date">11</button>
  //       <button className="date">12</button>
  //       <button className="date">13</button>
  //       <button className="date">14</button>
  //       <button className="date">15</button>
  //       <button className="date">16</button>
  //       <button className="date">17</button>
  //       <button className="date">18</button>
  //       <button className="date">19</button>
  //       <button className="date">20</button>
  //       <button className="date">21</button>
  //       <button className="date">22</button>
  //       <button className="date">23</button>
  //       <button className="date">24</button>
  //       <button className="date">25</button>
  //       <button className="date selected">26</button>
  //       <button className="date">27</button>
  //       <button className="date">28</button>
  //       <button className="date today">29</button>
  //       <button className="date">30</button>
  //       <button className="date date-picker-other-month-date">1</button>
  //     </div>
  //   </div>
  // );



}
