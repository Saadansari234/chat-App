
// Create a new Date object
const now = new Date();

// Get the current hour and minute
let hours = now.getHours();
const minutes = now.getMinutes();

// Determine AM or PM
const ampm = hours >= 12 ? 'PM' : 'AM';

// Format minutes to always be two digits
const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

const Timestamp = `${hours}:${formattedMinutes} ${ampm}`;

export default Timestamp
