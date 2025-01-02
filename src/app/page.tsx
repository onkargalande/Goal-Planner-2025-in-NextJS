'use client';

import { useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalTimeline from "./components/GoalTimeline";

export default function Home() {
  const [goals, setGoals] = useState<
    { month: string; goalTitle: string; goalDescription: string }[]
  >([]);

  const addGoal = (goal: { month: string; goalTitle: string; goalDescription: string }) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <div className="container">
      <GoalForm addGoal={addGoal} />
      <GoalTimeline goals={goals} />
    </div>
  );
}
