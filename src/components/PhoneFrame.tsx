import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  /** Rendered width in px at desktop; height follows the 1179x2556 ratio. */
  width?: number;
  priority?: boolean;
  className?: string;
};

/**
 * Renders an app screenshot inside a realistic phone shell.
 * Screenshots are native iPhone captures (1179x2556), so the frame
 * just adds a bezel, corner radius, and a soft premium shadow.
 */
export default function PhoneFrame({
  src,
  alt,
  width = 300,
  priority = false,
  className = "",
}: PhoneFrameProps) {
  const height = Math.round(width * (2556 / 1179));

  return (
    <div
      className={`relative rounded-[2.6rem] bg-pine p-[10px] shadow-[0_24px_60px_-20px_rgba(13,31,23,0.45)] ring-1 ring-ink/10 ${className}`}
      style={{ width: width + 20 }}
    >
      <div className="overflow-hidden rounded-[2rem]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={`(max-width: 640px) 70vw, ${width}px`}
          className="block h-auto w-full"
        />
      </div>
      {/* speaker notch hint */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[16px] h-[18px] w-[86px] -translate-x-1/2 rounded-full bg-pine"
      />
    </div>
  );
}
