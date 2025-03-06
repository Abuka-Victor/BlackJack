export const isWithinThreeHours = (timestamp: string) => {
  const givenTime = new Date(timestamp).getTime();
  const now = new Date().getTime();

  const diffInMs = Math.abs(now - givenTime);

  const threeHoursInMs = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

  return diffInMs <= threeHoursInMs;
};