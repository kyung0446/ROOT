function setCanvasImages() {
  let imgElem;
  for (let i = 0; i < sceneInfo[0].imgCount; i++) {
    imgElem = new Image();
    imgElem.src = `./images/seq_0/${i}.jpg`;
    sceneInfo[0].objs.videoImages.push(imgElem);
  }
  sceneInfo[0].objs.videoImages[0].onload = () => {
    sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
  };

  let imgElem2;
  for (let i = 0; i < sceneInfo[2].imgCount; i++) {
    imgElem2 = new Image();
    imgElem2.src = `./images/seq_2/${i}.jpg`;
    sceneInfo[2].objs.videoImages.push(imgElem2);
  }
  sceneInfo[2].objs.videoImages[0].onload = () => {
    sceneInfo[2].objs.context.drawImage(sceneInfo[2].objs.videoImages[0], 0, 0);
  };

  let imgElem3;
  for (let i = 0; i < sceneInfo[3].imgCount; i++) {
    imgElem3 = new Image();
    imgElem3.src = `./images/seq_3/${i}.jpg`;
    sceneInfo[3].objs.videoImages.push(imgElem3);
  }
  sceneInfo[3].objs.videoImages[0].onload = () => {
    sceneInfo[3].objs.context.drawImage(sceneInfo[3].objs.videoImages[0], 0, 0);
  };

  const heightRatio = window.innerHeight / 1080;
  sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
  sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
  sceneInfo[3].objs.canvas.style.transform = `scale(${heightRatio})`;
}
function drawCanvas3Rects(objs, values) {
  const widthRatio = document.body.offsetWidth / objs.canvas.width;
  const heightRatio = window.innerHeight / objs.canvas.height;

  if (widthRatio <= heightRatio) {
    // 캔버스보다 브라우저 창이 홀쭉한 경우
    values.canvasScaleRatio = heightRatio;
  } else {
    // 캔버스보다 브라우저 창이 납작한 경우
    values.canvasScaleRatio = widthRatio;
  }

  objs.canvas.style.transform = `scale(${values.canvasScaleRatio})`;
  objs.context.fillStyle = "white";
  objs.context.drawImage(objs.videoImages[0], 0, 0);

  // 캔버스 사이즈에 맞춰 가정한 innerWidth와 innerHeight
  const rectInnerWidth = document.body.offsetWidth / values.canvasScaleRatio;
  const rectInnerHeight = window.innerHeight / values.canvasScaleRatio;

  const whiteRectWidth = rectInnerWidth * 0.15;
  values.rectL[0] = (objs.canvas.width - rectInnerWidth) / 2;
  values.rectL[1] = values.rectL[0] - whiteRectWidth;
  values.rectR[0] = values.rectL[0] + rectInnerWidth - whiteRectWidth;
  values.rectR[1] = values.rectL[0] + whiteRectWidth;

  // 좌우 흰색 박스 그리기
  objs.context.fillRect(
    parseInt(values.rectL[0]),
    0,
    parseInt(whiteRectWidth),
    objs.canvas.height
  );
  objs.context.fillRect(
    parseInt(values.rectR[0]),
    0,
    parseInt(whiteRectWidth),
    objs.canvas.height
  );
}
function checkMenu() {
  if (yOffset > 44) {
    document.body.classList.add("nav-fixed");
  } else {
    document.body.classList.remove("nav-fixed");
  }
}

const setCurrentScene = () => {
  yOffset = window.pageYOffset;
  let total = 0;
  for (let i = 0; i < sceneInfo.length; i++) {
    total += sceneInfo[i].scrollHeight;
    if (total >= yOffset) {
      currentScene = i;
      break;
    }
  }
};

function setSecHeight() {
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].scrollHeight = sceneInfo[i].heightCnt * window.innerHeight;
    sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + "px";
  }
  setCurrentScene();
}

function partAniPlay(values, currentYOffset) {
  let rv;
  // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  const scrollRatio = currentYOffset / scrollHeight;

  if (values.length === 3) {
    // start ~ end 사이에 애니메이션 실행
    const partScrollStart = values[2].start * scrollHeight;
    const partScrollEnd = values[2].end * scrollHeight;
    const partScrollHeight = partScrollEnd - partScrollStart;

    if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
      rv =
        ((currentYOffset - partScrollStart) / partScrollHeight) *
          (values[1] - values[0]) +
        values[0];
    } else if (currentYOffset < partScrollStart) {
      rv = values[0];
    } else if (currentYOffset > partScrollEnd) {
      rv = values[1];
    }
  } else {
    rv = scrollRatio * (values[1] - values[0]) + values[0];
  }

  return rv;
}

