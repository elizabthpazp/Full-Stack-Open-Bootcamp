import React, { useState } from "react";
import ReactDOM from "react-dom";

const StatisticLine = (props) => {
  return (
    <tr>{props.text ? props.text:null}:<td>{props.value}</td></tr>
  );
};

const Statistics = (props) => {
  if (props.good[1] !== 0 || props.neutral[1] !== 0 || props.bad[1] !== 0) {
    return (
      <div>
        <h1>{props.title}</h1>
        <table>
          <tbody> 
            <StatisticLine
              text={props.good[0]}
              value={props.good[1]}
            ></StatisticLine>
            <StatisticLine
              text={props.neutral[0]}
              value={props.neutral[1]}
            ></StatisticLine>
            <StatisticLine
              text={props.bad[0]}
              value={props.bad[1]}
            ></StatisticLine>
            <StatisticLine
              text={props.all[0]}
              value={props.bad[1] + props.good[1] + props.neutral[1]}
            ></StatisticLine>
            <StatisticLine
              text={props.average}
              value={(props.bad[1] + props.good[1] + props.neutral[1]) / 3}
            ></StatisticLine>
            <StatisticLine
              text={props.positive}
              value={(props.good[1] / 3) * 100 + "%"}
            ></StatisticLine>
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.hidden}</p>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const comments = {
    title: "Give Feedback",
    good: ["Good", good],
    neutral: ["Neutral", neutral],
    bad: ["Bad", bad],
    all: "All",
    average: "Average",
    positive: "Positive",
    statistics: "Statistics",
    hidden: "No Feedback Given",
  };
  return (
    <div>
      <h1>{comments.title}</h1>
      <button onClick={() => setGood(good++)}>{comments.good[0]}</button>
      <button onClick={() => setNeutral(neutral++)}>
        {comments.neutral[0]}
      </button>
      <button onClick={() => setBad(bad++)}>{comments.bad[0]}</button>
      <Statistics
        hidden={comments.hidden}
        title={comments.statistics}
        good={comments.good}
        neutral={comments.neutral}
        bad={comments.bad}
        all={comments.all}
        average={comments.average}
        positive={comments.positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
