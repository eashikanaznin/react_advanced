import { useState, useId } from "react";
import { v4 as uuidv4 } from 'uuid';

import { AddEventModal } from "./AddEventModal.jsx";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  subMonths,
  addMonths,
} from "date-fns";

export function Calender() {
  const defaultMonth = new Date();
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todayId, setTodayId] = useState('');

  const kid = useId();

  // modal controll
  const openModal = (key) => {
    setIsModalOpen(true);
    setTodayId(key)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // calender control
  const getAllDaysInMonth = (date) => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);

    let days = [];
    let currentDate = start;
    let toDay = format(new Date(), "dd-MM-yyyy");
    while (currentDate <= end) {
      days.push({
        date: format(currentDate, "d"), // Get the formatted date
        day: format(currentDate, "EE"), // Get the day name
        isToday: toDay == format(currentDate, "dd-MM-yyyy") ? "today" : "", // Get the day name
      });
      currentDate = addDays(currentDate, 1);
    }

    return days;
  };

  let calenderDays = getAllDaysInMonth(selectedMonth);

  const prevMonth = () => {
    setSelectedMonth((prevDate) => subMonths(prevDate, 1));
  };

  const nxtMonth = () => {
    setSelectedMonth((nxtDate) => addMonths(nxtDate, 1));
  };

  const resetMonth = () => {
    setSelectedMonth((nowDate) => defaultMonth);
  };


  return (
    <div>
      <div className="calendar">
        <div className="header">
          <button onClick={resetMonth} className="btn">
            Today
          </button>
          <div>
            <button onClick={prevMonth} className="month-change-btn">
              &lt;
            </button>
            <button onClick={nxtMonth} className="month-change-btn">
              &gt;
            </button>
          </div>
          <span className="month-title">
            {format(selectedMonth, "MMMM yyyy")}
          </span>
        </div>
        <div className="days">
          {calenderDays.map((day) => (
            // console.log(day.day)
            <div  key={`${kid}-${day.date}-calday`} className="day">
              <div className="day-header">
                <div className="week-name">{day.day}</div>
                <div className={`day-number ${day.isToday}`}>{day.date}</div>
                <button key={uuidv4()} onClick={(e) => openModal(uuidv4())} className="add-event-btn">
                  +
                </button>
              </div>
            </div>
          ))}

          {/* <div className="day non-month-day old-month-day">
        <div className="day-header">
          <div className="week-name">Sun</div>
          <div className="day-number">28</div>
          <button className="add-event-btn">+</button>
        </div>
        <div className="events">
          <button className="all-day-event blue event">
            <div className="event-name">Short</div>
          </button>
          <button className="all-day-event green event">
            <div className="event-name">
              Long Event Name That Just Keeps Going
            </div>
          </button>
          <button className="event">
            <div className="color-dot blue"></div>
            <div className="event-time">7am</div>
            <div className="event-name">Event Name</div>
          </button>
        </div>
      </div>
      <div className="day non-month-day old-month-day">
        <div className="day-header">
          <div className="week-name">Mon</div>
          <div className="day-number">29</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day non-month-day old-month-day">
        <div className="day-header">
          <div className="week-name">Tue</div>
          <div className="day-number">30</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day non-month-day old-month-day">
        <div className="day-header">
          <div className="week-name">Wed</div>
          <div className="day-number">31</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="week-name">Thu</div>
          <div className="day-number">1</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="week-name">Fri</div>
          <div className="day-number">2</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="week-name">Sat</div>
          <div className="day-number">3</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">4</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">5</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">6</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">7</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">8</div>
          <button className="add-event-btn">+</button>
        </div>
        <div className="events">
          <button className="all-day-event blue event">
            <div className="event-name">Short</div>
          </button>
          <button className="all-day-event red event">
            <div className="event-name">
              Long Event Name That Just Keeps Going
            </div>
          </button>
          <button className="event">
            <div className="color-dot red"></div>
            <div className="event-time">7am</div>
            <div className="event-name">Event Name</div>
          </button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">9</div>
          <button className="add-event-btn">+</button>
        </div>
        <div className="events">
          <button className="all-day-event green event">
            <div className="event-name">Short</div>
          </button>
          <button className="event">
            <div className="color-dot blue"></div>
            <div className="event-time">7am</div>
            <div className="event-name">Event Name</div>
          </button>
          <button className="event">
            <div className="color-dot green"></div>
            <div className="event-time">8am</div>
            <div className="event-name">Event Name</div>
          </button>
          <button className="event">
            <div className="color-dot blue"></div>
            <div className="event-time">9am</div>
            <div className="event-name">Event Name</div>
          </button>
          <button className="event">
            <div className="color-dot blue"></div>
            <div className="event-time">10am</div>
            <div className="event-name">Event Name</div>
          </button>
          <button className="event">
            <div className="color-dot red"></div>
            <div className="event-time">11am</div>
            <div className="event-name">Event Name</div>
          </button>
        </div>
        <button className="events-view-more-btn">+2 More</button>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">10</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">11</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">12</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day old-month-day">
        <div className="day-header">
          <div className="day-number">13</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number today">14</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">15</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">16</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">17</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">18</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">19</div>
          <button className="add-event-btn">+</button>
        </div>
        <div className="events">
          <button className="all-day-event blue event">
            <div className="event-name">Short</div>
          </button>
          <button className="all-day-event blue event">
            <div className="event-name">
              Long Event Name That Just Keeps Going
            </div>
          </button>
          <button className="event">
            <div className="color-dot blue"></div>
            <div className="event-time">7am</div>
            <div className="event-name">Event Name</div>
          </button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">20</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">21</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">22</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">23</div>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">24</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">25</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">26</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">27</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">28</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">29</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day">
        <div className="day-header">
          <div className="day-number">30</div>
          <button className="add-event-btn">+</button>
        </div>
      </div>
      <div className="day non-month-day">
        <div className="day-header">
          <div className="day-number">1</div>
          <button className="add-event-btn">+</button>
        </div>
      </div> */}
        </div>
      </div>

      {/* <div className="modal">
    <div className="overlay"></div>
    <div className="modal-body">
      <div className="modal-title">
        6/8/23
        <button className="close-btn">&times;</button>
      </div>
      <div className="events">
        <button className="all-day-event green event">
          <div className="event-name">Short</div>
        </button>
        <button className="event">
          <div className="color-dot blue"></div>
          <div className="event-time">7am</div>
          <div className="event-name">Event Name</div>
        </button>
        <button className="event">
          <div className="color-dot green"></div>
          <div className="event-time">8am</div>
          <div className="event-name">Event Name</div>
        </button>
        <button className="event">
          <div className="color-dot blue"></div>
          <div className="event-time">9am</div>
          <div className="event-name">Event Name</div>
        </button>
        <button className="event">
          <div className="color-dot blue"></div>
          <div className="event-time">10am</div>
          <div className="event-name">Event Name</div>
        </button>
      </div>
    </div>
  </div> */}

      {isModalOpen && <AddEventModal selectedMonth = {selectedMonth} setIsModalOpen = {setIsModalOpen} todayId = {todayId} />}
    </div>
  );
}
