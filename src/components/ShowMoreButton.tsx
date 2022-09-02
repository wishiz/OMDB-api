import { useStateThroughContext } from "../store";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  onShowMore: (e: any) => void;
};

const ShowMoreButton = ({ onShowMore }: Props) => {
  const { isShowMoreLoading } = useStateThroughContext();

  return (
    <>
      {isShowMoreLoading ? (
        <CircularProgress size={20} sx={{ margin: "0 auto" }} />
      ) : (
        <Button onClick={onShowMore}>ShowMoreButton</Button>
      )}
    </>
  );
};

export default ShowMoreButton;
