import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import Logo from "./Logo";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title?: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title ? title : <Logo />}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link key={section.title} href={section.url}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
