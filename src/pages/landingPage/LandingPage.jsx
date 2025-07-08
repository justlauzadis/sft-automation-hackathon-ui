import "./landingPage.scss";
import React, { useEffect, useState } from "react";
import { ReactComponent as Robot } from "../../images/Hackathon robot.svg";

const DEFAULT_EVENT_CONFIG = {
    name: '',
    type: '',
    year: '',
    corePrincipals:[],
    generalRules: [],
    notes: [],
    agenda: [],
    judges: [],
};

const LandingPage = () => {
  const [eventConfig, setEventConfig] = useState({ ...DEFAULT_EVENT_CONFIG });
  useEffect(() => {
    fetch(`https://sft-automation-hackathon-api.onrender.com/event/info`)
        .then(response => response.json())
        .then(data => setEventConfig({ ...DEFAULT_EVENT_CONFIG,...data}));
  }, []);

  return (
  <>
   <figure className="title-section__figure">
              <Robot className="title-section__robot" alt="Hackathon robot" />
            </figure>
    <section className="title-section">
      <h1 className="title-section__title">
        <span className="title-section__pre-title">WELCOME TO</span>
        {eventConfig.type}
        <span className="title-section__subtitle">{eventConfig.name}</span>
      </h1>
    </section>
    <article className="event-description">
      <h2>Story</h2>
      <p>
        {eventConfig.story}
      </p>
    </article>
    <article className="event-description">
      <h2>Core principles</h2>
      <p>
        {eventConfig.corePrincipals}
      </p>
    </article>
    <article className="event-description">
      <h2>General rules</h2>
      <ol>
        {eventConfig.generalRules.map(rule => (
          <li>
          {rule}
          </li>
        ))}
      </ol>
    </article>
    <article className="event-description">
      <h2>Additional notes</h2>
      {eventConfig.notes.map(note => (
          <p>
          {note}
          </p>
        ))}
    </article>
    <article className="event-description">
      <h2>Event Agenda</h2>
      <ul>
      {eventConfig.agenda.map(agendaItem => (
          <li>
          {agendaItem}
          </li>
        ))}
      </ul>
    </article>
    <article className="event-description">
      <h2>Event Judges</h2>
      <ul>
      {eventConfig.judges.map(judge => judge.email ?(
          <li>
          {judge.name} {judge.email ? (<a href={`mailto:${judge.email}`}>({judge.email})</a>):''}
          </li>
        ):<li>
        {judge.name}
        </li>)}
      </ul>
    </article>
  </>
)};

export default LandingPage;
