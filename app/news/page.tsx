import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";
import Pagination from "../_components/Pagination";
import Searchfield from "../_components/SearchField";
import { NEWS_LIST_LIMIT } from "../_constants";

export const revalidate = 60;

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
            <Searchfield />
            <NewsList news={news} />
            <Pagination totalCount={totalCount} />
        </>
    )
}