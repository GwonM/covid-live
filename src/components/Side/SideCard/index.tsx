import React, { ReactNode } from "react";
import * as S from "./style";

type Props = {
    children: ReactNode;
    isLogo: boolean;
};

export default function SideCard({ children, isLogo }: Props): JSX.Element {
    return <S.Card isLogo={isLogo}>{children}</S.Card>;
}
