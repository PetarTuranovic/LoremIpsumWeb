const intersection = () => {
  const elements = document.querySelectorAll(".js-observe");
  console.log(123);
  const animate = (el) => {
    el.classList.add("show");
  };

  const myObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        animate(entry.target);

        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -100px  0px",
    }
  );

  elements.forEach((el) => {
    myObserver.observe(el);
  });
};
intersection();
