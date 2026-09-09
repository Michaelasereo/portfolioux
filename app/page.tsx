"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { MichaelWordmark } from "@/components/michael-wordmark";
import { caseStudies } from "@/lib/case-studies";

const headerLinks = ["About", "Get in Touch"];

const timeRegions = [
  { id: "lagos", label: "Lagos", timeZone: "Africa/Lagos" },
  { id: "california", label: "California", timeZone: "America/Los_Angeles" },
  { id: "london", label: "London", timeZone: "Europe/London" },
  { id: "canada", label: "Canada", timeZone: "America/Toronto" },
  { id: "germany", label: "Germany", timeZone: "Europe/Berlin" },
] as const;

function formatRegionTime(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone,
    timeZoneName: "shortOffset",
  }).formatToParts(new Date());

  const hour = parts.find((part) => part.type === "hour")?.value ?? "";
  const minute = parts.find((part) => part.type === "minute")?.value ?? "";
  const dayPeriod = parts.find((part) => part.type === "dayPeriod")?.value ?? "";
  const offset = parts.find((part) => part.type === "timeZoneName")?.value ?? "";

  return `${offset} ${hour}:${minute}${dayPeriod}`;
}

export default function Home() {
  const [selectedCaseId, setSelectedCaseId] = useState(caseStudies[0].id);
  const [regionIndex, setRegionIndex] = useState(0);
  const [slideKey, setSlideKey] = useState(0);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const syncTime = () => setNow(Date.now());
    syncTime();
    const timeIntervalId = window.setInterval(syncTime, 60_000);
    const regionIntervalId = window.setInterval(() => {
      setRegionIndex((current) => (current + 1) % timeRegions.length);
      setSlideKey((current) => current + 1);
    }, 3200);

    return () => {
      window.clearInterval(timeIntervalId);
      window.clearInterval(regionIntervalId);
    };
  }, []);

  const activeRegion = timeRegions[regionIndex];
  const timeValue = useMemo(
    () => formatRegionTime(activeRegion.timeZone),
    [activeRegion, now],
  );

  const selectedCaseStudy = useMemo(
    () => caseStudies.find((study) => study.id === selectedCaseId) ?? caseStudies[0],
    [selectedCaseId],
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)] py-7 text-[var(--foreground)]">
      <div className="w-full px-[calc(43/1440*100vw)]">
        <div className="flex w-full flex-col gap-[82px]">
          <header className="intro-nav flex w-full items-center justify-between">
            <div
              aria-label="Michael"
              className="logo-mark hover-zoom relative h-[1.25rem] w-[calc(114/1440*100vw)] shrink-0"
              role="img"
            >
              <MichaelWordmark />
              <Image
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-[6.193125rem] h-[0.235rem] w-[0.235rem]"
                src="/assets/trademark.svg"
                width={3.76}
                height={3.76}
              />
            </div>

            <div className="flex w-[calc(844/1440*100vw+35px+290/1440*100vw)] items-center justify-between">
              <div className="flex items-center gap-[0.2rem]">
                <div className="flex h-[calc(24/1440*100vw)] w-[calc(24/1440*100vw)] shrink-0 items-center justify-center rounded-full bg-[var(--surface)]">
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-[calc(16/1440*100vw)] w-[calc(16/1440*100vw)]"
                    src="/assets/clock.svg"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="time-slide-frame relative flex h-[calc(24/1440*100vw)] min-w-[12rem] items-center overflow-hidden">
                  <p
                    key={slideKey}
                    className="time-slide font-[var(--font-helvetica)] text-[14px] leading-none tracking-[0.14px] whitespace-nowrap"
                  >
                    {activeRegion.label} {timeValue}
                  </p>
                </div>
              </div>

              <nav aria-label="Primary" className="flex items-center gap-8">
                {headerLinks.map((link) => (
                  <button
                    key={link}
                    type="button"
                    className="nav-link font-[var(--font-helvetica)] text-[16px] tracking-[0.16px]"
                  >
                    {link}
                  </button>
                ))}
                <button
                  type="button"
                  className="nav-link flex items-center gap-1.5 font-[var(--font-helvetica)] text-[16px] tracking-[0.16px]"
                >
                  <span>Resume</span>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-[calc(24/1440*100vw)] w-[calc(24/1440*100vw)] rotate-180"
                    src="/assets/arrow-down-left.svg"
                    width={24}
                    height={24}
                  />
                </button>
              </nav>
            </div>
          </header>

          <section className="flex w-full items-end justify-between">
            <div className="intro-left flex w-[calc(114/1440*100vw)] flex-col gap-[9px]">
              <p className="text-[11.492px] tracking-[0.1149px] text-[var(--muted)]">CASE STUDIES</p>
              <div className="flex flex-col gap-[13px]">
                {caseStudies.map((study) => {
                  const isActive = study.id === selectedCaseStudy.id;

                  return (
                    <button
                      key={study.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setSelectedCaseId(study.id)}
                      className={`hover-zoom flex h-[31px] w-[calc(112/1440*100vw)] items-center justify-center rounded-[15px] px-[10px] text-[15.377px] tracking-[0.1538px] transition-colors ${
                        isActive
                          ? "bg-[var(--chip-active)] font-medium"
                          : "bg-[var(--surface)] font-normal"
                      }`}
                    >
                      {study.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-[35px]">
              <div className="intro-up intro-showcase w-[calc(844/1440*100vw)]">
              <div className="hover-zoom relative h-[584px] w-full overflow-hidden rounded-[8px] bg-[var(--surface)]">
                <div className="flex h-full w-full items-center justify-center">
                  <div
                    className={`flex h-[318px] w-[calc(520/1440*100vw)] flex-col justify-between rounded-[28px] p-8 ${selectedCaseStudy.accentClassName}`}
                  >
                    <div className="text-[12px] uppercase tracking-[0.16em] text-[var(--stage-muted)]">
                      {selectedCaseStudy.stageLabel}
                    </div>
                    <div className="space-y-3">
                      <div className="h-[72px] rounded-[20px] bg-[var(--background)]/40" />
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-[88px] rounded-[18px] bg-[var(--background)]/35" />
                        <div className="h-[88px] rounded-[18px] bg-[var(--background)]/35" />
                        <div className="h-[88px] rounded-[18px] bg-[var(--background)]/35" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[10px] left-[78px] flex h-[103px] w-[calc(262/1440*100vw)] rounded-[8px] bg-[var(--surface-overlay)] p-5">
                  <div className="flex w-full flex-col justify-between">
                    <div className="h-2 w-[calc(64/1440*100vw)] rounded-full bg-[var(--background)]/55" />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--stage-soft)]">
                        Selected
                      </p>
                      <p className="mt-2 text-[20px] tracking-[0.02em]">
                        {selectedCaseStudy.overlayLabel}
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              <aside className="flex w-[calc(290/1440*100vw)] flex-col gap-[25px]">
                <section className="intro-up intro-showcase">
                  <div className="hover-zoom h-[189px] rounded-[8px] bg-[var(--surface)] p-[15px]">
                    <div className="flex h-full w-full flex-col gap-[14px]">
                      <p className="text-[12.42px] font-medium tracking-[0.1242px]">SHOWCASE</p>
                      <div className="min-h-0 w-full flex-1 rounded-[8px] bg-[var(--surface-dark)]" />
                    </div>
                  </div>
                </section>

                <section className="intro-up intro-ux flex flex-col gap-[11px]">
                  <p className="text-[12.42px] tracking-[0.1242px] text-[var(--muted)]">
                    UX &amp; DESIGN ENGINEERING
                  </p>
                  <div className="flex flex-col gap-[11px]">
                    <div className="hover-zoom h-[107px] rounded-[8px] bg-[var(--surface)]" />
                    <div className="hover-zoom h-[107px] rounded-[8px] bg-[var(--surface)]" />
                    <div className="hover-zoom h-[107px] rounded-[8px] bg-[var(--surface)]" />
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
