import Link from "next/link";

type Props = {
  position: string;
  company: string;
  startYear: string;
  endYear: string;
  productionLink?: string;
  description: string;
  productionLinkText: string;
};

const WorkExperienceItem = ({
  position,
  company,
  startYear,
  endYear,
  productionLink,
  description,
  productionLinkText,
}: Props) => {
  return (
    <div className="relative pl-8 md:grid md:grid-cols-[1fr,2fr] gap-6 group">
      <div className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 bg-zinc-800 border border-zinc-600 group-hover:bg-accent-tech group-hover:border-accent-tech transition-colors shadow-[0_0_0_4px_#09090b]" />
      <div className="flex flex-col mb-2 md:mb-0 mt-0.5">
        <h3 className="text-lg font-semibold text-zinc-100">{position}</h3>
        <h4 className="text-base text-zinc-400">{company}</h4>
        <time className="font-mono text-xs text-zinc-500 mt-2">
          {`${startYear} - ${endYear}`}
        </time>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-zinc-400 leading-relaxed text-sm/6">{description}</p>
      </div>
      {productionLink && (
        <div className="flex flex-col gap-3">
          <p className="text-zinc-400 leading-relaxed text-sm/6">
            {productionLinkText}
          </p>

          <Link
            href={productionLink}
            className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md text-sm text-zinc-300 font-medium transition-colors"
            rel="noopener noreferrer"
            target="_blank"
          >
            {productionLink}
          </Link>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceItem;
