import React from 'react';
import BuildItem from './BuildItem';

class BuildList extends React.Component {
  render() {
    let buildMock = {
      webUrl: "https://boo.com",
      name: "Build",
      finishTime: "11/2/16 9:48 AM",
      startTime: "11/2/16 9:40 AM",
      changeName: "NOTICKET Version bump 1.14.51",
      isDisabled: false,
      isRunning: false,
      statusText: 'Testing the status text'

    }

    return (
      <div>
        <h1>BuildItems:</h1>
        <BuildItem build={buildMock} />
      </div>
    );
  }
}

export default BuildList;