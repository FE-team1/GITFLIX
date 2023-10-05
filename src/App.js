import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.style";
import router from "./routes/router";
import theme from "./styles/theme.style";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { MuiSkeleton } from "./pages/main/components/skeleton";
import { Suspense } from "react";
import { Skeleton } from "@mui/material";
function App() {
  console.log(process.env.NODE_ENV);
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Skeleton />}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Suspense>
    </QueryClientProvider>
  );
}
export default App;