function sectionAniPlay(prevHeight) {
  const objs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;
  const currentYOffset = yOffset - prevHeight;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  const scrollRatio = currentYOffset / scrollHeight;
  let seq;

  switch (currentScene) {
    case 0:
      //canvas
      seq = Math.round(partAniPlay(values.images_seq, currentYOffset));
      if (seq < 0) seq = 0;
      objs.context.drawImage(objs.videoImages[seq], 0, 0);

      objs.canvas.style.opacity = partAniPlay(
        values.canvas_opacity,
        currentYOffset
      );

      if (scrollRatio <= 0.22) {
        // in
        objs.messageA.style.opacity = partAniPlay(
          values.messageA_opacity_in,
          currentYOffset
        );
        objs.messageA.style.transform = `translate3d(0, ${partAniPlay(
          values.messageA_translateY_in,
          currentYOffset
        )}%, 0)`;
      } else {
        // out
        objs.messageA.style.opacity = partAniPlay(
          values.messageA_opacity_out,
          currentYOffset
        );
        objs.messageA.style.transform = `translate3d(0, ${partAniPlay(
          values.messageA_translateY_out,
          currentYOffset
        )}%, 0)`;
      }

      if (scrollRatio <= 0.42) {
        // in
        objs.messageB.style.opacity = partAniPlay(
          values.messageB_opacity_in,
          currentYOffset
        );
        objs.messageB.style.transform = `translate3d(0, ${partAniPlay(
          values.messageB_translateY_in,
          currentYOffset
        )}%, 0)`;
      } else {
        // out
        objs.messageB.style.opacity = partAniPlay(
          values.messageB_opacity_out,
          currentYOffset
        );
        objs.messageB.style.transform = `translate3d(0, ${partAniPlay(
          values.messageB_translateY_out,
          currentYOffset
        )}%, 0)`;
      }

      if (scrollRatio <= 0.62) {
        // in
        objs.messageC.style.opacity = partAniPlay(
          values.messageC_opacity_in,
          currentYOffset
        );
        objs.messageC.style.transform = `translate3d(0, ${partAniPlay(
          values.messageC_translateY_in,
          currentYOffset
        )}%, 0)`;
      } else {
        // out
        objs.messageC.style.opacity = partAniPlay(
          values.messageC_opacity_out,
          currentYOffset
        );
        objs.messageC.style.transform = `translate3d(0, ${partAniPlay(
          values.messageC_translateY_out,
          currentYOffset
        )}%, 0)`;
      }

      if (scrollRatio <= 0.82) {
        // in
        objs.messageD.style.opacity = partAniPlay(
          values.messageD_opacity_in,
          currentYOffset
        );
        objs.messageD.style.transform = `translate3d(0, ${partAniPlay(
          values.messageD_translateY_in,
          currentYOffset
        )}%, 0)`;
      } else {
        // out
        objs.messageD.style.opacity = partAniPlay(
          values.messageD_opacity_out,
          currentYOffset
        );
        objs.messageD.style.transform = `translate3d(0, ${partAniPlay(
          values.messageD_translateY_out,
          currentYOffset
        )}%, 0)`;
      }

      break;

    case 1:
      break;

    case 2:
      //canvas
      seq = Math.round(partAniPlay(values.images_seq, currentYOffset));
      if (seq <= 0) seq = 0;
      objs.context.drawImage(objs.videoImages[seq], 0, 0);

      if (scrollRatio <= 0.5) {
        // in
        objs.canvas.style.opacity = partAniPlay(
          values.canvas_opacity_in,
          currentYOffset
        );
      } else {
        // out
        objs.canvas.style.opacity = partAniPlay(
          values.canvas_opacity_out,
          currentYOffset
        );
      }

      if (scrollRatio <= 0.25) {
        // in
        objs.messageA.style.opacity = partAniPlay(
          values.messageA_opacity_in,
          currentYOffset
        );
        objs.messageA.style.transform = `translate3d(0, ${partAniPlay(
          values.messageA_translateY_in,
          currentYOffset
        )}%, 0)`;
      } else {
        // out
        objs.messageA.style.opacity = partAniPlay(
          values.messageA_opacity_out,
          currentYOffset
        );
        objs.messageA.style.transform = `translate3d(0, ${partAniPlay(
          values.messageA_translateY_out,
          currentYOffset
        )}%, 0)`;
      }

      if (scrollRatio <= 0.57) {
        // in
        objs.messageB.style.transform = `translate3d(0, ${partAniPlay(
          values.messageB_translateY_in,
          currentYOffset
        )}%, 0)`;
        objs.messageB.style.opacity = partAniPlay(
          values.messageB_opacity_in,
          currentYOffset
        );
        objs.pinB.style.transform = `scaleY(${partAniPlay(
          values.pinB_scaleY,
          currentYOffset
        )})`;
      } else {
        // out
        objs.messageB.style.transform = `translate3d(0, ${partAniPlay(
          values.messageB_translateY_out,
          currentYOffset
        )}%, 0)`;
        objs.messageB.style.opacity = partAniPlay(
          values.messageB_opacity_out,
          currentYOffset
        );
        objs.pinB.style.transform = `scaleY(${partAniPlay(
          values.pinB_scaleY,
          currentYOffset
        )})`;
      }

      if (scrollRatio <= 0.83) {
        // in
        objs.messageC.style.transform = `translate3d(0, ${partAniPlay(
          values.messageC_translateY_in,
          currentYOffset
        )}%, 0)`;
        objs.messageC.style.opacity = partAniPlay(
          values.messageC_opacity_in,
          currentYOffset
        );
        objs.pinC.style.transform = `scaleY(${partAniPlay(
          values.pinC_scaleY,
          currentYOffset
        )})`;
      } else {
        // out
        objs.messageC.style.transform = `translate3d(0, ${partAniPlay(
          values.messageC_translateY_out,
          currentYOffset
        )}%, 0)`;
        objs.messageC.style.opacity = partAniPlay(
          values.messageC_opacity_out,
          currentYOffset
        );
        objs.pinC.style.transform = `scaleY(${partAniPlay(
          values.pinC_scaleY,
          currentYOffset
        )})`;
      }

      // currentScene 3에서 쓰는 캔버스를 미리 그려주기 시작
      if (scrollRatio > 0.9) {
        drawCanvas3Rects(sceneInfo[3].objs, sceneInfo[3].values);
      }

      break;

    case 3:
      if (!values.rectStartY) {
        // values.rectStartY = objs.canvas.getBoundingClientRect().top;
        values.rectStartY =
          objs.canvas.offsetTop +
          (objs.canvas.height - objs.canvas.height * values.canvasScaleRatio) /
            2;
        values.rectL[2].start = window.innerHeight / 2 / scrollHeight;
        values.rectR[2].start = window.innerHeight / 2 / scrollHeight;
        values.rectL[2].end = values.rectStartY / scrollHeight;
        values.rectR[2].end = values.rectStartY / scrollHeight;
      }
      drawCanvas3Rects(objs, values);

      if (scrollRatio < values.rectL[2].end) {
        // console.log('캔버스 닿기 전');
        objs.canvas.classList.remove("fixed");
      } else {
        // console.log('캔버스 닿은 후');
        // 이미지 블렌드
        values.blendHeight[0] = 0;
        values.blendHeight[1] = objs.canvas.height;
        values.blendHeight[2].start = values.rectL[2].end;
        values.blendHeight[2].end = values.blendHeight[2].start + 0.2;
        const blendHeight = partAniPlay(values.blendHeight, currentYOffset);

        objs.context.drawImage(
          objs.videoImages[1],
          0,
          objs.canvas.height - blendHeight,
          objs.canvas.width,
          blendHeight,
          0,
          objs.canvas.height - blendHeight,
          objs.canvas.width,
          blendHeight
        );

        objs.canvas.classList.add("fixed");
        objs.canvas.style.top = `${
          -(objs.canvas.height - objs.canvas.height * values.canvasScaleRatio) /
          2
        }px`;

        if (scrollRatio > values.blendHeight[2].end) {
          values.canvas_scale[0] = values.canvasScaleRatio;
          values.canvas_scale[1] =
            document.body.offsetWidth / (1.5 * objs.canvas.width);
          values.canvas_scale[2].start = values.blendHeight[2].end;
          values.canvas_scale[2].end = values.canvas_scale[2].start + 0.2;
          objs.canvas.style.marginTop = `0px`;
          objs.canvas.style.transform = `scale(${partAniPlay(
            values.canvas_scale,
            currentYOffset
          )})`;
        }
        if (
          scrollRatio > values.canvas_scale[2].end &&
          values.canvas_scale[2].end > 0
        ) {
          objs.canvas.classList.remove("fixed");
          objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`;

          values.canvasCaption_opacity[2].start = values.canvas_scale[2].end;
          values.canvasCaption_opacity[2].end =
            values.canvasCaption_opacity[2].start + 0.1;
          values.canvasCaption_translateY[2].start =
            values.canvasCaption_opacity[2].start;
          values.canvasCaption_translateY[2].end =
            values.canvasCaption_opacity[2].end;

          objs.canvasCaption.style.opacity = partAniPlay(
            values.canvasCaption_opacity,
            currentYOffset
          );
          objs.canvasCaption.style.transform = `translate3d(0, ${partAniPlay(
            values.canvasCaption_translateY,
            currentYOffset
          )}%, 0)`;
        } else {
          objs.canvasCaption.style.opacity = values.canvasCaption_opacity[0];
        }
      }
      break;
  }
}

function handlerScroll() {
  yOffset = window.pageYOffset;
  //스크롤이 발생될 때 현재 보여지는 section 값을 가져오도록 함.
  let prevHeight = 0;
  for (let i = 0; i < currentScene; i++) {
    prevHeight += sceneInfo[i].scrollHeight;
  }
  if (yOffset > prevHeight + sceneInfo[currentScene].scrollHeight) {
    currentScene++;
  }
  if (yOffset < prevHeight) {
    currentScene--;
  }
  document.body.setAttribute("id", `show-section-${currentScene}`);

  sectionAniPlay(prevHeight);
}

const init = () => {
  //height 값 설정
  setSecHeight();
  //캔버스 이미지 로드
  setCanvasImages();
  //스크롤 이벤트 처리
  window.addEventListener("scroll", () => {
    handlerScroll();
    checkMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      window.location.reload();
    }
  });
};

window.addEventListener("load", init);
