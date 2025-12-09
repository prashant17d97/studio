import { cn } from "@/lib/utils";

export default function FooterWave({ className }: { className?: string }) {
  return (
    <img
      src="/bottom.png"
      alt="Footer Wave"
      className={cn("absolute bottom-0 left-0 w-full h-[79px]", className)}
      style={{ objectFit: 'fill', width: '100%', height: '79px' }}
    />
  );
}
