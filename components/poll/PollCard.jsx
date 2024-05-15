"use client";
import React, { useState } from "react";
import Poll from "react-polls";

const PollCard = ({ poll }) => {
  const [pollAnswers, setPollAnswers] = useState(
    poll?.options?.map((option) => ({ option, votes: 0 }))
  );

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setPollAnswers(newPollAnswers);
  };

  return (
    <div className="w-[32%] shadow-xl p-6 rounded-lg bg-orange-50 py-5 my-10">
      <p className="font-semibold px-4 pt-3 text-2xl">{poll?.question}</p>
      <Poll
        customStyles={{ theme: "purple" }}
        answers={pollAnswers}
        onVote={handleVote}
      />
    </div>
  );
};

export default PollCard;
