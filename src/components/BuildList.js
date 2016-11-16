import React from 'react';
import BuildItem from './BuildItem';

class BuildList extends React.Component {
  render() {
    let buildMock = [
      {
        id: 1,
        webUrl: "https://boo.com",
        name: "Build",
        finishTime: "11/2/16 9:48 AM",
        startTime: "11/2/16 9:40 AM",
        changeName: "NOTICKET Version bump 1.14.51",
        isDisabled: false,
        isRunning: false,
        statusText: 'Testing the status text'
      },
      {
        id: 2,
        webUrl: "https://boo.com",
        name: "Build",
        finishTime: "11/2/16 9:48 AM",
        startTime: "11/2/16 9:40 AM",
        changeName: "NOTICKET Version bump 1.14.51",
        isDisabled: false,
        isRunning: false,
        statusText: 'Testing the status text'
      },
      {
        id: 3,
        webUrl: "https://boo.com",
        name: "Build",
        finishTime: "11/2/16 9:48 AM",
        startTime: "11/2/16 9:40 AM",
        changeName: "NOTICKET Version bump 1.14.51",
        isDisabled: false,
        isRunning: false,
        statusText: 'Testing the status text'
      },
      {
        id: 4,
        webUrl: "https://boo.com",
        name: "Build",
        finishTime: "11/2/16 9:48 AM",
        startTime: "11/2/16 9:40 AM",
        changeName: "NOTICKET Version bump 1.14.51",
        isDisabled: false,
        isRunning: false,
        statusText: 'Testing the status text'
      },
      {
        id: 5,
        webUrl: "https://boo.com",
        name: "Build",
        finishTime: "11/2/16 9:48 AM",
        startTime: "11/2/16 9:40 AM",
        changeName: "NOTICKET Version bump 1.14.51",
        isDisabled: false,
        isRunning: true,
        statusText: 'Testing the status text'
      },
    ]

    let mocks = buildMock.map((item) => {
      return <BuildItem key={item.id} build={item} />
    })
    return (
      <div>
        <h1>BuildItems:</h1>
        {mocks}
      </div>
    );
  }
}

export default BuildList;