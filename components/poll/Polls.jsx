"use client";
import React, { useEffect, useState } from "react";
import PollCard from "./PollCard";
import { isEmpty } from "lodash";
import axios from "axios";
import { getCookie } from "cookies-next";

const Polls = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    // Fetch polls data from backend when component mounts
    const fetchPolls = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/fetchPolls",
          {
            headers: {
              Authorization: `Bearer ${getCookie("token")}`,
            },
          }
        );
        console.log(response);
        const { data } = response.data;
        setPolls(data);
      } catch (error) {
        console.error("Error fetching polls:", error);
      }
    };

    fetchPolls();
  }, []);
  return (
    <div className="grid gap-4 w-full place-items-center">
      {!isEmpty(polls) &&
        polls?.map((poll, index) => {
          return <PollCard poll={poll} key={index} />;
        })}
    </div>
  );
};

export default Polls;
