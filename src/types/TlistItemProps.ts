import { ClickButtonType } from "./ClickButtonType"
import { TListItem } from "./TListItem"

export type TlistItemProps = {
    user: TListItem,
    active: string,
    onClick: ClickButtonType
}
