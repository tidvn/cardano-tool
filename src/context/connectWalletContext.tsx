import type { FC } from "react"
import React, { useMemo } from "react"
import { MeshProvider } from "@meshsdk/react";


type Props = {
    children?: React.ReactNode
}
export const Wallet: FC<Props> = ({ children }: Props) => {
    return (
        <MeshProvider>{children}</MeshProvider>
    )
}

