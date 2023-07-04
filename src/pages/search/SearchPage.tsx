import { memo } from "react";
import { useViewport } from "../../hooks/useViewport";
import { MobileSearchPage } from "../../mobile/pages/MobileSearchPage";
import { DesktopSearchPage } from "../../desktop/pages/DesktopSearchPage";

export const SearchPage = memo(() => {
  //? ----- if true: mobile view, if false: desktop view,
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <MobileSearchPage /> : <DesktopSearchPage />;
});
