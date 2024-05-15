"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/assets/lottie/landing2.json";
import { useRouter } from "next/navigation";

const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const router = useRouter();

  return (
    <div className="bg-black h-screen w-auto p-10">
      <div className="h-full w-full bg-gradient-to-b from-purple-800 via-purple-500 to-violet rounded-xl flex">
        <div className="flex flex-1 text-white px-10 pt-48 flex-col">
          <p className="text-5xl font-bold text-center">
            Know the Public Opinion or let know your opinion
          </p>
          <p className="font-semibold text-center mt-10">
            We offer a sanctuary for those seeking to navigate the currents of
            thought and emotion, providing a digital haven where minds converge,
            ideas flourish, and connections ignite. Within this dynamic
            ecosystem, individuals are invited to share their insights, pose
            questions, and explore the myriad pathways that shape their
            existence. It&apos a place where the ever-changing winds of
            inspiration guide the collective journey, fostering a sense of
            community, collaboration, and growth. Here, in the fluidity of
            discourse and discovery, each participant finds their unique rhythm,
            charting a course that resonates with their deepest aspirations. As
            the currents of change ebb and flow, FlowSpace remains a steadfast
            beacon, illuminating the way forward and inviting all to embrace the
            transformative power of shared experience.
          </p>
          <div className="flex gap-5 justify-center mt-10">
            <button
              className="btn-grad font-bold text-2xl"
              onClick={() => router.push("/login")}
            >
              Sign Up
            </button>
            <button
              className="btn2-grad font-bold text-2xl"
              onClick={() => router.push("/feed")}
            >
              Share Your Opinion
            </button>
          </div>
        </div>
        <div className="flex flex-1">
          <Lottie options={defaultOptions} height={700} width={700} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
