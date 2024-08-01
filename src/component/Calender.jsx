import { useState, useId, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import { getStoredEvents } from "../utility/addEvent.js";

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
  const [todayId, setTodayId] = useState("");

  const kid = useId();

  const eventStarageData = localStorage.getItem("events")
    ? JSON.parse(localStorage.getItem("events"))
    : [];

  // modal controll
  const openModal = (key) => {
    setTodayId(key);
    setIsModalOpen(true);
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
        uniqDate: format(currentDate, "ddMMyyyy"), // Get the formatted date
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
            <div key={`${kid}-${day.date}-calday`} className="day">
              <div className="day-header">
                <div className="week-name">{day.day}</div>
                <div className={`day-number ${day.isToday}`}>{day.date}</div>
                <button
                  key={uuidv4()}
                  onClick={(e) => openModal(day.uniqDate)}
                  className="add-event-btn"
                >
                  +
                </button>
                {eventStarageData.length === 0 ? (
                  <p>No events available.</p>
                ) : (
                  <div className="events">
                    {eventStarageData
                      .filter((event) => event.todayId == day.uniqDate)
                      .map((event) => (
                        <div key={event.id} className={`event ${event.color}`}>
                          <div className="color-dot red"></div>
                          {/* <div className="event-time">7am</div> */}
                          <div className="event-name">{event.name}</div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <AddEventModal
          selectedMonth={selectedMonth}
          setIsModalOpen={setIsModalOpen}
          todayId={todayId}
        />
      )}
    </div>
  );
}
