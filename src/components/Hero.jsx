import starIcon from "../assets/images/icon-star.svg";

export const Hero = () => {
  return (
    <section className="font-spartan w-full h-auto flex items-center justify-between gap-10 lg:gap-0 flex-col lg:flex-row bg-[url(`../assets/images/bg-pattern-top-mobile.svg`)] sm:bg-[url(`../assets/images/bg-pattern-top-desktop.svg`)] bg-top-left bg-no-repeat bg-cover">
      <div className="max-w-full lg:max-w-md space-y-6 sm:space-y-4">
        <h1 className="font-bold text-4xl/7 md:text-6xl text-very-dark-magenta text-center lg:text-start max-w-78 sm:max-w-full lg:max-w-auto mx-auto sm:mx-0">
          Mais de 10.000 usuários adoram nossos produtos.
        </h1>
        <p className="font-medium text-lg/6 text-dark-grayish-magenta text-center lg:text-start mx-auto sm:mx-0">
          Nós fornecemos apenas ótimos produtos combinados com um excelente
          atendimento ao cliente. Veja o que nossos clientes satisfeitos estão
          dizendo sobre nossos serviços.
        </p>
      </div>
      <div className="w-full lg:w-auto space-y-4">
        <div className="flex items-center justify-center lg:justify-start flex-col lg:flex-row gap-2 lg:gap-4 space-x-7 bg-light-grayish-magenta py-4 px-6 sm:px-8 rounded-lg styck lg:relative right-0 lg:right-24">
          <div className="flex items-center justify-center gap-2 mx-auto lg:mx-0">
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
          </div>
          <span className="font-bold text-very-dark-magenta text-center">
            Avaliado com 5 estrelas em Reviews.
          </span>
        </div>
        <div className="flex items-center justify-center lg:justify-start flex-col lg:flex-row gap-2 lg:gap-4 space-x-7 bg-light-grayish-magenta py-4 px-6 sm:px-8 rounded-lg styck lg:relative right-0 lg:right-12">
          <div className="flex items-center justify-center gap-2 mx-auto lg:mx-0">
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
          </div>
          <span className="font-bold text-very-dark-magenta text-center">
            Avaliado com 5 estrelas no Report Guru
          </span>
        </div>
        <div className="flex items-center justify-center lg:justify-start flex-col lg:flex-row gap-2 lg:gap-4 space-x-7 bg-light-grayish-magenta py-4 px-6 sm:px-8 rounded-lg">
          <div className="flex items-center justify-center gap-2 mx-auto lg:mx-0">
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
            <img src={starIcon} alt="Star Icon" />
          </div>
          <span className="font-bold text-very-dark-magenta text-center">
            Avaliado com 5 estrelas pela BestTech
          </span>
        </div>
      </div>
    </section>
  );
};
