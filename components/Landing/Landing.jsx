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
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div className='bg-black h-full w-auto p-10 overflow-y-hidden'>
        <div className='flex mb-5 mr-5'>
          <div className='font-bold text-white text-2xl flex flex-1 cursor-pointer'>Flowspace</div>
          <div className='text-white flex flex-4 text-2xl gap-8 cursor-pointer'>
            <p>Login</p>
            <p>Sign Up</p>
          </div>
        </div>
        <div className='w-full bg-gradient-to-b from-purple-800 via-purple-500 to-violet rounded-xl flex'>
        <div className='flex flex-1 text-white px-10 pt-48 flex-col'>
            <p className='text-5xl font-bold text-center'>Know the Public Opinion or let know your opinion</p>
            <p className='font-semibold text-center mt-10'>We offer a sanctuary for those seeking to navigate the currents of thought and emotion, providing a digital haven where minds converge, ideas flourish, and connections ignite. Within this dynamic ecosystem, individuals are invited to share their insights, pose questions, and explore the myriad pathways that shape their existence. It's a place where the ever-changing winds of inspiration guide the collective journey, fostering a sense of community, collaboration, and growth. Here, in the fluidity of discourse and discovery, each participant finds their unique rhythm, charting a course that resonates with their deepest aspirations. As the currents of change ebb and flow, FlowSpace remains a steadfast beacon, illuminating the way forward and inviting all to embrace the transformative power of shared experience.</p>
            <div className='flex gap-5 justify-center mt-10'>
                <button className='btn-grad font-bold text-2xl'>Sign Up</button>
                <button className='btn2-grad font-bold text-2xl'>Share Your Opinion</button>
            </div>
            
        </div>
        <div className='flex flex-1'>
        <Lottie 
          options={defaultOptions}
          height={700}
          width={700}
        />
=======
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
            <button className="btn2-grad font-bold text-2xl">
              Share Your Opinion
            </button>
          </div>

        </div>
        <div className="flex flex-1">
          <Lottie options={defaultOptions} height={700} width={700} />
        </div>
<div className='w-full flex gap-24 px-36 text-white mt-56 text-center'>
          <div className='flex flex-1 fixed-gradient px-10 flex-col'>
              <p className='font-semibold text-2xl mb-10'>Our Goal</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, iusto voluptatem officiis architecto obcaecati temporibus quae nulla eveniet ut laudantium vitae illo reprehenderit suscipit dolore repellendus ab quaerat, enim eaque.</p>
          </div>
          <div className='flex flex-1 fixed-gradient px-10 flex-col'>
              <p className='font-semibold text-2xl mb-10'>Our Mission</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam rerum consequatur assumenda cumque velit et in laborum animi id quisquam rem nihil, quis impedit exercitationem, repellendus hic, odio voluptas.</p>
          </div>
          <div className='flex flex-1 fixed-gradient px-10 flex-col'>
              <p className='font-semibold text-2xl mb-10'>Our Vision</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate beatae magni recusandae illum aspernatur dolorum provident magnam optio ex laborum, accusantium deleniti libero veritatis pariatur ipsum, quam, natus dignissimos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
