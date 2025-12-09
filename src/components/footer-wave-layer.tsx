import { cn } from "@/lib/utils";

export default function FooterWaveLayer({ className }: { className?: string }) {
    const svgString = `
    <svg width="603" height="79" viewBox="4 0 595 79" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M4 75V7.97199C4 7.97199 40.4694 4 64.4492 4C90.8596 4 108.912 4.99301 134.39 7.97203C158.824 10.8288 175.24 12.9716 199.336 17.9021C233.307 24.8532 288.761 37.2658 288.761 37.2658C288.761 37.2658 329.894 46.3287 364.697 51.6644C399.5 57 448.127 55.6364 448.127 55.6364C448.127 55.6364 478.217 54.9554 495.087 52.6574C518.024 49.5331 532.556 48.1888 555.037 43.2238C574.833 38.8518 598.5 32.3007 598.5 32.3007L599 75H4Z" fill="url(#paint0_linear_1_2)" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="4" y1="39.5" x2="618.5" y2="75" gradientUnits="userSpaceOnUse">
                <stop stop-color="#0154A7" />
                <stop offset="1" stop-color="#002141" />
            </linearGradient>
        </defs>
    </svg>`;

    const encodedSvg = encodeURIComponent(svgString);

    return (
        <img
            src={`data:image/svg+xml;utf8,${encodedSvg}`}
            alt=""
            className={cn("absolute bottom-0 left-0 w-full h-[79px]", className)}
            style={{ objectFit: 'fill', width: '100%', height: '79px' }}
        />
    );
}
