export default function Feedback({amount: {good, neutral, bad}}) {
    return <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
    </ul>
}