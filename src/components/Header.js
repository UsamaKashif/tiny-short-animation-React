import React from 'react'
import useWebAnimations, { backInDown, backInUp, heartBeat } from "@wellyshen/use-web-animations";


const Header = () => {
    const {ref:description } = useWebAnimations({...backInUp})
    const {ref:title } = useWebAnimations({...heartBeat})
    const {ref:nav3 } = useWebAnimations({...backInDown})
    const {ref:nav2 } = useWebAnimations({...backInDown})
    const {ref:nav1 } = useWebAnimations({...backInDown})
    return (
        <div>
             <header>
                <div class="bg-image"></div>
                <div class="cover"></div>
                <nav>
                    <ul>
                        <a ref={nav1} href="#how-made"><li>How It's Made</li></a>
                        <a ref={nav2}  href="#facts"><li>Facts</li></a>
                        <a ref={nav3}  href="#vs"><li>Tea VS Coffee</li></a>
                    </ul>
                </nav>
                <section class="first-half">
                    <h3 ref={title}>Coffee</h3>
                    <p ref={description}>Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. </p>
                </section>
                <section class="header-img" ></section>
            </header>
        </div>
    )
}

export default Header
