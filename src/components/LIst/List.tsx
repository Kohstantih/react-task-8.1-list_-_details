import ListItem from "./LIstItem";
import './LIst.css'
import { TListProps } from "../../types/TListProps";

export default function List({ list, activeId, onClick }: TListProps) {
    return (
        <ul className="users_list">
            {list.map((i) => {
                const activeClass = i.id === +activeId ? 'active_btn' : '';
                return <ListItem key={i.id} user={i} active={activeClass} onClick={onClick}/>;
            })}
        </ul>
    )
}