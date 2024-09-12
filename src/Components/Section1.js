import React, { useState, useEffect, useRef } from "react";
import "../Style/first.css";
import song from "../Assets/Ainalaiyn.mp3";

export default function Section1() {
  return (
    <div className="section1">
      <h1>Мадина</h1>
      <h2>Қыз Ұзату</h2>
      <PlayPauseButton />
      <Timer></Timer>
    </div>
  );
}

const PlayPauseButton = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Track whether the music is playing
  const audioRef = useRef(new Audio(song)); // Persist the Audio object across renders

  const togglePlayPause = () => {
    const music = audioRef.current;

    if (isPlaying == true) {
      music.pause(); // Pause the music
    } else {
      music.play(); // Play the music
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  useEffect(() => {
    const music = audioRef.current;

    // Ensure music stops when the component unmounts
    return () => {
      music.pause();
    };
  }, []);

  return (
    <div>
      <button onClick={togglePlayPause}>
        {isPlaying ? "Әуенді Тоқтату" : "Әуенді Қосу"}
      </button>
    </div>
  );
};

const Timer = () => {
  // Set target date to December 24th at 00:00 AM
  const targetDate = new Date("Nov 24, 2024 00:00:00").getTime();

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
        <div className="big">
          <div className="space">{Math.floor(timeLeft.days / 10)}</div>{" "}
          {timeLeft.days - Math.floor(timeLeft.days / 10) * 10}
        </div>
        <div className="small">дней</div>
      </div>
      <div className="big">:</div>
      <div className="elem">
        <div className="big">
          <div className="space">{Math.floor(timeLeft.hours / 10)}</div>{" "}
          {timeLeft.hours - Math.floor(timeLeft.hours / 10) * 10}
        </div>
        <div className="small">часов</div>
      </div>
      <div className="big">:</div>
      <div className="elem">
        <div className="big">
          <div className="space">{Math.floor(timeLeft.minutes / 10)}</div>{" "}
          {timeLeft.minutes - Math.floor(timeLeft.minutes / 10) * 10}
        </div>
        <div className="small">минут</div>
      </div>
      <div className="big">:</div>
      <div className="elem">
        <div className="big">
          <div className="space">{Math.floor(timeLeft.seconds / 10)}</div>{" "}
          {timeLeft.seconds - Math.floor(timeLeft.seconds / 10) * 10}
        </div>
        <div className="small">секунд</div>
      </div>
    </div>
  );
};
