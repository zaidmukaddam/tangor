export default function LearnMore() {
  return (
    <div className="flex h-screen px-4 pt-32">
      <div className="max-w-3/4 mx-auto px-10">
        <h1 className="mt-4 text-2xl font-black leading-8 tracking-tight 2xl:text-5xl">
          What's Tangor?
        </h1>
        <p className="mx-auto mt-4 mb-14 text-2xl text-neutral-600 dark:text-neutral-300">
          A place to save your thoughts and ideas. Add{' '}
          <span className="mx-[1px] rounded bg-rose-200/70 p-[1px] font-mono text-rose-800 dark:bg-rose-500/70 dark:text-rose-200">
            notes
          </span>
          {', '}
          <span className="mx-[1px] rounded bg-sky-200/70 p-[1px] font-mono text-sky-800 dark:bg-sky-500/70 dark:text-sky-200">
            tasks
          </span>
          {', or '}
          <span className="mx-[1px] rounded bg-emerald-200/70 p-[1px] font-mono text-emerald-800 dark:bg-emerald-500/70 dark:text-emerald-200">
            bookmarks
          </span>{' '}
          throughout the day.
        </p>

        <h1 className="mt-4 text-2xl font-black leading-8 tracking-tight 2xl:text-5xl">
          How do I use shortcuts?
        </h1>
        <p className="mx-auto mt-4 text-2xl text-neutral-600 dark:text-neutral-300">
          Enter{' '}
          <span className="mx-[1px] rounded bg-yellow-200/70 p-[1px] font-mono text-yellow-700 dark:bg-yellow-500/70 dark:text-yellow-100">
            Command + K
          </span>{' '}
          or (or Control + K on Windows) to access the Command Palette from any
          page.
        </p>
        <p className="mx-auto mt-2 mb-14 text-2xl text-neutral-600 dark:text-neutral-300">
          Use global keyboard shortcuts (like{' '}
          <span className="mx-[1px] rounded bg-yellow-200/70 p-[1px] font-mono text-yellow-700 dark:bg-yellow-500/70 dark:text-yellow-100">
            B
          </span>{' '}
          for a new bookmark or{' '}
          <span className="mx-[1px] rounded bg-yellow-200/70 p-[1px] font-mono text-yellow-700 dark:bg-yellow-500/70 dark:text-yellow-100">
            T
          </span>{' '}
          for a new task) for quick entries.
        </p>

        <h1 className="mt-4 text-2xl font-black leading-8 tracking-tight 2xl:text-5xl">
          Questions or feedback?
        </h1>
        <p className="mx-auto mt-4 text-2xl text-neutral-600 dark:text-neutral-300">
          <strong>{'Twitter: '}</strong>
          <a
            href="https://twitter.com/tangor_help"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[1px] rounded bg-neutral-200/70 p-[1px] px-2 hover:bg-neutral-300/70 dark:bg-neutral-700/70 dark:hover:bg-neutral-600/70"
          >
            {`@tangor_help`}
          </a>
        </p>
        <p className="mx-auto mt-2 mb-14 text-2xl text-neutral-600 dark:text-neutral-300">
          <strong>{'Email: '}</strong>
          <a
            href="mailto:hello@tangor.today"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[1px] rounded bg-neutral-200/70 p-[1px] px-2 hover:bg-neutral-300/70 dark:bg-neutral-700/70 dark:hover:bg-neutral-600/70"
          >
            {`hello@tangor.today`}
          </a>
        </p>

        <h1 className="mt-4 text-2xl font-black leading-8 tracking-tight 2xl:text-5xl">
          Who made it?
        </h1>
        <p className="mx-auto mt-4 text-2xl text-neutral-600 dark:text-neutral-300">
          Built by{' '}
          <a
            href="https://zaidmukaddam.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-1 hover:no-underline"
          >
            {`Zaid`}
          </a>
          {' ✌️'}
        </p>
        <div className="absolute mx-auto mt-14 w-fit pb-24 text-2xl text-neutral-600 dark:text-neutral-300">
          {/* <a
            href="https://www.producthunt.com/posts/tangor-4?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tangor&#0045;4"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=333198&theme=dark"
              alt="Tangor: A place to save your thoughts and ideas | Product Hunt"
              width="200"
              height="43"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}
