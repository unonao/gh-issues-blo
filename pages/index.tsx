import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

type Props = {
  issues: Array<Issue>;
};

type Issue = any;

const Home: NextPage<Props> = () => {
  return (
    <>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Grid item xs={12} md={9}>
          <Typography>
            LAIMEは国内の情報系学生&医学生を中心とした機械学習の勉強コミュニティです。
            機械学習に興味がある情報系学生あるいはMedtechに興味がある医学生などが全国から集まり、主にslack,
            zoom, google meet,
            gatherなどを使用して共に勉強会、コンペなどを開催しています。
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>サイドバー</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
