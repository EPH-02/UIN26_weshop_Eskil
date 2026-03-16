
export default function TeamCard({ team }){
    return (
        <article className="pokemon-card">
            <h2>{`Team ${team.name}`}</h2>
            <img src={`/teams/Team_${team.name}.webp`} alt={`Team ${team.name}`} />
        </article>
    )
}