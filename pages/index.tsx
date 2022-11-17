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

      <SectionBox>
        <Typography variant="h3" component="h2">
          実績
        </Typography>
        <ul>
          <li>Kaggle 累計メダル獲得 金2, 銀27, 銅24</li>
          <li>
            <a href="https://www.kaggle.com/c/birdclef-2021">
              Kaggle BirdCLEF 2021 - Birdcall Identification
            </a>
            にチームで参加し優勝
            <ul>
              <li>
                <a href="https://speakerdeck.com/startjapan/birdclef2021matome">
                  コンペに関するまとめ資料
                </a>
              </li>
              <li>
                <a href="https://qiita.com/kami634/items/36fb395c21fb6f5919b9">
                  優勝解法の記事
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </SectionBox>

      <SectionBox>
        <Typography variant="h3" component="h2">
          メンバー
        </Typography>
        <Typography>
          活動はほとんどオンラインのため、全国の様々な学生が在籍しています。
        </Typography>
        <Typography>
          現在のメンバーは、東大・東工大を始めとした情報系学生に加えて、医学部の学生など合わせて20名以上おり、Kaggleや競技プログラミングなどで優秀な成績を収めた学生も多数在籍しています。
        </Typography>
        <ul>
          <li>Kaggle Competition Master 2名在籍</li>
          <li>Red Coder 1名在籍</li>
        </ul>
      </SectionBox>

      <SectionBox>
        <Typography variant="h3" component="h2">
          スポンサー
        </Typography>
        <Typography>
          スポンサーとして賞金などの後方支援を株式会社MNESが行っています。
        </Typography>
        <Typography>
          医療と現代技術の関わりが少ない今日、医療系学生と情報系学生のコミュニティがその発展につながることを期待しています。
        </Typography>
        <Typography>
          スポンサー：<a href="https://mnes.life/">株式会社エムネス</a>
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
