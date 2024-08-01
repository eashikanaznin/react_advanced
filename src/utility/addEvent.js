// Helper function to retrieve events from localStorage
export const getStoredEvents = () => {
  const storedEvents = localStorage.getItem("events");
  return storedEvents ? JSON.parse(storedEvents) : [];
};

// Function to add an event
export const addEvent = ({
  todayId,
  id,
  name,
  description,
  date,
  allDay,
  color,
  startTime,
  endTime,
}) => {
  console.log("UIUI", todayId);
  // Retrieve current events from localStorage
  const events = getStoredEvents();

  // Create a new event object
  const newEvent = {
    todayId,
    id,
    name,
    description,
    date,
    allDay,
    color,
    startTime,
    endTime,
  };

  // Add the new event to the array
  events.push(newEvent);
  console.log("I AM HERE addevjs", events);
  // Save the updated array back to localStorage
  localStorage.setItem("events", JSON.stringify(events));

  // Return the updated array
  return events;
};
