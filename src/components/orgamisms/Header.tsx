import React from "react";

export default function Header() {
  return (
    <header className="flex h-[58px] items-center justify-between bg-primary px-8">
      <div className="font-bold text-highlight">모든것은 예정대로</div>
      <div>
        <div>검색창</div>
        <div>검색버튼</div>
      </div>
    </header>
  );
}
