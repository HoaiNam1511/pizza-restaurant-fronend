import { useState, useEffect } from "react";

interface UseDebounceProps {
    value: string;
    delay: number;
}

export function useDebounce({ value, delay }: UseDebounceProps): string {
    const [debounceValue, setDebounceValue] = useState<string>(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);
    return debounceValue;
}
