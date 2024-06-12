import css from "./Menu.module.css"
export default function Menu() {

    return (
        <div className={css.menuWrapper}>
            <p>About me</p>
            <p>Projects</p>
            <p>FAQ</p>
        </div>
    )
}