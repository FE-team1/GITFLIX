import { Skeleton, Stack } from "@mui/material";

export const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width={250}>
      <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={250} height={125} />
    </Stack>
  );
};
