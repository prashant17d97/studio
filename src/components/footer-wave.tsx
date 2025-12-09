import { cn } from "@/lib/utils";

export default function FooterWave({ className }: { className?: string }) {
    return (
        <div className={cn("text-primary", className)}>
            <svg width="794" height="150" viewBox="0 0 794 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M794 150H0V45C0 45 166 -18 397 45C628 108 794 45 794 45V150Z" fill="currentColor"/>
                <path d="M0 70C0 70 132.5 23.5 293 70C453.5 116.5 661 57.5 794 87.5V45C794 45 628 108 397 45C166 -18 0 45 0 45V70Z" fill="white" fillOpacity="0.1"/>
            </svg>
        </div>
    );
}
