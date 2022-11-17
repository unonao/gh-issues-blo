import { type ReactNode } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

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
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={8}>
              {children}
            </Grid>
            <Grid item xs={12} md={4}>
              <Sidebar />
            </Grid>
          </Grid>
        </main>
      </Container>

      <Footer
        title={siteTitle}
        description="LAIMEは機械学習の勉強を互助する学生団体です"
      />
    </>
  );
}
