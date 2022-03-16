import React, { ReactNode } from "react";
import * as S from "./style";

type Props = {
    children: ReactNode;
};
export default function MainCard({ children }: Props): JSX.Element {
    return <S.Card>{children}</S.Card>;
}
