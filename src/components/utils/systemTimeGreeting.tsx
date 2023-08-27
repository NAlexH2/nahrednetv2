export const SystemTimeGreeting = () => {
  const currentTime: Date = new Date(Date.now());
  const tod: number = currentTime.getHours();
  if (tod < 12) {
    return <h3>{"Good morning!"}</h3>;
  } else if (tod < 16) {
    return <h3>{"Good afternoon!"}</h3>;
  } else {
    return <h3>{"Good Evening!"}</h3>;
  }
};

export default SystemTimeGreeting;
