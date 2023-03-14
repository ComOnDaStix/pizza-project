import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
import Head from "next/head";
import Image from "next/image";





export default function Home() {
  return (
    <div>
      <Head>
        <Head>
          <title>Pizza Restaurant in Newyork</title>
          <meta name="description" content="Best pizza shop in town" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
