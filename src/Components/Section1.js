import React, { useState, useEffect, useRef } from "react";
import backr from "../Assets/backr.jpg";
import "../Style/first.css";

export default function Section1() {
  return (
    <div className="section1">
      <img src={backr} />

      <div className="header-wrapper">
        <h1>Мадина</h1>
        <h2>Қыз Ұзату</h2>
        <PlayPauseButton />
        <Timer></Timer>
      </div>
    </div>
  );
}

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Track whether the music is playing
  const audioRef = useRef(null); // Reference to the audio element

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the music
    } else {
      audioRef.current.play(); // Play the music
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  return (
    <div>
      <button onClick={togglePlayPause}>
        {isPlaying ? "Әуенді Тоқтату" : "Әуенді Қосу"}
      </button>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="../Assets/Ainalayin.m4a" />
    </div>
  );
};

const Timer = () => {
  // Set target date to December 24th at 00:00 AM
  const targetDate = new Date("Dec 24, 2024 00:00:00").getTime();

  // State to hold the remaining time
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  // Function to calculate the time difference
  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: formatTime(Math.floor((difference / 1000 / 60) % 60)),
        seconds: formatTime(Math.floor((difference / 1000) % 60)),
      };
    }

    return timeLeft;
  }

  // Function to ensure double-digit formatting
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  return (
    <div className="timer">
      <div className="elem">
        <div className="big">{timeLeft.days}</div>
        <div className="small">дней</div>
      </div>
      <div className="big">:</div>
      <div className="elem">
        <div className="big">{timeLeft.hours}</div>
        <div className="small">часов</div>
      </div>
      <div className="big">:</div>
      <div className="elem">
        <div className="big">{timeLeft.minutes}</div>
        <div className="small">минут</div>
      </div>
      <div className="big">:</div>
      <div className="elem">
        <div className="big">{timeLeft.seconds}</div>
        <div className="small">секунд</div>
      </div>
    </div>
  );
};
