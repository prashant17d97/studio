import { cn } from "@/lib/utils";

export default function FooterWave({ className }: { className?: string }) {
  return (
    <svg width="604" height="79" viewBox="0 0 604 79" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("absolute bottom-0 left-0 w-full", className)}>
      <g filter="url(#filter0_di_1_5)">
        <path d="M4 75V7.97199C4 7.97199 40.4694 4 64.4492 4C90.8596 4 108.912 4.99301 134.39 7.97203C158.824 10.8288 175.24 12.9716 199.336 17.9021C233.307 24.8532 288.761 37.2658 288.761 37.2658C288.761 37.2658 329.894 46.3287 364.697 51.6644C399.5 57 448.127 55.6364 448.127 55.6364C448.127 55.6364 478.217 54.9554 495.087 52.6574C518.024 49.5331 532.556 48.1888 555.037 43.2238C574.833 38.8518 598.5 32.3007 598.5 32.3007L599 75H4Z" fill="url(#paint0_linear_1_5)"/>
      </g>
      <g filter="url(#filter1_di_1_5)">
        <path d="M4.90265 75L4.90266 24.5652C4.90266 24.5652 -7.58879 16.9999 60.3652 17C84.869 17 123.822 24.5652 123.822 24.5652C123.822 24.5652 164.142 31.6169 193.275 39.1912C226.253 47.7652 245.343 56.3414 279.717 62.8957C312.134 69.077 329.683 70.9652 363.66 72.4783C397.637 73.9913 453.099 73.9913 453.099 73.9913C453.099 73.9913 479.696 72.7952 496.57 70.4609C519.51 67.2873 533.015 66.4884 554.531 57.8522C573.378 50.2874 600 31.5 600 31.5V75H4.90265Z" fill="url(#paint1_linear_1_5)"/>
      </g>
      <defs>
        <filter id="filter0_di_1_5" x="0" y="0" width="603" height="79" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0110947 0 0 0 0 0.294009 0 0 0 0 0.576923 0 0 0 1 0"/>
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_5"/>
        </filter>
        <filter id="filter1_di_1_5" x="0" y="13" width="604" height="66" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0110947 0 0 0 0 0.294009 0 0 0 0 0.576923 0 0 0 1 0"/>
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_5"/>
        </filter>
        <linearGradient id="paint0_linear_1_5" x1="4" y1="39.5" x2="618.5" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0154A7"/>
          <stop offset="1" stopColor="#002141"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_5" x1="4.90258" y1="53.313" x2="616.087" y2="111.12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0154A7"/>
          <stop offset="1" stopColor="#002141"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
