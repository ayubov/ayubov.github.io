const getEvents = () =>
    fetch('https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/us/events');

const findEventIndex = events => events.findIndex(e => new Date(e.event_date) < new Date());

export { getEvents, findEventIndex };
