import GitHubButton from "./gitHubButton";
import LinkedInButton from "./linkedInButton";

export const PageFooter = () => {
  return (
    <div>
      <span className="flex justify-center mt-10">
        <LinkedInButton />
        <div className="px-3" />
        <GitHubButton />
      </span>
      <span className="flex justify-center">
        <text className="text-md mt-3 mb-12">
          &#169; 2023 Nicholas Alexander Harris
        </text>
      </span>
    </div>
  );
};

export default PageFooter;
