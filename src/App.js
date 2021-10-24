import { useState } from 'react';
import Controls from './Components/buttons/Buttons';
import Section from './Components/SectionTitle/SectionTitle';
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/SectionTitle/Notification';
import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttonNames = ['good', 'neutral', 'bad'];

  const onClick = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

 const  countTotal = () => {
    const total = good + neutral + bad;
    return total;
  };

 const  countPercent = () => {
    if (good > 0) {
      return Math.round((good / countTotal()) * 100);
    }
  };
    return (
      <div className="App">
        <header className="App-header">
          <p>Please leave feedback</p>
        </header>
        <Controls clickButton={onClick} options={buttonNames} />

        <Section title="Statistics">
          {countTotal() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal()}
              positiveFeedback={countPercent()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }


