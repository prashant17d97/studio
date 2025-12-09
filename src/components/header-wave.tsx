import { cn } from "@/lib/utils";

export default function HeaderWave({ className }: { className?: string }) {
  return (
    <div className={cn("text-primary", className)}>
      <svg width="794" height="200" viewBox="0 0 794 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H794V130.5C794 130.5 628 193 397 130.5C166 68 0 130.5 0 130.5V0Z" fill="currentColor"/>
        <path d="M794 105.5C794 105.5 661.5 152 501 105.5C340.5 59 133 118 0 88V130.5C0 130.5 166 68 397 130.5C628 193 794 130.5 794 130.5V105.5Z" fill="white" fillOpacity="0.1"/>
      </svg>
    </div>
  );
}
