/* The local time in India, as the instrument cluster shows it. */
import { useEffect, useState } from 'react';

const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });

export default function LocalTime() {
  const [now, setNow] = useState(() => fmt.format(new Date()));
  useEffect(() => {
    const id = setInterval(() => setNow(fmt.format(new Date())), 15000);
    return () => clearInterval(id);
  }, []);
  return <span data-clock="">{now}</span>;
}
