import { cn } from "@/lib/utils";

export default function FooterWave({ className }: { className?: string }) {
    return (
        <div className={cn("absolute bottom-0 left-0 w-full h-[71px]", className)}>
            <div className="absolute w-[595px] h-[71px] left-1/2 -translate-x-1/2 bottom-0" style={{background: 'linear-gradient(90.39deg, #0154A7 0.34%, #002141 103.25%)', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px #034B93'}}/>
            <div className="absolute w-[601.2px] h-[57.5px] left-1/2 -translate-x-1/2 bottom-0" style={{background: 'linear-gradient(90.52deg, #0154A7 1.51%, #002141 103.22%)', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px #034B93'}}/>
        </div>
    );
}