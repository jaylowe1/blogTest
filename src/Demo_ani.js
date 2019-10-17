import React from "react"
import Texty from 'rc-texty';
import { Parallax, scrollScreen, Element } from 'rc-scroll-anim';

function Demo_ani() {
    return (
        <div >

            <Element className="pack-page">
                <div>demo</div>
            </Element>
        
            <Parallax
            animation={{ y: 100 }}
            style={{ transform: 'translateX(-100px)', margin: '10px auto' }}
            className="code-box-shape"
            >
                Hello World
            </Parallax>
            <Parallax
            animation={{ scale: 1 }}
            style={{ transform: 'scale(0)', margin: '10px auto' }}
            className="code-box-shape"
            >
                Hello World
            </Parallax>
            <Parallax
            animation={{ rotate: 360 }}
            style={{ margin: '10px auto' }}
            className="code-box-shape"
            >
                Hello World
            </Parallax>
      </div>
    )


}

export default Demo_ani;