import { type JSX, useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const TheNumber: React.FC = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let cancelled: boolean = false;

    /**
     * Generates the next step in the sequence, based on a random number.
     * The probability distribution is as follows:
     *   - 50% chance of returning 1
     *   - 25% chance of returning either 2 or 3
     *   - 15% chance of returning a number between 4 and 8
     *   - 10% chance of returning a number between 9 and 20
     * @returns {number} The next step in the sequence
     */
    const getNextStep = (): number => {
      const roll: number = Math.random();

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

    /**
     * Returns a delay in milliseconds to wait before scheduling the next step in the sequence.
     * The delay is randomly generated based on the step number, with smaller steps having shorter delays
     * and larger steps having longer delays. There is also a chance for the sequence to pause for a longer
     * period of time, with larger steps being more likely to pause. The exact delay is not predictable and
     * will vary between runs of the sequence.
     * @param {number} step - The step number in the sequence.
     * @returns {number} The delay in milliseconds to wait before scheduling the next step.
     */
    const getNextDelay = (step: number): number => {
      const fastBase: number = 120 + Math.random() * 300;
      const slowBase: number = 250 + Math.random() * 700;
      const base: number = step <= 2 ? fastBase : slowBase;
      const pauseChance: number = step >= 8 ? 0.6 : 0.35;
      const pause: number =
        Math.random() < pauseChance ? 1000 + Math.random() * 3000 : 0;

      return Math.round(base + pause);
    };

    /**
     * Schedules the next step in the sequence, by calling getNextStep()
     * and getNextDelay() to determine the step and delay, and then
     * scheduling a setTimeout() to call itself again after the delay.
     * If the sequence is cancelled, this function does nothing.
     */
    const scheduleNext = (): void => {
      const step: number = getNextStep();
      const delay: number = getNextDelay(step);

      timeoutId = globalThis.setTimeout(() => {
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
    // Effect listening to changes in runId
  }, [runId]);

  /**
   * Resets the number to 0 and increments the runId by 1
   */
  const handleReset = (): void => {
    setValue(0);
    setRunId((current: number) => current + 1);
  };

  return (
    <section
      aria-label='The Number'
      className='flex flex-col items-center gap-4 mb-10'>
      <button
        aria-label='Reset the number'
        className='cursor-pointer text-(--accent) hover:text-watermelon'
        onClick={handleReset}
        title='Reset the number'
        type='button'>
        <FaRegTrashAlt size={24} />
      </button>
      <h1 aria-live='polite' className='text-9xl'>
        {value.toLocaleString()}
      </h1>
      <h5 className='font-outfit-bold text-(--fg) text-3xl'>Days</h5>
    </section>
  );
};

export default TheNumber;
