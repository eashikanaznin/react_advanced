import { addEvent } from "../utility/addEvent.js";
import { format } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export function AddEventModal({ selectedMonth, setIsModalOpen, toDayId }) {
  const [eventFormValues, setEventFormValues] = useState({
    toDayId: toDayId,
    id:`event-${uuidv4()}`,
    name: "",
    allDay: "",
    color: "",
    startTime: "",
    endTime: "",
  });

  useEffect(() => {
    const storedFormValues = localStorage.getItem('eventFormValues');
    if (storedFormValues) {
      setEventFormValues(JSON.parse(storedFormValues));
    }
  }, []);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(eventFormValues));
    // localStorage.setItem('eventFormValues', JSON.stringify(eventFormValues));
    // console.log('Event added', eventFormValues);
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-body">
        <div className="modal-title">
          <div>Add Event</div>
          <small>{format(selectedMonth, "M/d/yyyy")}</small>
          <button onClick={() => setIsModalOpen(false)} className="close-btn">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <input id="id" type="hidden" value = {eventFormValues.id} onChange={handleChange} />
          <input id="toDayId" type="hidden" value={eventFormValues.toDayId} onChange={handleChange} />
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={eventFormValues.name}
            onChange={handleChange} />
          </div>
          <div className="form-group checkbox">
            <input type="checkbox" name="all-day" id="all-day" />
            <label htmlFor="all-day">All Day?</label>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="start-time">Start Time</label>
              <input type="time" name="start-time" id="start-time" />
            </div>
            <div className="form-group">
              <label htmlFor="end-time">End Time</label>
              <input type="time" name="end-time" id="end-time" />
            </div>
          </div>
          <div className="form-group">
            <label>Color</label>
            <div className="row left">
              <input
                type="radio"
                name="color"
                value="blue"
                id="blue"
                checked
                className="color-radio"
              />
              <label htmlFor="blue">
                <span className="sr-only">Blue</span>
              </label>
              <input
                type="radio"
                name="color"
                value="red"
                id="red"
                className="color-radio"
              />
              <label htmlFor="red">
                <span className="sr-only">Red</span>
              </label>
              <input
                type="radio"
                name="color"
                value="green"
                id="green"
                className="color-radio"
              />
              <label htmlFor="green">
                <span className="sr-only">Green</span>
              </label>
            </div>
          </div>
          <div className="row">
            <button className="btn btn-success" type="submit">
              Add
            </button>
            <button className="btn btn-delete" type="button">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
