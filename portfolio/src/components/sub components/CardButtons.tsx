import { cn } from "../../utils/cn";
import { Button } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const CardButtons = ({
  className,
  liveDemo,
  githubRepo,
}: {
  className?: string;
  liveDemo: string;
  githubRepo: string;
}) => {
  return (
    <div
      className={cn(
        "flex gap-2 justify-evenly items-center text-lg",
        className
      )}
    >
      <Button
        variant="soft"
        color="neutral"
        href={liveDemo}
        component="a"
        endDecorator={<OpenInNewIcon fontSize="small" />}
      >
        Live Demo
      </Button>
      <Button
        variant="soft"
        color="neutral"
        href={githubRepo}
        component="a"
        endDecorator={<GitHubIcon fontSize="small" />}
      >
        Github Repo
      </Button>
    </div>
  );
};

export default CardButtons;
