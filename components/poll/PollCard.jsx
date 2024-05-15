"use client"
import React, { useState } from "react";

const PollCard = ({ poll }) => {
  const [pollAnswers, setPollAnswers] = useState(
    poll?.options?.map((option) => ({ option, votes: 0, clicked: false }))
  );

  const getTotalVotes = () => {
    return pollAnswers.reduce((total, answer) => total + answer.votes, 0);
  };

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) {
        answer.votes++;
      }
      answer.clicked = true;
      return answer;
    });
    setPollAnswers(newPollAnswers);
  };

  return (
    <div className="flex flex-col w-full gap-10 bg-black text-white rounded-lg shadow-md p-8 mb-10">
      <p className="font-semibold text-xl">{poll?.question}</p>
      <ul>
        {pollAnswers.map((answer, index) => {
          const percentage = ((answer.votes / getTotalVotes()) * 100).toFixed(2);
          return (
            <li key={index}>
              <button
                onClick={() => handleVote(answer.option)}
                className="w-full relative p-4 flex items-center mb-7 rounded-md text-xl font-semibold"
                style={{ backgroundColor: "rgb(55, 55, 55)", color: "white" }}
              >
                <span className="z-10">{answer.option}</span>
                {answer.clicked && (
                  <span className="z-10 ml-auto">{percentage}%</span>
                )}
                {answer.clicked && (
                  <span
                    className="absolute inset-0 vote-grad rounded-md"
                    style={{
                      width: `${percentage}%`,
                      zIndex: "0",
                      transition: "width 0.5s ease-in-out",
                    }}
                  ></span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PollCard;
