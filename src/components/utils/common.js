import { getRandomImageURLByTopic } from "../apis/unsplash.js";
import { elementMaps } from "./elementMaps.js";

export let commonState = {
  userName: "",
  userEmail: "",
  userPw: "",
  isMorningAfternoon: "",
};

export const displayTime = () => {
  let times = new Date();
  let hours = times.getHours();
  let min = times.getMinutes();
  let sec = times.getSeconds();
  let isAmPm = "AM";
  let curTime = "";
  commonState.isMorningAfternoon = "morning";
  if (hours > 12) {
    isAmPm = "PM";
    commonState.isMorningAfternoon = "afternoon";
    hours %= 12;
  }

  curTime = `${hours < 10 ? `${hours}` : hours}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec} ${isAmPm}`;

  console.log(curTime);

  return curTime;
};