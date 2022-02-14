import TypeAnimation from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      cursor={true}
      sequence={[
        "Hi Kimmi...",
        1500,
        "Happy Valentine's Day!",
        1500,
        "I'm sorry I couldn't be there with you today :(",
        1500,
        "So here's a Shakespeare sonnet for you, recited the best way I know how to...",
        1500,
        "Will you be my Valentines? <3 (next week)",
        3000,
      ]}
      wrapper="h3"
      repeat={1}
    />
  );
};

export default TypeWriter;

// who would have thought... the here and now
// who would have thought... I can't explain how
// Everything that happened just felt very natural
//
