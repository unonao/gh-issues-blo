import type { NextPage } from "next";
import { Typography } from "@mui/material";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = () => {
  return (
    <section>
      <Typography>
        LAIMEは国内の情報系学生&医学生を中心とした機械学習の勉強コミュニティです。
        機械学習に興味がある情報系学生あるいはMedtechに興味がある医学生などが全国から集まり、主にslack,
        zoom, google meet,
        gatherなどを使用して共に勉強会、コンペなどを開催しています。
      </Typography>
    </section>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
