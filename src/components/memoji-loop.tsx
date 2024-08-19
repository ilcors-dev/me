"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const memojis = [
  "/memojis/058b92c00cb39cdadf6192f6db37a4da-sticker.png",
  "/memojis/7e539d2c025d7d4e48fbd6607da77b48-sticker.png",
  "/memojis/b2f03f058001bcabe4b24cd5b6c6d321-sticker.png",
  "/memojis/24f136ebeab817617b503fe730af8fa5-sticker.png",
  "/memojis/9a2a9aa32c8820281566189ab38fa9eb-sticker.png",
  "/memojis/c98d4fd3cdf9fa6752daa8ad60280f5a-sticker.png",
  "/memojis/3b2d06327087776c55b5fa7de517c39c-sticker.png",
  "/memojis/9c78370648e50eddab99180964c833df-sticker.png",
  "/memojis/f128b4c81bcb6347608b7dd436dd3282-sticker.png",
];

const MemojiLoop: React.FC = () => {
  const [currentMemoji, setCurrentMemoji] = useState<string>(memojis[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMemoji(memojis[Math.floor(Math.random() * memojis.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      id="memoji"
      alt="logo"
      src={currentMemoji}
      width={128}
      height={128}
      className="object-cover transition-all duration-500 ease-in-out sm:h-[136px] sm:w-[136px] lg:h-[172px] lg:w-[172px]"
    />
  );
};

export default MemojiLoop;
