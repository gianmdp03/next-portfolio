const AboutMe = () => {
  return (
    <section id="sobre-mi" className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold text-zinc-100 flex items-center justify-center gap-3">
        <span className="text-accent-tech">/</span> Acerca de mí
        <span className="text-accent-tech">\</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1 flex flex-col gap-5 text-zinc-400 text-sm/6 leading-relaxed">
          <p>
            Mi interés por la programación nace de la necesidad de entender cómo
            fluyen y se protegen los datos. Disfruto de estructurar bases
            sólidas y asegurarme de que la lógica de negocio no tenga fisuras
            antes de volcar todo al cliente.
          </p>
          <p>
            Me siento cómodo diseñando soluciones donde
            <strong className="text-zinc-200 font-medium">
              la persistencia de la información es crítica
            </strong>
            . Presto especial atención a los detalles silenciosos pero
            fundamentales, como el manejo adecuado de logs para monitorear el
            comportamiento de las aplicaciones en entornos reales.
          </p>
          <p>
            Actualmente estoy desarrollando interfaces fluidas con
            <strong className="text-accent-tech font-medium">
              Next.js y Tailwind CSS
            </strong>
            , integrándolas con mis APIs para entregar productos completos y
            escalables.
          </p>
        </div>
        <div className="w-48 shrink-0 flex flex-col gap-3 mx-auto md:mx-0">
          <div className="aspect-4/5 bg-zinc-900 border border-zinc-800 rounded-md p-2 shadow-xl shadow-black/40">
            <div className="w-full h-full bg-zinc-800 rounded flex items-center justify-center grayscale">
              <span className="text-xs text-zinc-600">Foto_2.jpg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
