import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const SectionBox = styled(Box)({
  padding: "20px 0px",
});

const Contact = () => {
  return (
    <section>
      <SectionBox>
        <Typography variant="h2" component="h1">
          入会について
        </Typography>

        <Typography>
          この団体は学生間での学習の互助をサポートし、メンバーの自主性を重んじる方針で運営されているため、機械学習について勉強したいやる気のある学生の入会を募集しています。
        </Typography>
        <br />
        <Typography>必須条件：学生であること </Typography>
        <br />
        <Typography>
          入会希望の方は{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdc0fcmm8pJK-Wgk6jhGpjK7EnXoGqYGuKohkVJrkUyYZq3Ug/viewform?usp=sf_link">
            LAIME入会希望フォーム
          </a>
          に記入をお願いします。
        </Typography>
        <br />

        <Typography sx={{ fontWeight: "bold" }}>その他連絡先</Typography>

        <Typography>
          運営連絡先：inclass.comp[あっと]gmail.com
          <br /> (あっとのところを@にしてください)
          <br />
          入会希望の方は連絡をお願いします。{" "}
        </Typography>

        <br />
        <Typography>
          運営メンバー連絡先：<a href="https://twitter.com/634kami">@634kami</a>
        </Typography>
      </SectionBox>
    </section>
  );
};

export default Contact;
