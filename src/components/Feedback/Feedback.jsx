export default function Feedback({amount: {good, neutral, bad}, percent}) {
    return <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Positive: {percent}%</li>
    </ul>
}