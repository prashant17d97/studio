import { cn } from "@/lib/utils";

export default function HeaderWave({ className }: { className?: string }) {
  return (
    <div className={cn("absolute top-0 left-0 w-full", className)}>
      <div className="box-border absolute w-[599px] h-[212px] -left-0.5 -top-7" style={{ background: 'linear-gradient(96.33deg, #FFFFFF 8.99%, rgba(1, 84, 167, 0.9) 60.23%, #0154A7 110.04%)', border: '1px solid #EEEEEE' }} />
      <div className="box-border absolute w-[597px] h-[187px] left-0 -top-7.5" style={{ background: 'linear-gradient(88.43deg, #FFFFFF 5.81%, rgba(1, 84, 167, 0.2) 56.46%, rgba(1, 84, 167, 0.9) 75.91%, #0154A7 132.51%)' }} />
      <div className="box-border absolute w-[599px] h-[171px] -left-0.5 -top-7.5" style={{ background: 'linear-gradient(88.43deg, #FFFFFF 5.81%, rgba(1, 84, 167, 0.2) 56.46%, rgba(1, 84, 167, 0.9) 75.91%, #0154A7 132.51%)' }} />
    </div>
  );
}
