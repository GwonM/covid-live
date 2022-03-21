import React, { useState, useEffect } from "react";
import SideCard from "./SideCard";
import * as S from "./style";

export default function Side(): JSX.Element {
    const [active, setActive] = useState<Array<boolean>>([true, false, false]);

    return (
        <>
            <SideCard isLogo={true}>
                <S.Logo>COVID LIVE</S.Logo>
            </SideCard>
            <SideCard isLogo={false}>
                <S.ListItem isActive={active[0]} onClick={() => setActive([true, false, false])}>
                    국내
                </S.ListItem>
                <S.ListItem isActive={active[1]} onClick={() => setActive([false, true, false])}>
                    해외
                </S.ListItem>
                <S.ListItem isActive={active[2]} onClick={() => setActive([false, false, true])}>
                    백신
                </S.ListItem>
            </SideCard>
            {/* <SideCard isLogo={false}>
                <S.Logo>COVID LIVE</S.Logo>
            </SideCard>
            <SideCard isLogo={false}>
                <S.Logo>COVID LIVE</S.Logo>
            </SideCard> */}
        </>
    );
}
