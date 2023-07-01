import { memo } from "react";
import { DesktopCookbookPage } from "../desktop/pages/DesktopCookbookPage";
import { useViewport } from "../hooks/useViewport";
import { MobileCookbookPage } from "../mobile/pages/MobileCookbookPage";

export const CookbookPage = memo(() => {
  //? ----- if true: mobile view, if false: desktop view,
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <MobileCookbookPage /> : <DesktopCookbookPage />;
});
