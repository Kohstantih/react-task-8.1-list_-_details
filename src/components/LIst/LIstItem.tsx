import { TlistItemProps } from "../../types/TlistItemProps";

export default function ListItem({ user, active, onClick }: TlistItemProps) {
    return (
        <li className="users_item">
            <button type="button" data-id={user.id} className={`btn_user_check ${active}`} onClick={onClick}>{user.name}</button>
        </li>
    )
}