'use client';

import { useState } from 'react';

interface GoalFormProps {
  addGoal: (goal: { month: string; goalTitle: string; goalDescription: string }) => void;
}

const GoalForm: React.FC<GoalFormProps> = ({ addGoal }) => {
  const [month, setMonth] = useState('');
  const [goalTitle, setGoalTitle] = useState('');
  const [goalDescription, setGoalDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (month && goalTitle && goalDescription) {
      addGoal({ month, goalTitle, goalDescription });
      setMonth('');
      setGoalTitle('');
      setGoalDescription('');
    }
  };

  return (
    <div className="goal-form">
      <h2>Add New Goal</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="month">Month</label>
        <select
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="input-field"
        >
          <option value="">Select Month</option>
          {[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ].map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <label htmlFor="goalTitle">Goal Title</label>
        <input
          id="goalTitle"
          type="text"
          value={goalTitle}
          onChange={(e) => setGoalTitle(e.target.value)}
          className="input-field"
          placeholder="e.g., Learn React"
        />
        <label htmlFor="goalDescription">Goal Description</label>
        <textarea
          id="goalDescription"
          value={goalDescription}
          onChange={(e) => setGoalDescription(e.target.value)}
          className="input-field"
          placeholder="e.g., Revise hooks and context"
        />
        <button type="submit" className="add-goal-btn">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default GoalForm;
