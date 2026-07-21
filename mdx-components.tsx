import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-4" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-3" {...props} />
    ),
    p: (props) => <p className="text-lg leading-relaxed text-slate-600 mb-6" {...props} />,
    a: (props) => <a className="text-[#ff4e33] underline hover:no-underline" {...props} />,
    ul: (props) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-600" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-600" {...props} />,
    li: (props) => <li className="leading-relaxed" {...props} />,
    strong: (props) => <strong className="font-semibold text-slate-900" {...props} />,
    ...components,
  };
}
