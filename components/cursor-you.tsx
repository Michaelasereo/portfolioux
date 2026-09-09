"use client";

import { useEffect, useRef, useState } from "react";

export function CursorYou() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    document.documentElement.classList.add("custom-cursor");

    const onMove = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="absolute top-0 left-0 block h-[0.5rem] w-[0.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black ring-[1.5px] ring-white" />
      <span className="absolute top-[0.55rem] left-[0.55rem] rounded-[0.28rem] bg-black px-[0.38rem] py-[0.18rem] font-[var(--font-helvetica)] text-[0.68rem] leading-none font-medium text-white">
        You
      </span>
    </div>
  );
}
