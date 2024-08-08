import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="grid gap-10 md:grid-cols-3 py-20 px-4 md:px-0 items-center">
      <div className="col-span-2 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">
          Hey, I&apos;m Shrestha{" "}
          <span className="text-primary text-base font-light">/human.pra/</span>
        </h1>
        <p className="text-base text-muted-foreground">
          I am Web Developer From Tokyo, Japan. I am passionate about Web
          Designing. I have rich experience in Magento, and Web Development. I
          love to talk with you about our unique idea.
        </p>
      </div>
      <div className="col-span-1 w-full flex items-center justify-center rounded-md overflow-hidden">
        <Image
          src={"/assets/profile1.png"}
          alt="Shrestha Pradhuman"
          width={250}
          height={250}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
