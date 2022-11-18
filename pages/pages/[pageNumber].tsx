import type { NextPage } from "next";
import Link from "next/link";
import { listIssues, type Issue } from "../../lib/issue";
import Time from "../../components/Time";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

type Props = {
  issues: Array<Issue>;
  pageNumber: number;
  totalPageNumber: number;
};

const PER_PAGE = 10;

const PageList: NextPage<Props> = ({ issues, pageNumber, totalPageNumber }) => {
  return (
    <section>
      <ol className="flex flex-col gap-12">
        {issues.map((issue) => (
          <li key={issue.number}>
            <Time dateTime={issue.created_at} />
            <Link href={`/articles/${issue.number}`}>{issue.title}</Link>
          </li>
        ))}
      </ol>

      <Stack spacing={2}>
        <Pagination
          count={totalPageNumber}
          defaultPage={pageNumber}
          shape="rounded"
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              href={`/pages/${item.page}`}
              {...item}
            />
          )}
        />
      </Stack>
    </section>
  );
};

export default PageList;

export async function getStaticPaths() {
  const issues = await listIssues();
  const issuesLength = issues.length;
  const totalPageNum = Math.ceil((issuesLength + 1) / PER_PAGE);
  let paths = [];
  for (let i = 1; i <= totalPageNum; i++) {
    paths.push({
      params: {
        pageNumber: i.toString(),
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const pageNumber = parseInt(params.pageNumber, 10);

  const issues = await listIssues();
  const issuesLength = issues.length;
  const totalPageNumber = Math.ceil((issuesLength + 1) / PER_PAGE);

  const startIndex = (pageNumber - 1) * PER_PAGE;
  const endIndex = Math.min(startIndex + PER_PAGE, issuesLength);

  const issuesInThisPage = issues
    .sort((a: Issue, b: Issue) => {
      return b.number - a.number;
    }) // issue 番号 降順にソート
    .slice(startIndex, endIndex); // 表示する要素をスライス

  return {
    props: {
      issues: issuesInThisPage,
      pageNumber,
      totalPageNumber,
    },
  };
}
