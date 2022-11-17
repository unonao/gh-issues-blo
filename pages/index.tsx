import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const SectionBox = styled(Box)({
  padding: "20px 0px",
});

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = () => {
  return (
    <section>
      <SectionBox>
        <Typography variant="h2" component="h1">
          LAIME とは
        </Typography>
        <Typography>
          LAIME (Leaders of AI & MEdicine)
          は国内の情報系学生&医学生を中心とした機械学習の勉強コミュニティです。
        </Typography>
        <Typography>
          機械学習に興味がある情報系学生あるいはMedtechに興味がある医学生などが全国から集まり、主にSlack,
          zoom, google meet,
          gatherなどのツールを使用してオンラインで共に勉強会、inclass
          コンペなどを開催しています。
        </Typography>
      </SectionBox>

      <SectionBox>
        <Typography variant="h3" component="h2">
          団体理念
        </Typography>

        <ul>
          <li>各個人のプログラミング能力を向上させること</li>
          <li>メンバー間でのとの交流を深めること</li>
        </ul>
        <Typography>
          各個人のプログラミング能力を向上させるというのは、具体的にはkaggleを通してPytorchやTensor
          Flow等の使い方をはじめ、機械学習周辺のライブラリを使いこなせるようになることを目指します。
        </Typography>
        <Typography>
          LAIMEでの勉強会企画、招待制コンペの開催などに関してはこの理念を念頭に置いています。
        </Typography>

        <Typography>
          次に、LAIME内ののメンバーとの交流を深めてもらうことが挙げられます。
        </Typography>
        <Typography>
          PCとインターネット環境があれば物理的距離の問題こそ解消されますが、開発者同士の心理的距離が埋まらなければアイデアは生まれず開発は始まりません。LAIMEでは一度知り合った人とは連絡をとり続け、いつか誰かが新しいことを始めるときに他の誰かにすぐサポートを頼めるような人的ネットワークを作ることを目指します。
        </Typography>
      </SectionBox>
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
