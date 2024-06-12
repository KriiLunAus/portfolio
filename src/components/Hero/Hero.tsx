import Title from "./hero_components/Title/Title"
import Menu from "./hero_components/Menu/Menu"
import Links from "./hero_components/Links/Links"
import css from "./Hero.module.css"

export default function Hero() {
    return (
        <div className={css.heroWrapper}>
            <Title />
            <Menu />
            <Links />
        </div>
    )
}