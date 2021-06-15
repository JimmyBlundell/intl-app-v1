import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage, FormattedDate } from "react-intl";

interface AppProps {
  date: number
}

function App(props: AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage
              id={"app.header"}
              defaultMessage={"Edit <code>src/App.js</code> and save to reload"}
              values={{ fileName: "src/App.js", code: (word: string) => <code>{word}</code> }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage
              id={"app.content"}
              defaultMessage={"Learn React"}
          />
        </a>
        <FormattedMessage
            id={"app.channel.plug"}
            defaultMessage={"Code example brought to you by AGI SureTrack"}
            values={{channelName: "AGI SureTrack"}}
        />
        <br/>
        <FormattedDate
            value={props.date}
            year={"numeric"}
            month={"long"}
            day={"numeric"}
            weekday={"long"}
        />
      </header>
    </div>
  );
}

export default App;
