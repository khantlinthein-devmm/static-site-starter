import siteConfig from "@/lib/siteConfig";
import Head from "next/head";

export default function SEO({ title }: { title: string }) {
  return (
    <Head>
      <title>
        {title} | {siteConfig.name}
      </title>
      <meta name="description" content={siteConfig.description} />
      <link rel="icon" href={siteConfig.logo} />
    </Head>
  );
}
