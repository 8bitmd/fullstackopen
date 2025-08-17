function Part ({part, exercise}) {
    return (
        <>
            <p>{part} {exercise}</p>
        </>
    )
}

export default function Content ({part1, exercises1, part2, exercises2, part3, exercises3}) {
    return (
        <>
            <Part part={part1} exercise={exercises1}/>
            <Part part={part2} exercises={exercises2}/>
            <Part part={part3} exercises={exercises3}/>
        </>
    )
}