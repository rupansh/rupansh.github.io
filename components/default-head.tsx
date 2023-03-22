import { Head } from "$fresh/runtime.ts";
import { asset } from "$fresh/runtime.ts";

export default function DefaultHead() {
  return (
    <Head>
      <title>Rupansh</title>
      <link rel="stylesheet" href={asset("/fonts.css")} />
    </Head>
  );
}
