
import { PrismaClient } from "@prisma/client";
import { useState } from "react";

import Header from './components/Header';

export default function Home() {

  const [text, fun] = useState();
  

  

  return (
    <>
      <Header />
    </>
  ) }