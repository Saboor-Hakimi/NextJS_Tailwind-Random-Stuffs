import React, { useEffect } from "react";
import {
  FrequentlyBoughtTogether,
  RelatedProducts,
} from "@algolia/recommend-react";
import recommend from "@algolia/recommend";

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;

const indexName = "ASEEL_Medusa_Products";

const recommendClient = recommend(APP_ID, API_KEY);

function RelatedItem({ item }) {
  // console.log(item);
  return (
    <div className="">
      <a href={"http://aseelapp.com/en_us/" + item.handle + ".html"}>
        <img src={item.thumbnail} alt={item.handle} height={300} width={300} />
        {/* <div>{item.category}</div> */}
        <div>{item.title}</div>
        {/* description */}
        {/* <div>{item.description}</div> */}
        <div>${item.variants[0].prices[0].amount / 100}</div>
      </a>
    </div>
  );
}

export default function Recommend({ currentObjectID }) {
  // console.log(currentObjectID);

  const [products, setProducts] = React.useState([]);
  // useEffect(() => {
  //   if (products == []) {
  //     setProducts({ success: true });
  //   }
  // });

  const [first, setFirst] = React.useState(true);

  function update() {
    if (first) {
      setFirst(false);
      return;
    } else {
      const target = document.getElementsByClassName("auc-Recommend-list")[0];
      target.classList.add("grid", "grid-cols-4", "gap-4", "grid-rows-1");
    }
  }

  return (
    <div className="">
      <RelatedProducts
        recommendClient={recommendClient}
        indexName={indexName}
        objectIDs={[currentObjectID]}
        itemComponent={RelatedItem}
      />

      {/* if first time set first to false */}
      {/* {update()} */}
    </div>
  );
}

// getStaticProps
export async function getStaticProps({ params }) {
  const currentObjectID = "4591222000";
  return {
    props: {
      currentObjectID,
    },
  };
}
