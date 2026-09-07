"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { caseStudies } from "@/lib/case-studies";

const headerLinks = ["About", "Get in Touch"];

function formatTime() {
  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Africa/Lagos",
  });

  return `GMT+1 ${formatter.format(new Date()).replace(" ", "")}`;
}

export default function Home() {
  const [selectedCaseId, setSelectedCaseId] = useState(caseStudies[0].id);
  const [time, setTime] = useState(formatTime);

  useEffect(() => {
    const syncTime = () => setTime(formatTime());

    syncTime();
    const intervalId = window.setInterval(syncTime, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const selectedCaseStudy = useMemo(
    () => caseStudies.find((study) => study.id === selectedCaseId) ?? caseStudies[0],
    [selectedCaseId],
  );

  return (
    <main className="min-h-screen overflow-x-auto bg-white px-6 py-7 text-black">
      <div className="mx-auto w-[1440px] min-w-[1440px]">
        <div className="flex w-[1353px] flex-col items-end gap-[82px]">
          <header className="flex items-center gap-[66px]">
            <div className="relative h-[20px] w-[107.01px]">
              <Image
                alt="Michael wordmark"
                className="absolute left-0 top-[1.79px] h-[18.21px] w-[107.01px]"
                src="/assets/michael-wordmark.svg"
                width={107.01}
                height={18.21}
              />
              <Image
                alt=""
                aria-hidden="true"
                className="absolute left-[99.09px] top-0 h-[3.76px] w-[3.76px]"
                src="/assets/trademark.svg"
                width={3.76}
                height={3.76}
              />
            </div>

            <div className="flex w-[1163px] items-end justify-between">
              <div className="flex items-center gap-1">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f1f1f1]">
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4"
                    src="/assets/clock.svg"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="font-[var(--font-helvetica)] text-[14px] tracking-[0.14px]">
                  {time}
                </p>
              </div>

              <nav aria-label="Primary" className="flex items-center gap-8">
                {headerLinks.map((link) => (
                  <button
                    key={link}
                    type="button"
                    className="cursor-pointer font-[var(--font-helvetica)] text-[16px] tracking-[0.16px] transition-opacity hover:opacity-70"
                  >
                    {link}
                  </button>
                ))}
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1.5 font-[var(--font-helvetica)] text-[16px] tracking-[0.16px] transition-opacity hover:opacity-70"
                >
                  <span>Resume</span>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-6 w-6 rotate-180"
                    src="/assets/arrow-down-left.svg"
                    width={24}
                    height={24}
                  />
                </button>
              </nav>
            </div>
          </header>

          <section className="flex w-full items-end justify-between">
            <div className="flex w-[114px] flex-col gap-[9px]">
              <p className="text-[11.492px] tracking-[0.1149px] text-[#635f64]">CASE STUDIES</p>
              <div className="flex flex-col gap-[13px]">
                {caseStudies.map((study) => {
                  const isActive = study.id === selectedCaseStudy.id;

                  return (
                    <button
                      key={study.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setSelectedCaseId(study.id)}
                      className={`flex h-[31px] w-[112px] items-center justify-center rounded-[15px] px-[10px] text-[15.377px] tracking-[0.1538px] transition-colors ${
                        isActive ? "bg-[#e8e8e8] font-medium" : "bg-[#f1f1f1] font-normal"
                      }`}
                    >
                      {study.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-[35px]">
              <div className="relative h-[584px] w-[844px] overflow-hidden rounded-[8px] bg-[#f1f1f1]">
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    className={`flex h-[318px] w-[520px] flex-col justify-between rounded-[28px] p-8 ${selectedCaseStudy.accentClassName}`}
                  >
                    <div className="text-[12px] uppercase tracking-[0.16em] text-[#7b7b7b]">
                      {selectedCaseStudy.stageLabel}
                    </div>
                    <div className="space-y-3">
                      <div className="h-[72px] rounded-[20px] bg-white/40" />
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-[88px] rounded-[18px] bg-white/35" />
                        <div className="h-[88px] rounded-[18px] bg-white/35" />
                        <div className="h-[88px] rounded-[18px] bg-white/35" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[10px] left-[78px] flex h-[103px] w-[262px] rounded-[8px] bg-[#e8e8e8] p-5">
                  <div className="flex w-full flex-col justify-between">
                    <div className="h-2 w-16 rounded-full bg-white/55" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[#787878]">
                        Selected
                      </p>
                      <p className="mt-2 text-[20px] tracking-[0.02em]">
                        {selectedCaseStudy.overlayLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="flex w-[290px] flex-col gap-[25px]">
                <section className="relative h-[189px] rounded-[8px] bg-[#f1f1f1]">
                  <div className="flex w-[265px] flex-col gap-[14px] p-[15px]">
                    <p className="text-[12.42px] font-medium tracking-[0.1242px]">SHOWCASE</p>
                    <div className="h-[131px] rounded-[8px] bg-[#d9d9d9]" />
                  </div>
                </section>

                <section className="flex flex-col gap-[11px]">
                  <p className="text-[12.42px] tracking-[0.1242px] text-[#635f64]">
                    UX &amp; DESIGN ENGINEERING
                  </p>
                  <div className="flex flex-col gap-[11px]">
                    <div className="h-[107px] rounded-[8px] bg-[#f1f1f1]" />
                    <div className="h-[107px] rounded-[8px] bg-[#f1f1f1]" />
                    <div className="h-[107px] rounded-[8px] bg-[#f1f1f1]" />
                  </div>
                </section>
              </aside>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
