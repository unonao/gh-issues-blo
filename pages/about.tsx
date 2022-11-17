import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const SectionBox = styled(Box)({
  padding: "20px 0px",
});

const About = () => {
  return (
    <section>
      <SectionBox>
        <Typography variant="h2" component="h1">
          LAIME の活動
        </Typography>

        <Typography>主な活動として</Typography>
        <ul>
          <li>勉強会・輪読会</li>
          <li>Kaggle・Signateのコンペティション参加</li>
          <li>LAIME内コンペの開催と参加</li>
        </ul>
        <Typography>などを行っています。</Typography>
        <br />
        <Typography>
          Slack上での意見交換も活発に行っており、最先端の知識やプログラミング技術の共有がなされています。
          また、学生のみならず現役の医師やエンジニアから多方面のアドバイスも受けることができます。
        </Typography>
      </SectionBox>
      <SectionBox>
        <Typography variant="h2" component="h1">
          勉強会・輪読会
        </Typography>

        <Typography>
          学生の持ち回りで機械学習技術や過去に開催されたKaggleのコンペの勉強会を行ったり、輪読会を開催したりしています。
        </Typography>
        <Typography>
          特に、Kaggleの過去コンペの勉強会では、過去のコンペを振り返ることで上位入賞者がどんな工夫をしたかや参加者がどんな議論をしていたかをコミュニティ内で共有し、次に別のコンペに参加する際に役立つ知識を得ることを目指します。
        </Typography>
        <Typography></Typography>
        <br />
        <Typography>
          勉強会の資料例：
          <a href="https://www.kaggle.com/c/shopee-product-matching">
            Shopee - Price Match Guarantee
          </a>
        </Typography>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQdgXhpaco5raXF4-vd_ucsCv7euNgpAvfU7ZVQa8jgrSSU8i2iilBm37Ga15c50g/embed?start=false&amp;loop=false&amp;delayms=3000"
          width="480"
          height="299"
        ></iframe>
      </SectionBox>
      <SectionBox>
        <Typography variant="h2" component="h1">
          Kaggle・Signate
        </Typography>
        <Typography>
          LAIMEではメンバーにKaggleと呼ばれる世界的な機械学習のコンペティションサイトで、コンペに参加することを推奨しています。
        </Typography>
        <Typography>
          書籍からでは得られない最先端の技術とその応用方法を身につけるのが狙いです。
        </Typography>
        <Typography>LAIMEのメンバー内でチームを組むこともあります。</Typography>
      </SectionBox>
      <SectionBox>
        <Typography variant="h2" component="h1">
          LAIME内コンペ
        </Typography>
        <Typography>
          不定期にですが賞金を設けた機械学習コンペティション(以下コンペ)を、不定期に開催しており以下の特徴があります。
        </Typography>
        <ul>
          <li>LAIMEメンバーによる開催・運営</li>
          <li>LAIMEメンバー限定参加</li>
          <li>上位入賞者・有益なコメントを共有した方への賞金</li>
        </ul>
        <Typography>
          LAIME内での知見共有に加えて、問題作成能力を身につけるのが狙いです。コンペを作成することによって現状の課題を問題に落とし込む力をつけることができます。
        </Typography>
      </SectionBox>
    </section>
  );
};

export default About;
