import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-12 px-8 py-20 bg-white dark:bg-black sm:items-start">

        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* Text Section */}
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js"
              className="font-medium text-black hover:underline dark:text-white"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-black hover:underline dark:text-white"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-5 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-300 sm:w-40"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-300 px-5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900 sm:w-40"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}