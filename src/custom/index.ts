export function convertToUSD(num: number): string {
    const result = num.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
    return result;
}

export function currentTime(): string {
    const currentDate: Date = new Date();
    const currentHours: number = currentDate.getHours();
    const incrementedHours: number = (currentHours + 1) % 24; // Adding 1 hour and accounting for rollover at midnight
    const currentMinutes: string = currentDate
        .getMinutes()
        .toString()
        .padStart(2, "0");
    const formattedTime: string = `${incrementedHours
        .toString()
        .padStart(2, "0")}:${currentMinutes}`;
    return formattedTime;
}
export function currentDate(): string {
    return new Date().toISOString().substr(0, 10);
}
