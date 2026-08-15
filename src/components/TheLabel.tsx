import type { CSSProperties, JSX } from 'react';

/*
 * The mark is a two-part lockup, not a single word, and these are the sizes
 * the app sets it at (constants/responsive.ts). Everything below is derived
 * from this pair, so the two halves can only move together.
 */
const ONLY_SIZE: number = 27;
const NUMBERS_SIZE: number = 38;

/*
 * Cap height as a share of font size — shared with the app, where the same
 * ratio is what every ink measurement reasons about.
 */
const CAP_RATIO: number = 0.7;

/*
 * Baselines are aligned by the row below; caps are not the same height, so
 * ONLY rises by half the cap-height difference to sit dead-centre on Numbers'
 * capitals. Stated as a share of --mark, which carries Numbers' size, so the
 * offset tracks the type through every breakpoint.
 */
const CAP_OFFSET: number =
  (CAP_RATIO * (NUMBERS_SIZE - ONLY_SIZE)) / 2 / NUMBERS_SIZE;

/*
 * The gap between ONLY and Numbers: 4 units at the 27/38 scale. A layout
 * value, so unlike everything else here it does NOT scale with the type — at
 * the base size the mark sets, 4/38 of 6rem is 10px, and it stays 10px.
 */
const MARK_GAP: string = '0.625rem';

const Label: React.FC = (): JSX.Element => {
  /*
   * Barlow Condensed sets untracked. Named explicitly because the h1 rule in
   * index.css otherwise leaks Cubano's 0.5px onto it.
   */
  const onlyStyle: CSSProperties = {
    fontSize: `calc(var(--mark) * ${ONLY_SIZE} / ${NUMBERS_SIZE})`,
    letterSpacing: 'normal',
    transform: `translateY(calc(var(--mark) * ${-CAP_OFFSET}))`
  };

  const numbersStyle: CSSProperties = {
    fontSize: 'var(--mark)',
    /*
     * Cubano is tracked at −2/45 em at every size. Untracked Cubano is wrong
     * and looks it. An em, so it follows the font-size without restating.
     */
    letterSpacing: 'calc(-2em / 45)',
    /*
     * CSS puts letter-spacing after every glyph including the last, so the
     * negative tracking pulls the box in behind the final 's' and the ink
     * overhangs this right-aligned edge. Give that phantom back.
     */
    marginRight: 'calc(2em / 45)'
  };

  return (
    <div className='flex flex-col justify-end items-end mt-5 gap-1'>
      {/* Sub title */}
      <div className='bg-(--main-banner) py-2 px-3 max-600:py-1 max-600:px-2'>
        <h2 className='font-bebas text-(--bg) pt-1 text-4xl max-600:text-3xl max-400:text-2xl'>
          A date tracking app
        </h2>
      </div>
      {/* The mark. --mark is Numbers' size; ONLY is derived from it, so the
          breakpoints below are the only places a size is stated. */}
      <h1
        className='flex items-baseline justify-end [--mark:6rem] max-600:[--mark:4.5rem] max-400:[--mark:3.75rem] max-300:[--mark:3rem]'
        id='home-title'
        style={{ gap: MARK_GAP }}>
        <span
          className='font-barlow-condensed leading-none text-(--fg)'
          style={onlyStyle}>
          ONLY
        </span>
        <span
          className='font-cubano leading-none text-(--brand)'
          style={numbersStyle}>
          Numbers
        </span>
      </h1>
    </div>
  );
};

export default Label;
