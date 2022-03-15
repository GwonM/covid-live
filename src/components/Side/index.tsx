import React, { useState, useEffect } from "react";
import SideCard from "./SideCard";
import * as S from "./style";

export default function Side(): JSX.Element {
    const ClickHandler = (e: React.MouseEvent) => {};

    return (
        <>
            <SideCard isLogo={true}>
                <S.Logo>COVID LIVE</S.Logo>
            </SideCard>
            <SideCard isLogo={false}>
                <S.ListItem isActive={true} onClick={ClickHandler}>
                    국내
                </S.ListItem>
                <S.ListItem isActive={true} onClick={ClickHandler}>
                    해외
                </S.ListItem>
                <S.ListItem isActive={true} onClick={ClickHandler}>
                    백신
                </S.ListItem>
            </SideCard>
            <SideCard isLogo={false}>
                <S.Logo>COVID LIVE</S.Logo>
            </SideCard>
            <SideCard isLogo={false}>
                <S.Logo>COVID LIVE</S.Logo>
            </SideCard>
        </>
    );
}
