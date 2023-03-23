import algoliasearch from "algoliasearch/lite";
import {
  Configure,
  Highlight,
  Hits,
  InstantSearch,
  Pagination,
  RefinementList,
  SearchBox,
} from "react-instantsearch-hooks-web";

import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";

// import { SearchBox } from "react-instantsearch-dom";

const APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;

const searchClient = algoliasearch(APP_ID as string, API_KEY as string);

export default function Search() {
  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName="ASEEL_Medusa_Products"
      >
        {/* <SearchBox /> */}
        <CustomSearchBox />
        {/* <Hits /> */}

        {/* <CustomHits /> */}
      </InstantSearch>
    </>
  );
}
