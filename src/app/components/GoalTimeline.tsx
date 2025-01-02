interface GoalTimelineProps {
    goals: { month: string; goalTitle: string; goalDescription: string }[];
  }
  
  const GoalTimeline: React.FC<GoalTimelineProps> = ({ goals }) => {
    return (
      <div className="goal-timeline">
        <h2>Goals Timeline</h2>
        {goals.length === 0 ? (
          <p>No goals added yet. Start by adding your first goal!</p>
        ) : (
          <ul>
            {goals.map((goal, index) => (
              <li key={index} className="goal-item">
                <strong>{goal.month}</strong>: {goal.goalTitle} - {goal.goalDescription}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default GoalTimeline;
  