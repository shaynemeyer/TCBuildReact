import React from 'react';
import './BuildItem.css';

let BuildItem = ({build}) => {

  function getTags() {

    if (build.tag) {
      let tags = build.tag.map(tag => {
        return <span className="label" key={tag.name}>{tag.name}</span> // todo: add tooltip={tag.description}
      });

      return (
        <span>
          {tags}
        </span>
      );
    }
  }

  function isDisabled() {
    if (build.isDisabled) {
      return <span className="label label-default">Disabled</span>;
    }
  }

  function showErrors() {
    if(build.error) {
      let {message} = build.error[0]; // todo: handle this with filter?

      return (
        <span className="labels pull-right">
			    <span className="label label-default">
				  Offline	<span className="error-message">({message})</span>
			    </span>
          {getTags()}
          {isDisabled()}
		    </span>
      );
    }
  }

  function showCommits() {
    if(build.changes && !build.error) {

      let changes = build.changes.map((change) => {
        return (
          <span className="changes" key={change.name}>
            <span className="change-name">{change.name}</span>
            {showChangeMessage(change.message)}
          </span>
        );
      });

      function showChangeMessage(message) {
        if(message) {
          return (
            <span className="change-message">: {message}</span>
          );
        }
      }

      return (
        <div className="changes-container">
          {changes}
        </div>
      );
    }
  }

  function showStatus() {
    // todo: test for viewConfig.showRelease
    if(!build.error && build.statusText) {
      return (
        <div className="changes-container">
			    <span>
				    <span className="change-message">{build.statusText}</span>
			    </span>
        </div>
      );
    }
  }

  function showFinishedTime () {
    // todo: add check for viewConfig.showFinishedDate once enabled in the ui
    // todo: handle datetime stamp correctly
    if(!build.error && !build.isRunning && build.finishTime) {
      return (
        <div className="changes-container">
			    <span>
				    <span className="change-message">Finished: {build.finishTime}</span>
			    </span>
        </div>
      );
    }
  }

  function showStartTime() {

    // todo: add check for viewConfig.showStartTime once enabled in the ui
    // todo: handle datetime stamp correctly
    if(!build.error && build.isRunning && build.startTime) {
      return (
        <div className="changes-container">
			    <span>
				    <span className="change-message">Started: {build.startTime}</span>
			    </span>
        </div>
      );
    }
  }

  return (
    <div className="group-items">
      <div className="build">
        <a href={build.webUrl } target='_blank' className="progress-bar">
          {showErrors()}
          <span className="build-name">{build.name}</span>
          {showStatus()}
          {showFinishedTime()}
          {showStartTime()}
          {showCommits()}
        </a>
      </div>
    </div>
  );
}

export default BuildItem;
