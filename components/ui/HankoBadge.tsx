import { cn } from "@/lib/utils";

export function HankoBadge({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative flex h-12 w-12 items-center justify-center rounded-sm border-2 border-red-800 bg-red-50/10 text-red-800 shadow-sm mix-blend-multiply opacity-90 transition-transform duration-300 hover:rotate-6",
                className
            )}
            aria-label="Signature Hanko Stamp"
        >
            <div className="absolute inset-0 border border-red-800/20 m-0.5 rounded-[1px]" />
            <span className="font-serif text-2xl font-bold leading-none select-none">
                R
            </span>
        </div>
    );
}
