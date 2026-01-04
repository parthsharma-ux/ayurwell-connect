import { Link, LinkProps } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface LocalizedLinkProps extends Omit<LinkProps, "to"> {
  to: string;
}

const LocalizedLink = ({ to, children, ...props }: LocalizedLinkProps) => {
  const { language } = useLanguage();

  // If path already starts with /en or /hi, use it as is
  const localizedTo = to.startsWith("/en") || to.startsWith("/hi") 
    ? to 
    : `/${language}${to === "/" ? "" : to}`;

  return (
    <Link to={localizedTo} {...props}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
