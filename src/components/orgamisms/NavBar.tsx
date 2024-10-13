"use clinet";

import NavItem from "../molecules/NavItem";

export default function NavBar({}) {
  return (
    <nav className="flex w-full flex-row items-end justify-between bg-primary">
      <div className="flex text-fontWhite">
        <NavItem href="/">소개합니다</NavItem>
        <NavItem href="/chat">chat with 예정</NavItem>
        <NavItem href="/quiz">퀴즈</NavItem>
      </div>
      <div className="flex text-fontWhite">
        <NavItem href="/guestbook">방명록</NavItem>
      </div>
    </nav>
  );
}
