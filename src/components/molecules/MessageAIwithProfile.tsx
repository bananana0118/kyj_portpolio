import React from "react";
import ChatProfile from "../atoms/ChatProfile";
import Label from "../atoms/Label";
import MessageAI from "../atoms/MessageAI";

type MessageAIwithProfileType = {
  profileImg: string;
  name: string;
  message: string;
};

export default function MessageAIwithProfile({
  profileImg,
  name,
  message,
}: MessageAIwithProfileType) {
  return (
    <div className="flex flex-row gap-3 mt-7">
      <ChatProfile src={profileImg} />
      <div className="flex flex-col">
        <Label>{name}</Label>
        <MessageAI>{message}</MessageAI>
      </div>
    </div>
  );
}
