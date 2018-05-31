import React, { Component } from 'react';
import Event from './components/Event';
import { getEvents, findEventIndex } from './utils';

class NextEvent extends Component {
    state = {
      prevEvent: undefined,
      nextEvent: undefined,
    };

  componentDidMount() {
    getEvents()
            .then(res => res.json())
            .then((events) => {
              const nextEventIndex = findEventIndex(events);
              this.setState({ nextEvent: { ...events[nextEventIndex - 1] },
                prevEvent: { ...events[nextEventIndex] } });
            });
  }

  render() {
    const { prevEvent, nextEvent } = this.state;
    return (
      <div>
        Prev event:
        {prevEvent ? <Event {...prevEvent} /> : <div>Loading...</div>}
        <br /> <hr />
        Next event:
        {nextEvent ? <Event {...nextEvent} /> : <div>Loading...</div>}
      </div>
    );
  }
}

export default NextEvent;
