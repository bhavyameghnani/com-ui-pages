// src/components/MainFeature.js
import React from "react";
import { Parallax } from "react-parallax";
import { Box, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

const MainFeature = () => {
  return (
    <Parallax
      bgImage="https://i.etsystatic.com/40203455/r/il/db77a9/4596047913/il_fullxfull.4596047913_fknx.jpg"
      strength={500}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Typography variant="h2" component="h1">
          <Typewriter
            words={[
              "Simplify your tasks",
              "Empowering strategies",
              "Navigating Together",
              "タスクを簡素化する",
              "力を与える戦略",
              "一緒にナビゲートする",
              "Discover more ...",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Typography>
      </Box>
    </Parallax>
  );
};

export default MainFeature;
