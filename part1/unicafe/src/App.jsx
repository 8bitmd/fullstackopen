import { useState } from 'react'
import Button from "./components/Button.jsx";
import StatisticLine from "./components/StatisticLine.jsx";

const Statistics = ({good, neutral, bad, total, average, positive}) => {
    return (
        <>
            <h1>statistics</h1>
            {total === 0 ? 'No feedback given.' :
                <table>
                    <tbody>
                        <StatisticLine text={'good'} value={good} />
                        <StatisticLine text={'neutral'} value={neutral} />
                        <StatisticLine text={'bad'} value={bad} />
                        <StatisticLine text={'total'} value={total} />
                        <StatisticLine text={'average'} value={average} />
                        <StatisticLine text={'positive'} value={positive + '%'} />
                    </tbody>
                </table> }
        </>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const total = good + neutral + bad
    const average = total === 0 ? 0 : (good - bad) / total
    const positive = total === 0 ? 0 : good / total * 100

    return (
        <div>
            <h1>give feedback</h1>
            <Button content={'good'} onClick={() => setGood(g => g + 1)}/>
            <Button content={'neutral'} onClick={() => setNeutral(n => n + 1)}/>
            <Button content={'bad'} onClick={() => setBad(b => b + 1)}/>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
        </div>
    )
}

export default App