import { cardInfos } from "../data/index.js";

export default function Testimonials() {
  return (
    <section className="font-spartan w-full h-auto bg-[url(`../assets/images/bg-pattern-bottom-mobile.svg`)] sm:bg-[url(`../assets/images/bg-pattern-bottom-mobile.svg`)] bg-bottom-right bg-no-repeat bg-cover">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardInfos.map((cardInfo, index) => (
          <div
            key={cardInfo.id}
            className={`
              bg-very-dark-magenta max-w-96 h-auto rounded-xl py-8 sm:py-11 md:py-12 px-6.5 sm:px-9.5 md:px-10 space-y-6 styck sm:relative mx-auto sm:mx-0 
              ${index === 1 ? "top-0 lg:top-3" : ""} 
              ${index === 2 ? "top-0 lg:top-6" : ""}
            `}
          >
            <div className="flex items-center justify-start gap-6">
              <img
                src={cardInfo.image}
                alt={`Photo of ${cardInfo.name}`}
                className="w-11 h-auto rounded-full my-auto"
              />
              <div className="flex flex-col">
                <strong className="font-bold text-light-grayish-magenta text-xl">
                  {cardInfo.name}
                </strong>
                <span className="text-soft-pink text-lg">{cardInfo.role}</span>
              </div>
            </div>
            <div className="text-light-grayish-magenta text-lg">
              " {cardInfo.description} "
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// w352 h236
