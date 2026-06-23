import Image from "next/image";

type Props = {
  dict: {
    title: string;
    p1: string;
    p2Start: string;
    p2Bold: string;
    p2End: string;
    p3Start: string;
    p3Bold: string;
    p3Aux: string;
    p4Bold: string;
    p4End: string;
  };
};

const AboutMe = ({ dict }: Props) => {
  return (
    <section id="about-me" className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold text-zinc-100 flex items-center justify-center gap-3">
        <span className="text-accent-tech">/</span> {dict.title}
        <span className="text-accent-tech">\</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1 flex flex-col gap-5 text-zinc-400 text-sm/6 leading-relaxed">
          <p>{dict.p1}</p>
          <p>
            {dict.p2Start}
            <strong className="text-zinc-200 font-medium">{dict.p2Bold}</strong>
            {dict.p2End}
          </p>
          <p>
            {dict.p3Start}
            <strong className="text-accent-tech font-medium">
              {dict.p3Bold}
            </strong>
            {dict.p3Aux}
            <strong className="text-accent-tech font-medium">
              {dict.p4Bold}
            </strong>
            {dict.p4End}
          </p>
        </div>
        <div className="w-48 shrink-0 flex flex-col gap-3 mx-auto md:mx-0">
          <div className="aspect-4/5 bg-zinc-900 border border-zinc-800 rounded-md p-2 shadow-xl shadow-black/40">
            <div className="relative w-full h-full bg-zinc-800 rounded overflow-hidden flex items-center justify-center">
              <Image
                src="/about-me.png"
                alt="Foto_2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
