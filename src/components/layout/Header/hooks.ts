import { useContext } from "react";
import { LayoutContext } from "~contexts";
import { useRenderTransition } from "~hooks";

export const useController = () => {
    const { headerRef } = useContext(LayoutContext);
    const { render: isSettingsModalOpen, handleRender: handleSettingModal } = useRenderTransition();

    return { headerRef, isSettingsModalOpen, handleSettingModal };
};
