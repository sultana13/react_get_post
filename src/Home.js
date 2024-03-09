import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section class="Links-container">
      <link href="login">LOGIN</link>
      <br />
      <br />
      <Link href="registration">REGISTER</Link>
    </section>
  );
}
