import { useContext, useEffect, useState } from "react";
import { LayoutContext } from "~contexts";

export const useHook = () => {
    const { headerRef } = useContext(LayoutContext);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const headerElement = headerRef.current;

        if (!headerElement) return;

        const { height } = headerElement.getBoundingClientRect();
        setHeaderHeight(height);
    }, [headerRef]);

    return { headerHeight };
};
