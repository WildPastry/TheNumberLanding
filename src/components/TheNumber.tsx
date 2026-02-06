import { type JSX, useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const TheNumber: React.FC = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const getNextStep = (): number => {
      const roll = Math.random();

      if (roll < 0.5) {
        return 1;
      }
      if (roll < 0.75) {
        return 2 + Math.floor(Math.random() * 2);
      }
      if (roll < 0.9) {
        return 4 + Math.floor(Math.random() * 5);
      }

      return 9 + Math.floor(Math.random() * 12);
    };

    const getNextDelay = (step: number): number => {
      const fastBase = 120 + Math.random() * 300;
      const slowBase = 250 + Math.random() * 700;
      const base = step <= 2 ? fastBase : slowBase;
      const pauseChance = step >= 8 ? 0.6 : 0.35;
      const pause =
        Math.random() < pauseChance ? 1000 + Math.random() * 3000 : 0;

      return Math.round(base + pause);
    };

    const scheduleNext = () => {
      const step = getNextStep();
      const delay = getNextDelay(step);

      timeoutId = window.setTimeout(() => {
        if (cancelled) {
          return;
        }

        setValue((current) => current + step);
        scheduleNext();
      }, delay);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      if (timeoutId !== null) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, [runId]);

  const handleReset = () => {
    setValue(0);
    setRunId((current) => current + 1);
  };

  return (
    <section
      aria-label='The Number'
      className='flex flex-col items-center gap-4 mb-10'>
      <button
        aria-label='Reset the number'
        className='cursor-pointer text-flame hover:text-watermelon'
        onClick={handleReset}
        title='Reset the number'
        type='button'>
        <FaRegTrashAlt size={24} />
      </button>
      <h1 aria-live='polite' className='text-9xl'>
        {value}
      </h1>
    </section>
  );
};

export default TheNumber;
