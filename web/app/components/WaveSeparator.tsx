export default function WaveSeparator({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="w-full h-20 block"
      style={{ transform: flip ? "scaleY(-1)" : "none" }}
    >
      <path
        d="M0 40C240 0 480 80 720 40S1200 0 1440 40V80H0Z"
        fill="var(--color-soft)"
      />
    </svg>
  );
}
