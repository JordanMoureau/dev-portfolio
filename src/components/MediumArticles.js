export default function MediumArticles() {
  const articles = [
    {
      title: "The Dumbest, Easiest Explanation of MVC You’ve Ever Read",
      description:
        "MVC — Model, View, Controller. A foundational principle for any full-stack developer. But what is? What really is? Let’s start with a metaphor. Think about a website like a real shop. Let’s say our shop sells pickles, pancakes, and sardines...",
      link: "https://medium.com/@jordanfromnovember/the-dumbest-easiest-explanation-of-mvc-youve-ever-read-d7042ec61599",
    },
    {
      title: "Video AutoPlay in iOS React.Js",
      description:
        "Having issues getting your hero video to play automatically on an iphone? I just read an article about a “solution” for this that involved about twenty lines of code, promises, and dangerously inset HTML...",
      link: "https://medium.com/@jordanfromnovember/video-autoplay-in-ios-react-js-0ee8ed919e5a",
    },
    {
      title: "How Custom Hooks work (usePartyMode) ✨ - beginner friendly",
      description:
        "Lets talk about custom hooks. React totally revolutionized the meaning of functional programming language when they introduced state management - think state of being. Happy or Sad, Asleep or Awake, Outside or Inside...",
      link: "https://medium.com/example3",
    },
    {
      title:
        "Why You’re Getting “Undefined” in React (Even Though You KNOW You Passed Your Props Correctly)",
      description:
        "You quadruple-checked. You console.logged the prop at every step. You KNOW you passed it correctly. And yet — when you try to use it? Undefined. Undefined. Undefined....",
      link: "https://medium.com/@jordanfromnovember/why-youre-getting-undefined-in-react-even-though-you-know-you-passed-your-props-correctly-5c2690e4860e",
    },
    {
      title:
        "Switch Statements Explained (With Boba, Courtrooms, and Rusty Code)",
      description:
        "Okay, we can admit that switch statements are a little overwhelming. If else logic is so comforting, but here’s a painful truth nobody wants to hear: If else statements are ugly...",
      link: "https://medium.com/@jordanfromnovember/switch-statements-explained-with-boba-courtrooms-and-rusty-code-dbfaa3940a1e",
    },
  ];

  return (
    <section className="py-12 m-5 scroll-mt-[40px]" id="articles">
      <h2 className="text-3xl font-bold">Medium Articles</h2>
      <p className="mb-6">Watch how I relate everything back to pickles 🥒</p>
      <ul className="space-y-4">
        {articles.map((article, index) => (
          <li
            key={index}
            className="p-6 text-left pb-10 border-b border-accent relative"
          >
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p className="mt-2">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4  right-4 text-accent font-bold hover:underline"
            >
              Read More →
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a
          href="https://medium.com/@jordanfromnovember"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:underline text-accent font-bold py-2 px-4 rounded transition-all"
        >
          Check Out All My Medium Articles →
        </a>
      </div>
    </section>
  );
}
