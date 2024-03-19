import { ClickButtonType } from "./ClickButtonType"
import { TListItem } from "./TListItem"

export type TListProps = {
    list: TListItem[],
    activeId: number,
    onClick: ClickButtonType
} 