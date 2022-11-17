import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";

const siteTitle = process.env.title ? process.env.title : "LAIME";

const sections = [
  { title: "トップ", url: "/" },
  { title: "記事一覧", url: "articles" },
  { title: "活動内容", url: "about" },
  { title: "連絡先・入会申し込み", url: "contact" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Container maxWidth="lg">
        <Header title={siteTitle} sections={sections} />
        <main>{children}</main>
      </Container>

      <Footer
        title={siteTitle}
        description="LAIMEは機械学習の勉強を互助する学生団体です"
      />
    </>
  );
}
