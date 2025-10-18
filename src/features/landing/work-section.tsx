import * as motion from "motion/react-client";
import type * as React from "react";

type Work = {
  title: string;
  tags: string;
  image: string;
  url: string;
};

const works: Work[] = [
  {
    title: "Automatic Nation",
    tags: "Landing page, Design & development",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1742194102456/4a0d3032-0850-4b15-a224-bf3b28fad889.webp",
    url: "https://automaticnation.com",
  },
  {
    title: "Guna Transport",
    tags: "Transportation, Design & development",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1742194112744/f49f3583-86cb-458e-b990-fc76e7ab6873.webp",
    url: "https://www.gunatransport.com",
  },
];

function WorkItem({ work }: { work: Work }): React.ReactElement {
  const { title, tags, image, url } = work;

  return (
    <a
      className="group hover:-translate-y-2 group relative flex w-full flex-col rounded-2xl p-3 pb-5 transition-all duration-300"
      href={url}
      target="_blank"
    >
      <div className="relative h-[220px] tablet:h-[420px] w-full overflow-hidden rounded-xl">
        <img
          alt={title}
          className="durat700 h-full w-full object-cover transition-all group-hover:scale-105"
          src={image}
        />
      </div>

      <h3 className="mt-6 font-medium text-lg">{title}</h3>
      <span className="mt-2 text-foreground/60 text-sm">{tags}</span>
    </a>
  );
}

export function WorkSection(): React.ReactElement {
  return (
    <motion.section
      className="flex flex-col items-center py-20"
      id="works"
      initial={{ opacity: 0, y: 200 }}
      transition={{
        type: "spring",
        damping: 8,
        stiffness: 60,
        ease: "easeInOut",
        duration: 1.2,
      }}
      viewport={{ once: true, margin: "0% 0% -30% 0%" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <span className="font-heading font-medium text-foreground/40 text-sm">
        Works
      </span>

      <h2 className="mt-8 text-center font-heading font-semibold text-4xl leading-tight">
        We partner with big
        <br />
        ambitions teams
      </h2>

      <div className="mt-16 flex tablet:w-10/12 w-full flex-col items-center gap-12">
        {works.map((work, index) => (
          <WorkItem key={index} work={work} />
        ))}
      </div>
    </motion.section>
  );
}
