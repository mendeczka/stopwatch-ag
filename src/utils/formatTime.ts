export const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time% 60000) / 1000);
    const miliseconds = Math.floor(time % 1000) / 100;

    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2, '0')}:${String(miliseconds).padStart(1, '0')}`;
}