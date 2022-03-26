import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";
import { css } from "../../styles";

interface LinkProps extends NextLinkProps {
  children: ReactElement;
}

const activeLink = css({
  color: "$blue !important",
});

export function Link({ children, ...rest }: LinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeLink() : "";

  return (
    <NextLink {...rest}>
      {cloneElement(children, {
        className,
      })}
    </NextLink>
  );
}
