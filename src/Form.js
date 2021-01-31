import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Slot from "./Slot";

const Form = () => {
  const [value, onChange] = useState(new Date());
  const weeksDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [booking, setBooking] = useState({
    type: "",
    name: "",
    description: "",
    slot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking({
      ...booking,
      [name]: value,
    });
  };

  const handleSlot = (value) => {
    setBooking({ ...booking, slot: value });
  };


  var gapi = window.gapi;
  var CLIENT_ID = "Your client id";
  var API_KEY = "your Api key";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleBook = () => {
    gapi.load("client:auth2", () => {
      console.log("load client");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("boom!"));

      gapi.auth2.getAuthInstance().signIn().then(()=>{
        var event = {
            'summary': booking.type,
            'location': 'India',
            'description': booking.description,
            'start': {
              'dateTime': '2015-05-28T17:00:00-07:00',
              'timeZone': 'Asia/Kolkata'
            },
            'end': {
              'dateTime': '2015-05-28T17:00:00-07:00',
              'timeZone': 'Asia/Kolkata'
            },
            'recurrence': [
              'RRULE:FREQ=DAILY;COUNT=2'
            ],
            'attendees': [
              {'email': 'lpage@example.com'},
              {'email': 'sbrin@example.com'}
            ],
            'reminders': {
              'useDefault': false,
              'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
              ]
            }
          }

          var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });

          request.execute(event => {window.open(event.htmlLink)})
      });
    });
  };

  return (
    <div className="container" style={{ paddingTop: "20px" }}>
      {console.log(booking)}
      <figure className="text-center">
        <h4>Meeting Room Booking</h4>
      </figure>

      <div className="row justify-content-center">
        <div className="col-4">
          <div className="form-floating mb-4">
            <select
              className="form-select"
              name="type"
              aria-label="Floating label select example"
              onChange={handleChange}
              value={booking.type}
              required
            >
              <option value="Trainee Meeting">Trainee Meeting</option>
              <option value="Employee Meeting">Employee Meeting</option>
              <option value="Client Meeting">Client Meeting</option>
            </select>
            <label htmlFor="type">Meeting Room</label>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4">
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={booking.name}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4">
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter meeting description"
              onChange={handleChange}
              value={booking.description}
              required
            />
            <label htmlFor="description">Meeting Description</label>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-4">
            {console.log(value.getUTCDate())}
          <Calendar onChange={onChange} value={value} />
          <p style={{ textAlign: "center" }}>
            {weeksDay[value.getDay()] +
              ", " +
              value.getDate() +
              " " +
              month[value.getMonth()]}
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <Slot handleSlot={handleSlot} />
        </div>
      </div>

      <div
        className="row justify-content-center"
        style={{ paddingTop: "30px", paddingBottom: "40px" }}
      >
        <div className="d-grid gap-2 col-2 mx-auto">
          <button type="button" className="btn btn-danger" onClick={handleBook}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
